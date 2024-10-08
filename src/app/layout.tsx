import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/nav-bar";
import Footer from "@/components/footer";
import Ham from "@/components/ham";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en " suppressHydrationWarning
      className="flex justify-center text-white overflow-x-hidden items-center w-full"
     
    >
      <body
        className={`${inter.className} w-full bg-grid-white/[0.04] overflow-x-hidden bg-black px-4 py-2 md:p-7 flex flex-col justify-center items-center text-white`}
      >
        {/* Show NavBar on screens larger than md and hide Ham */}
        <div className="hidden md:flex w-full">
          <NavBar />
        </div>

        {/* Show Ham on screens smaller than md and hide NavBar */}
        <div className="flex md:hidden w-full ">
          <Ham />
        </div>

        {children}
        <Toaster />

        <Footer />
      </body>
    </html>
  );
}
