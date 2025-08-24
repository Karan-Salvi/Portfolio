import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarMain from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GridBackground } from "@/components/ui/GridBackGround";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karan Salvi",
  description:
    "Karan Salvi's portfolio website showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-hidden`}
      >
        <GridBackground>
          <main className="max-w-4xl mx-auto z-0">
            <NavbarMain />
            {children}
            <Footer />
          </main>
        </GridBackground>
      </body>
    </html>
  );
}
