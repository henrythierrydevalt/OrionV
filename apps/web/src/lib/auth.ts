import api from './api';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'USER' | 'CREW_MEMBER' | 'MISSION_CONTROLLER';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
  role?: 'ADMIN' | 'USER' | 'CREW_MEMBER' | 'MISSION_CONTROLLER';
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export const authService = {
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await api.post('/users/login', data);
    return response.data;
  },

  async register(data: RegisterData): Promise<User> {
    const response = await api.post('/users/register', data);
    return response.data;
  },

  async getProfile(): Promise<User> {
    const response = await api.get('/users/profile');
    return response.data;
  },

  async getAllUsers(): Promise<User[]> {
    const response = await api.get('/users');
    return response.data;
  },

  logout() {
    if (typeof document !== 'undefined') {
      document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  },

  getToken(): string | null {
    if (typeof document !== 'undefined') {
      const cookies = document.cookie.split(';');
      const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('auth-token='));
      return tokenCookie ? tokenCookie.split('=')[1] : null;
    }
    return null;
  },

  getUser(): User | null {
    return null;
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
};
