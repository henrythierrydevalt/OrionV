'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import {
  Home,
  Users,
  Rocket,
  Zap,
  Heart,
  Radio,
  Activity,
  AlertTriangle,
  Calendar,
  Settings
} from 'lucide-react';

const navigation = [
  { name: 'Painel', href: '/dashboard', icon: Home },
  { name: 'Missões', href: '/missions', icon: Calendar },
  { name: 'Propulsão', href: '/propulsion', icon: Rocket },
  { name: 'Energia', href: '/energy', icon: Zap },
  { name: 'Suporte Vital', href: '/life-support', icon: Heart },
  { name: 'Comunicação', href: '/communication', icon: Radio },
  { name: 'Sensores', href: '/sensors', icon: Activity },
  { name: 'Alertas', href: '/alerts', icon: AlertTriangle },
  { name: 'Tripulação', href: '/crew', icon: Users },
  { name: 'Configurações', href: '/settings', icon: Settings },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden" aria-label="Abrir menu de navegação">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
        <SheetDescription className="sr-only">
          Menu de navegação principal do sistema Orion V
        </SheetDescription>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Orion V</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <nav className="flex-1 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
