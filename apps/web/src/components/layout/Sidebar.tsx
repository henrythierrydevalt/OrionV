'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:pt-16">
      <div className="flex flex-col flex-grow bg-muted/50 border-r border-border overflow-y-auto">
        <div className="flex flex-col flex-grow">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 flex-shrink-0 h-5 w-5",
                      isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
