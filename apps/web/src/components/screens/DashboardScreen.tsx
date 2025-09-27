import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Users, 
  AlertTriangle, 
  TrendingUp,
  Rocket,
  Zap,
  Heart,
  Radio
} from 'lucide-react';

export function DashboardScreen() {
  return (
    <PageContainer 
      title="Painel de Controle" 
      description="Bem-vindo ao sistema Orion V"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Rocket className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Propulsão</h3>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Operacional
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">98%</div>
            <p className="text-sm text-muted-foreground">Eficiência do sistema</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <h3 className="font-semibold">Energia</h3>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Ótimo
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">85%</div>
            <p className="text-sm text-muted-foreground">Nível de energia</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold">Suporte Vital</h3>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Estável
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">100%</div>
            <p className="text-sm text-muted-foreground">Nível de oxigênio</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Radio className="h-5 w-5 text-purple-500" />
                <h3 className="font-semibold">Comunicação</h3>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Conectado
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Forte</div>
            <p className="text-sm text-muted-foreground">Força do sinal</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Alertas Recentes</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Verificação do sistema de propulsão</p>
                  <p className="text-xs text-muted-foreground">2 horas atrás</p>
                </div>
                <span className="text-xs text-yellow-600">Aviso</span>
              </div>
              <div className="flex items-center space-x-3">
                <Activity className="h-4 w-4 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Níveis de energia normalizados</p>
                  <p className="text-xs text-muted-foreground">4 horas atrás</p>
                </div>
                <span className="text-xs text-green-600">Resolvido</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Status da Tripulação</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm">Membros ativos da tripulação</span>
                </div>
                <span className="text-sm font-semibold">4/4</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Progresso da missão</span>
                </div>
                <span className="text-sm font-semibold">67%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Ações Rápidas</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <Rocket className="h-6 w-6 mb-2" />
              <span className="text-sm">Propulsão</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Zap className="h-6 w-6 mb-2" />
              <span className="text-sm">Energia</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Heart className="h-6 w-6 mb-2" />
              <span className="text-sm">Suporte Vital</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Radio className="h-6 w-6 mb-2" />
              <span className="text-sm">Comunicação</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
}