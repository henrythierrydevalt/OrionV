import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';

export default function EnergyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}
