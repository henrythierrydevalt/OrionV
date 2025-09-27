'use server';

import { cookies } from 'next/headers';
import { config } from './config';

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email e senha são obrigatórios' };
  }

  try {
        const response = await fetch(`${config.api.baseUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || 'Falha no login' };
    }

    const data = await response.json();
    const { access_token } = data;

    const cookieStore = await cookies();
    cookieStore.set('auth-token', access_token, {
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
      secure: false,
      sameSite: 'lax'
    });

    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Falha no login' };
  }
}

export async function registerAction(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (!name || !email || !password || !confirmPassword) {
    return { error: 'Todos os campos são obrigatórios' };
  }

  if (password !== confirmPassword) {
    return { error: 'As senhas não coincidem' };
  }

  try {
        const response = await fetch(`${config.api.baseUrl}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || 'Falha no registro' };
    }

    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Falha no registro' };
  }
}