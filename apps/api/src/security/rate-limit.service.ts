import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RateLimitService {
  constructor(private prisma: PrismaService) {}

  async checkRateLimit(key: string, limit: number, windowMs: number): Promise<{ allowed: boolean; remaining: number; resetTime: Date }> {
    const now = new Date();
    const resetTime = new Date(now.getTime() + windowMs);

    const existing = await this.prisma.rateLimit.findUnique({
      where: { key }
    });

    if (!existing) {
      await this.prisma.rateLimit.create({
        data: {
          key,
          count: 1,
          resetTime
        }
      });

      return {
        allowed: true,
        remaining: limit - 1,
        resetTime
      };
    }

    if (existing.resetTime < now) {
      await this.prisma.rateLimit.update({
        where: { key },
        data: {
          count: 1,
          resetTime
        }
      });

      return {
        allowed: true,
        remaining: limit - 1,
        resetTime
      };
    }

    if (existing.count >= limit) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: existing.resetTime
      };
    }

    await this.prisma.rateLimit.update({
      where: { key },
      data: {
        count: existing.count + 1
      }
    });

    return {
      allowed: true,
      remaining: limit - existing.count - 1,
      resetTime: existing.resetTime
    };
  }

  async cleanupExpiredLimits(): Promise<void> {
    await this.prisma.rateLimit.deleteMany({
      where: {
        resetTime: {
          lt: new Date()
        }
      }
    });
  }
}
