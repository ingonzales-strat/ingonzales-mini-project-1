import type { Metadata } from "next";
import NavBar from '../components/navi_bar';
import { IconBrandGithubFilled,IconBrandLinkedinFilled, IconMailbox } from "@tabler/icons-react"


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
       
        <footer className="row-start-3 flex gap-[24px] p-8 flex-wrap items-center justify-center">
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"href="mailto:isaiahnikologonzales@outlook.com"
            target="_blank" rel="noopener noreferrer">
              <IconMailbox/>
          </a>
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"href="https://www.linkedin.com/in/inikologon/"
            target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedinFilled/>
          </a>
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"href="https://github.com/Koniiro"
            target="_blank" rel="noopener noreferrer">
              <IconBrandGithubFilled/>
          </a>
        </footer>
         </div>
      </body>
    </html>
  );
}
