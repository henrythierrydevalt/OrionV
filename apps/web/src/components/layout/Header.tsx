'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MobileMenu } from './MobileMenu';
import { Rocket, LogOut } from 'lucide-react';

export function Header() {
  const logout = () => {
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    window.location.href = '/login';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <MobileMenu />
            <Rocket className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-xl font-bold text-foreground">Orion V</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="flex items-center space-x-2"
              aria-label="Fazer logout do sistema"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
