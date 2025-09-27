'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Droplets, Wind, Thermometer } from 'lucide-react';

export function LifeSupportScreen() {
  return (
    <PageContainer 
      title="Sistemas de Suporte Vital" 
      description="Monitore e controle sistemas de suporte vital para segurança da tripulação"
    >
      <div className="grid gap-6">
        {/* Vital Systems */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Wind className="h-4 w-4" />
                Nível de Oxigênio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">21.2%</div>
              <p className="text-xs text-muted-foreground">O₂ Atmosférico</p>
              <Progress value={95} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Droplets className="h-4 w-4" />
                Umidade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45%</div>
              <p className="text-xs text-muted-foreground">Umidade relativa</p>
              <Progress value={45} className="mt-2" />
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
              <div className="text-2xl font-bold">22°C</div>
              <p className="text-xs text-muted-foreground">Temperatura da cabine</p>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Qualidade do Ar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <p className="text-xs text-muted-foreground">Eficiência do filtro</p>
              <Progress value={98} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>Status do Sistema</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Purificadores de CO₂</span>
                  <Badge variant="outline" className="text-green-600">Operacional</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Circulação de Ar</span>
                  <Badge variant="outline" className="text-green-600">Ativo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Reciclagem de Água</span>
                  <Badge variant="outline" className="text-green-600">Normal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Gerenciamento de Resíduos</span>
                  <Badge variant="outline" className="text-green-600">Funcional</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full">O₂ de Emergência</Button>
                <Button variant="outline" className="w-full">Purificar Atmosfera</Button>
                <Button variant="outline" className="w-full">Diagnóstico do Sistema</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Controles Ambientais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Pressão Atmosférica</span>
                <span className="text-sm font-medium">101,3 kPa</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Concentração de CO₂</span>
                <span className="text-sm font-medium">0,04%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Taxa de Fluxo de Ar</span>
                <span className="text-sm font-medium">15 m³/min</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Taxa de Recuperação de Água</span>
                <span className="text-sm font-medium">95%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
