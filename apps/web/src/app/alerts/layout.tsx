import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';

export default function AlertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}
