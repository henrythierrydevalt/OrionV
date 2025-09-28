import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}
