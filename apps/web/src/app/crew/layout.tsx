import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';

export default function CrewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}
