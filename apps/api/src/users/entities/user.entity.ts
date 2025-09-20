import { User as PrismaUser, UserRole } from '@prisma/client';

export class User implements PrismaUser {
  id: string;
  email: string;
  name: string;
  password: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
