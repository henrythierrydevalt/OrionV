import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';

export default function CommunicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}
