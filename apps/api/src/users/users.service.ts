import { Injectable, ConflictException, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { SecurityService } from '../security/security.service';
import { AuditService } from '../security/audit.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private securityService: SecurityService,
    private auditService: AuditService,
  ) {}

  async create(createUserDto: CreateUserDto, ipAddress?: string, userAgent?: string): Promise<Omit<User, 'password'>> {
    const { email, password, ...rest } = createUserDto;
    
    const passwordValidation = this.securityService.validatePasswordStrength(password);
    if (!passwordValidation.isValid) {
      throw new BadRequestException({
        message: 'Senha não atende aos critérios de segurança',
        errors: passwordValidation.errors
      });
    }
    
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Usuário com este email já existe');
    }

    const hashedPassword = await this.securityService.hashPassword(password);

    const user = await this.prisma.user.create({
      data: {
        ...rest,
        email,
        password: hashedPassword,
      },
    });

    await this.auditService.logAction(
      user.id,
      'USER_CREATED',
      'User',
      ipAddress || null,
      userAgent || null,
      { email: user.email, role: user.role }
    );

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async findAll(): Promise<Omit<User, 'password'>[]> {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true,
        emailVerified: true,
        lastLogin: true,
        loginAttempts: true,
        lockedUntil: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return users;
  }

  async findOne(id: string): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true,
        emailVerified: true,
        lastLogin: true,
        loginAttempts: true,
        lockedUntil: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto, ipAddress?: string, userAgent?: string): Promise<Omit<User, 'password'>> {
    const { password, ...rest } = updateUserDto;

    const updateData: any = { ...rest };

    if (password) {
      const passwordValidation = this.securityService.validatePasswordStrength(password);
      if (!passwordValidation.isValid) {
        throw new BadRequestException({
          message: 'Senha não atende aos critérios de segurança',
          errors: passwordValidation.errors
        });
      }
      
      updateData.password = await this.securityService.hashPassword(password);
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true,
        emailVerified: true,
        lastLogin: true,
        loginAttempts: true,
        lockedUntil: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    await this.auditService.logAction(
      id,
      'USER_UPDATED',
      'User',
      ipAddress || null,
      userAgent || null,
      { updatedFields: Object.keys(rest) }
    );

    return user;
  }

  async remove(id: string, ipAddress?: string, userAgent?: string): Promise<void> {
    await this.auditService.logAction(
      id,
      'USER_DELETED',
      'User',
      ipAddress || null,
      userAgent || null
    );

    await this.prisma.user.delete({
      where: { id },
    });
  }

  async login(loginDto: LoginDto, ipAddress?: string, userAgent?: string): Promise<{ access_token: string; refresh_token: string; user: Omit<User, 'password'> }> {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      await this.auditService.logAction(
        null,
        'LOGIN_FAILED',
        'Auth',
        ipAddress || null,
        userAgent || null,
        { email, reason: 'User not found' }
      );
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const isLocked = await this.securityService.checkAccountLockout(user.id);
    if (isLocked) {
      await this.auditService.logAction(
        user.id,
        'LOGIN_BLOCKED',
        'Auth',
        ipAddress || null,
        userAgent || null,
        { email, reason: 'Account locked' }
      );
      throw new UnauthorizedException('Conta temporariamente bloqueada. Tente novamente em alguns minutos.');
    }

    if (!user.isActive) {
      await this.auditService.logAction(
        user.id,
        'LOGIN_FAILED',
        'Auth',
        ipAddress || null,
        userAgent || null,
        { email, reason: 'Account inactive' }
      );
      throw new UnauthorizedException('Conta inativa');
    }

    const isPasswordValid = await this.securityService.comparePassword(password, user.password);

    if (!isPasswordValid) {
      await this.securityService.handleFailedLogin(user.id);
      
      await this.auditService.logAction(
        user.id,
        'LOGIN_FAILED',
        'Auth',
        ipAddress || null,
        userAgent || null,
        { email, reason: 'Invalid password' }
      );
      
      throw new UnauthorizedException('Credenciais inválidas');
    }

    await this.securityService.handleSuccessfulLogin(user.id);

    const payload = { sub: user.id, email: user.email, role: user.role };
    const access_token = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refresh_token = this.jwtService.sign({ sub: user.id }, { expiresIn: '7d' });

    const sessionToken = this.securityService.generateSecureToken(64);
    await this.prisma.session.create({
      data: {
        userId: user.id,
        token: sessionToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        ipAddress: ipAddress || null,
        userAgent: userAgent || null,
      },
    });

    await this.prisma.refreshToken.create({
      data: {
        userId: user.id,
        token: refresh_token,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    await this.auditService.logAction(
      user.id,
      'LOGIN_SUCCESS',
      'Auth',
      ipAddress || null,
      userAgent || null,
      { email }
    );

    const { password: _, ...userWithoutPassword } = user;

    return {
      access_token,
      refresh_token,
      user: userWithoutPassword,
    };
  }

  async refreshToken(refreshToken: string, ipAddress?: string, userAgent?: string): Promise<{ access_token: string }> {
    const tokenData = await this.prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: { user: true },
    });

    if (!tokenData || tokenData.isRevoked || tokenData.expiresAt < new Date()) {
      throw new UnauthorizedException('Refresh token inválido ou expirado');
    }

    if (!tokenData.user.isActive) {
      throw new UnauthorizedException('Conta inativa');
    }

    const payload = { sub: tokenData.user.id, email: tokenData.user.email, role: tokenData.user.role };
    const access_token = this.jwtService.sign(payload, { expiresIn: '15m' });

    await this.auditService.logAction(
      tokenData.user.id,
      'TOKEN_REFRESHED',
      'Auth',
      ipAddress || null,
      userAgent || null
    );

    return { access_token };
  }

  async logout(userId: string, ipAddress?: string, userAgent?: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { userId, isRevoked: false },
      data: { isRevoked: true },
    });

    await this.prisma.session.updateMany({
      where: { userId, isActive: true },
      data: { isActive: false },
    });

    await this.auditService.logAction(
      userId,
      'LOGOUT',
      'Auth',
      ipAddress || null,
      userAgent || null
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}