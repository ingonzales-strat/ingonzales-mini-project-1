import type { Metadata } from "next";
import NavBar from '../components/navi_bar';
import MyFooter from "@/components/footer";


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niko's Portfolio",
  description: "More shenanigans from Niko Gonzales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <NavBar/>
        {children}
        <MyFooter/>
        
         </div>
      </body>
    </html>
  );
}
