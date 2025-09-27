import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Orion V",
  description: "Faça login no sistema Orion V",
};

export default function LoginLayout({
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
