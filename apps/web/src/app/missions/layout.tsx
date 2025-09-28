import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';

export default function MissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}
