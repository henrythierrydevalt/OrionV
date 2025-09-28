import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';

export default function SensorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}
