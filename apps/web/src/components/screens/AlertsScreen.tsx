'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle, XCircle, Clock } from 'lucide-react';

export function AlertsScreen() {
  return (
    <PageContainer 
      title="Alertas do Sistema" 
      description="Monitore e gerencie alertas do sistema da nave espacial"
    >
      <div className="grid gap-6">
        {/* Alert Summary */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                Alertas Críticos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">2</div>
              <p className="text-xs text-muted-foreground">Require immediate attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-500" />
                Warnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">5</div>
              <p className="text-xs text-muted-foreground">Monitor closely</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Resolved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">12</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Active Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-red-800 dark:text-red-200">Propulsion System Overheat</p>
                    <p className="text-sm text-red-600 dark:text-red-300">Engine temperature exceeds safe operating limits</p>
                  </div>
                  <Badge variant="destructive">Critical</Badge>
                </div>
              </AlertDescription>
            </Alert>

            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-red-800 dark:text-red-200">Oxygen Level Critical</p>
                    <p className="text-sm text-red-600 dark:text-red-300">Life support system oxygen levels below threshold</p>
                  </div>
                  <Badge variant="destructive">Critical</Badge>
                </div>
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
              <Clock className="h-4 w-4 text-yellow-600" />
              <AlertDescription>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">Communication Signal Weak</p>
                    <p className="text-sm text-yellow-600 dark:text-yellow-300">Signal strength below optimal levels</p>
                  </div>
                  <Badge variant="outline" className="text-yellow-600">Warning</Badge>
                </div>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Alert History */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Alert History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h4 className="font-medium">Energy System Normalized</h4>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-green-600">Resolved</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h4 className="font-medium">Sensor Calibration Complete</h4>
                    <p className="text-sm text-muted-foreground">4 hours ago</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-green-600">Resolved</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alert Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <Button className="w-full">Acknowledge All Alerts</Button>
                <Button variant="outline" className="w-full">Export Alert Log</Button>
                <Button variant="outline" className="w-full">Configure Alerts</Button>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full">Emergency Procedures</Button>
                <Button variant="outline" className="w-full">Alert History</Button>
                <Button variant="outline" className="w-full">System Status</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
