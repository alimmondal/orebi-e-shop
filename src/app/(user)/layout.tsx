import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
// import { Inter } from "next/font/google";
import PageButton from "@/components/PageButton";
import "../../styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orebi",
  description: "Orebi e-shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-display">
        <Navbar />
        <PageButton />
        {children}
      </body>
    </html>
  );
}
