'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Zap, Battery, Sun, Activity } from 'lucide-react';

export function EnergyScreen() {
  return (
    <PageContainer 
      title="Gerenciamento de Energia" 
      description="Monitore e controle sistemas de energia da nave espacial"
    >
      <div className="grid gap-6">
        {/* Power Status */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Energia Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">Eficiência do sistema</p>
              <Progress value={87} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Battery className="h-4 w-4" />
                Nível da Bateria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Carga restante</p>
              <Progress value={92} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Sun className="h-4 w-4" />
                Painéis Solares
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground">Eficiência de saída</p>
              <Progress value={95} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Consumo de Energia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3 kW</div>
              <p className="text-xs text-muted-foreground">Consumo atual</p>
              <Progress value={65} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Power Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Energia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Sistemas de Propulsão</span>
                <div className="flex items-center gap-2">
                  <Progress value={85} className="w-20" />
                  <span className="text-sm font-medium">1,2 kW</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Suporte Vital</span>
                <div className="flex items-center gap-2">
                  <Progress value={60} className="w-20" />
                  <span className="text-sm font-medium">0,8 kW</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Comunicação</span>
                <div className="flex items-center gap-2">
                  <Progress value={45} className="w-20" />
                  <span className="text-sm font-medium">0,3 kW</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Energy Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Fontes de Energia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Painéis Solares</span>
                  <Badge variant="outline" className="text-green-600">Ativo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Reator Nuclear</span>
                  <Badge variant="outline" className="text-green-600">Em Espera</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Bateria de Backup</span>
                  <Badge variant="outline" className="text-green-600">Carregando</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full">Ativar Reator</Button>
                <Button variant="outline" className="w-full">Controle dos Painéis Solares</Button>
                <Button variant="outline" className="w-full">Gerenciamento de Bateria</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
