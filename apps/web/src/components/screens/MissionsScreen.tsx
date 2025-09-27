'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Rocket, MapPin, Clock } from 'lucide-react';

export function MissionsScreen() {
  return (
    <PageContainer 
      title="Missões" 
      description="Gerencie e monitore missões da nave espacial"
    >
      <div className="grid gap-6">
        {/* Current Mission */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              Missão Atual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Orion V - Trânsito para Marte</h3>
                  <p className="text-sm text-muted-foreground">Missão de exploração do espaço profundo</p>
                </div>
                <Badge variant="secondary">Em Andamento</Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Dia 127</p>
                    <p className="text-xs text-muted-foreground">de 180</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">2,3M km</p>
                    <p className="text-xs text-muted-foreground">para Marte</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">53 dias</p>
                    <p className="text-xs text-muted-foreground">restantes</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">70%</p>
                    <p className="text-xs text-muted-foreground">completo</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission History */}
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Missões</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Orion IV - Pouso Lunar</h4>
                  <p className="text-sm text-muted-foreground">Concluída com sucesso</p>
                </div>
                <Badge variant="outline" className="text-green-600">Concluída</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Orion III - Órbita Terrestre</h4>
                  <p className="text-sm text-muted-foreground">Missão de teste de sistemas</p>
                </div>
                <Badge variant="outline" className="text-green-600">Concluída</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-3">
              <Button variant="outline" className="justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Planejar Nova Missão
              </Button>
              <Button variant="outline" className="justify-start">
                <Rocket className="mr-2 h-4 w-4" />
                Análise de Missões
              </Button>
              <Button variant="outline" className="justify-start">
                <MapPin className="mr-2 h-4 w-4" />
                Planejamento de Trajetória
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
