export const securityConfig = {
  password: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
    saltRounds: parseInt(process.env.BCRYPT_ROUNDS || '12'),
  },

  jwt: {
    accessTokenExpiry: process.env.JWT_EXPIRES_IN || '15m',
    refreshTokenExpiry: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    secret: process.env.JWT_SECRET || 'your-super-secret-key-change-in-production',
  },

  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_TTL || '60000'),
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX || '10'),
    authWindowMs: 300000,
    maxAuthAttempts: 5,
  },

  accountLockout: {
    maxAttempts: 5,
    lockoutDuration: 15 * 60 * 1000,
  },

  session: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict' as const,
  },

  cors: {
    origin: process.env.NODE_ENV === 'production'
      ? [process.env.FRONTEND_URL || 'https://yourdomain.com']
      : [process.env.FRONTEND_URL || 'http://localhost:3001', process.env.FRONTEND_URL_ALT || 'http://localhost:3002'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['X-Rate-Limit-Remaining', 'X-Rate-Limit-Reset'],
  },

  audit: {
    logFailedLogins: true,
    logSuccessfulLogins: true,
    logPasswordChanges: true,
    logAccountLockouts: true,
    retentionDays: 90,
  },
};
