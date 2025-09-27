'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Heart, Activity, Calendar } from 'lucide-react';

export function CrewScreen() {
  return (
    <PageContainer 
      title="Gerenciamento da Tripulação" 
      description="Monitore e gerencie membros da tripulação da nave espacial"
    >
      <div className="grid gap-6">
        {/* Crew Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Active Crew
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4/4</div>
              <p className="text-xs text-muted-foreground">All crew members active</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Health Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">100%</div>
              <p className="text-xs text-muted-foreground">All systems normal</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Mission Days
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">Days in space</p>
            </CardContent>
          </Card>
        </div>

        {/* Crew Members */}
        <Card>
          <CardHeader>
            <CardTitle>Crew Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/avatars/captain.jpg" />
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Commander Sarah Mitchell</h4>
                    <p className="text-sm text-muted-foreground">Mission Commander</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-green-600">Active</Badge>
                  <Badge variant="secondary">Captain</Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/avatars/pilot.jpg" />
                    <AvatarFallback>DP</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Lt. David Park</h4>
                    <p className="text-sm text-muted-foreground">Pilot & Navigation</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-green-600">Active</Badge>
                  <Badge variant="secondary">Pilot</Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/avatars/engineer.jpg" />
                    <AvatarFallback>AE</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Dr. Anna Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Systems Engineer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-green-600">Active</Badge>
                  <Badge variant="secondary">Engineer</Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/avatars/doctor.jpg" />
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Dr. Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Medical Officer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-green-600">Active</Badge>
                  <Badge variant="secondary">Medical</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crew Health */}
        <Card>
          <CardHeader>
            <CardTitle>Crew Health Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Heart Rate (Avg)</span>
                  <span className="text-sm">72 BPM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Blood Pressure</span>
                  <span className="text-sm">120/80 mmHg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Oxygen Saturation</span>
                  <span className="text-sm">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Sleep Quality</span>
                  <span className="text-sm">8.2/10</span>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full">Health Report</Button>
                <Button variant="outline" className="w-full">Medical Checkup</Button>
                <Button variant="outline" className="w-full">Emergency Protocol</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crew Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Crew Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Daily Briefing</h4>
                    <p className="text-sm text-muted-foreground">08:00 - 08:30 UTC</p>
                  </div>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">System Maintenance</h4>
                    <p className="text-sm text-muted-foreground">14:00 - 16:00 UTC</p>
                  </div>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
