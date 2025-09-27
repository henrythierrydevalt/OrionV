'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Radio, Satellite, Wifi, MessageSquare } from 'lucide-react';

export function CommunicationScreen() {
  return (
    <PageContainer 
      title="Sistemas de Comunicação" 
      description="Monitore e controle sistemas de comunicação da nave espacial"
    >
      <div className="grid gap-6">
        {/* Communication Status */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Radio className="h-4 w-4" />
                Força do Sinal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Qualidade do link terrestre</p>
              <Progress value={92} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Satellite className="h-4 w-4" />
                Taxa de Dados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4 Mbps</div>
              <p className="text-xs text-muted-foreground">Velocidade de transmissão</p>
              <Progress value={85} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Wifi className="h-4 w-4" />
                Status da Antena
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Ativo</div>
              <p className="text-xs text-muted-foreground">Array principal</p>
              <Progress value={100} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Fila de Mensagens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Mensagens pendentes</p>
              <Progress value={60} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Communication Channels */}
        <Card>
          <CardHeader>
            <CardTitle>Canais de Comunicação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Radio className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Link Principal com a Terra</h4>
                    <p className="text-sm text-muted-foreground">Rede de Espaço Profundo</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-green-600">Conectado</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Satellite className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Canal de Backup</h4>
                    <p className="text-sm text-muted-foreground">Frequência de emergência</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-yellow-600">Em Espera</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Communication Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Controles de Comunicação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Potência de Transmissão</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Banda de Frequência</span>
                  <span className="text-sm">X-Band</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Posição da Antena</span>
                  <span className="text-sm">Azimute 45°</span>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full">Enviar Mensagem</Button>
                <Button variant="outline" className="w-full">Testar Conexão</Button>
                <Button variant="outline" className="w-full">Sinal de Emergência</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
