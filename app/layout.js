"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import "animate.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enugu State Website",
  description: "Enugu State Website",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
