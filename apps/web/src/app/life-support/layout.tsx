import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';

export default function LifeSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}
