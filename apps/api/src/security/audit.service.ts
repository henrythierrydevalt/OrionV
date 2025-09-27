import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(private prisma: PrismaService) {}

  async logAction(
    userId: string | null,
    action: string,
    resource: string | null,
    ipAddress: string | null,
    userAgent: string | null,
    metadata?: any
  ): Promise<void> {
    try {
      await this.prisma.auditLog.create({
        data: {
          userId,
          action,
          resource,
          ipAddress,
          userAgent,
          metadata: metadata || null
        }
      });
    } catch (error) {
      console.error('Erro ao registrar auditoria:', error);
    }
  }
}