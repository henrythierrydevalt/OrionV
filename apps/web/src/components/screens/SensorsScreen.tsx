'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Activity, Eye, Compass, Thermometer } from 'lucide-react';

export function SensorsScreen() {
  return (
    <PageContainer 
      title="Sistemas de Sensores" 
      description="Monitore e analise dados dos sensores da nave espacial"
    >
      <div className="grid gap-6">
        {/* Sensor Status */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Sensores de Movimento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <p className="text-xs text-muted-foreground">Acelerômetro</p>
              <Progress value={98} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Sensores Ópticos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground">Array de câmeras</p>
              <Progress value={95} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Compass className="h-4 w-4" />
                Navegação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100%</div>
              <p className="text-xs text-muted-foreground">Precisão GPS</p>
              <Progress value={100} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                Ambiental
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Temperatura</p>
              <Progress value={92} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Sensor Data */}
        <Card>
          <CardHeader>
            <CardTitle>Dados dos Sensores em Tempo Real</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Aceleração (X)</span>
                    <span className="text-sm">0.02 m/s²</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Aceleração (Y)</span>
                    <span className="text-sm">-0.01 m/s²</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Aceleração (Z)</span>
                    <span className="text-sm">0.00 m/s²</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Velocidade Angular</span>
                    <span className="text-sm">0.15°/s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Campo Magnético</span>
                    <span className="text-sm">45.2 μT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Nível de Radiação</span>
                    <span className="text-sm">0.8 mSv/h</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sensor Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Controles dos Sensores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Taxa de Coleta de Dados</span>
                  <span className="text-sm">10 Hz</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status de Calibração</span>
                  <Badge variant="outline" className="text-green-600">Atual</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Armazenamento de Dados</span>
                  <Badge variant="outline" className="text-green-600">Disponível</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full">Calibrar Sensores</Button>
                <Button variant="outline" className="w-full">Exportar Dados</Button>
                <Button variant="outline" className="w-full">Diagnóstico dos Sensores</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
