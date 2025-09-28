'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function HomeScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="h-16 w-16 text-primary mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
            <span className="text-2xl">🚀</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Orion V</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Sistema Avançado de Gerenciamento e Monitoramento de Nave Espacial
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="h-8 w-8 text-primary mx-auto mb-3 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">Controle de Propulsão</h3>
              <p className="text-sm text-muted-foreground">Monitore e controle sistemas de propulsão da nave com dados em tempo real</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-8 w-8 text-yellow-500 mx-auto mb-3 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-sm">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Gerenciamento de Energia</h3>
              <p className="text-sm text-muted-foreground">Otimize distribuição de energia e eficiência dos painéis solares</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="h-8 w-8 text-green-500 mx-auto mb-3 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-sm">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2">Suporte Vital</h3>
              <p className="text-sm text-muted-foreground">Controle ambiental e monitoramento de segurança da tripulação</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-x-4">
          <Button size="lg" onClick={() => window.location.href = '/login'}>
            Entrar
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.location.href = '/register'}>
            Criar Conta
          </Button>
        </div>
      </div>
    </div>
  );
}