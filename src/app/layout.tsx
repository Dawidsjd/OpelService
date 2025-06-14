import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opel Service",
  description: "Your trusted Opel service provider",
  icons: {
    icon: "/logo/logo.png", // Ścieżka do favicon w folderze public
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
