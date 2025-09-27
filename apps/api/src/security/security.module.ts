import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { SecurityService } from './security.service';
import { RateLimitService } from './rate-limit.service';
import { AuditService } from './audit.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
  ],
  providers: [SecurityService, RateLimitService, AuditService],
  exports: [SecurityService, RateLimitService, AuditService],
})
export class SecurityModule {}