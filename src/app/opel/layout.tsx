import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Opel Service | repairs",
  description: "Explore the repairs section for your Opel vehicle",
  icons: {
    icon: "/logo/logo.png", // Ścieżka do ikony
  },
};

export default function HomeDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen relative bg-[#14181f] bg-grid-white/[0.1]">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-[#14181f] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#14181f)]"></div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
