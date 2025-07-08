import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { getSession } from "next-auth/react";
import { auth } from '@/lib/auth';
import Footer from "./_components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Todo List",
  description: "Be productive with this todo app",
};

type LayoutProps = {
  children: ReactNode;
};
const Layout = async ({ children }: LayoutProps) => {
  const session = await auth();
  const userId = await session?.user?.id as string;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
        <main className="min-h-screen flex flex-col">
            <Navbar userId={userId}/>
            {children}
           <Footer/>
        </main>
        </SessionProvider>
      </body>
    </html>
  );
};

export { metadata };
export default Layout;
