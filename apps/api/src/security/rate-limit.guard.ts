import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { RateLimitService } from './rate-limit.service';

@Injectable()
export class RateLimitGuard implements CanActivate {
  constructor(private rateLimitService: RateLimitService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const ip = request.ip || request.connection.remoteAddress;
    const key = `rate_limit:${ip}`;

    const result = await this.rateLimitService.checkRateLimit(key, 10, 60000);

    if (!result.allowed) {
      throw new HttpException(
        {
          message: 'Muitas tentativas. Tente novamente em alguns minutos.',
          retryAfter: Math.ceil((result.resetTime.getTime() - Date.now()) / 1000)
        },
        HttpStatus.TOO_MANY_REQUESTS
      );
    }

    return true;
  }
}
