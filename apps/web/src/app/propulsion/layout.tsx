import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';

export default function PropulsionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}
