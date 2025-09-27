import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro - Orion V",
  description: "Registre-se no sistema Orion V",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {children}
    </div>
  );
}
