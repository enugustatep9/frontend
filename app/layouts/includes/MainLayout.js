"use client";
import TopMenu from "@/app/layouts/includes/TopMenu";
import styles from "./MainLayout.module.scss";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import "animate.css";
import { useEffect, useState } from "react";
import Preloader from "@/app/preloader";

export default function MainLayout({ children }) {
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div
          id="MainLayout"
          className={
            styles[
              `${
                pathName.includes("governors_den")
                  ? "mainlayout_dark"
                  : "mainlayout"
              }`
            ]
          }
        >
          <TopMenu />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
}
