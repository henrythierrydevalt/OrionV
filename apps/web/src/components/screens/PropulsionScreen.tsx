'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Rocket, Gauge, Thermometer, Zap } from 'lucide-react';

export function PropulsionScreen() {
  return (
    <PageContainer 
      title="Sistema de Propulsão" 
      description="Monitore e controle sistemas de propulsão da nave espacial"
    >
      <div className="grid gap-6">
        {/* System Status */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                Motor Principal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <p className="text-xs text-muted-foreground">Eficiência</p>
              <Progress value={98} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Gauge className="h-4 w-4" />
                Empuxo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3M N</div>
              <p className="text-xs text-muted-foreground">Saída atual</p>
              <Progress value={85} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                Temperatura
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247°C</div>
              <p className="text-xs text-muted-foreground">Temp do motor</p>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Nível de Combustível
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67%</div>
              <p className="text-xs text-muted-foreground">Restante</p>
              <Progress value={67} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Engine Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Controles do Motor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status do Motor Principal</span>
                  <Badge variant="outline" className="text-green-600">Ativo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Array de Propulsores</span>
                  <Badge variant="outline" className="text-green-600">Operacional</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Injeção de Combustível</span>
                  <Badge variant="outline" className="text-green-600">Normal</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full">Iniciar Motor</Button>
                <Button variant="outline" className="w-full">Parada de Emergência</Button>
                <Button variant="outline" className="w-full">Calibrar Sistemas</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Métricas de Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Taxa de Consumo de Combustível</span>
                <span className="text-sm font-medium">2,3 kg/s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Impulso Específico</span>
                <span className="text-sm font-medium">450 s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Relação Empuxo-Peso</span>
                <span className="text-sm font-medium">1,2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Tempo Total de Queima</span>
                <span className="text-sm font-medium">127,3 horas</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
