"use client";

import React, { useEffect, useRef } from "react";
import FloatingNav from "./floating-nav";

import { IconButton } from "@/components/icon-button";
import { Tooltip } from "@/components/tooltip";
import { useAppStore } from "@/stores/app-store";
import { setupRevealOnScroll } from "@/types/animations/reveal";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type LayoutProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

const Layout = ({ title, description, children }: LayoutProps) => {
  const pathname = usePathname();
  const mainRef = useRef<HTMLElement | null>(null);
  const darkMode = useAppStore((state) => state.darkMode);
  const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);

  const handleDarkmode = () => {
    toggleDarkMode();
  };

  useEffect(() => {
    if (!mainRef.current) return undefined;

    return setupRevealOnScroll(mainRef.current, {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    });
  }, [pathname]);

  return (
    <main
      ref={mainRef}
      aria-label={title ?? description ?? "Portfolio content"}
      className="relative min-h-screen w-full overflow-hidden bg-background text-text before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[linear-gradient(rgba(0,39,44,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,39,44,0.05)_1px,transparent_1px)] before:bg-[size:72px_72px] before:opacity-70 dark:before:bg-[linear-gradient(rgba(225,255,81,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(225,255,81,0.055)_1px,transparent_1px)]"
    >
      <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
        <IconButton
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={handleDarkmode}
          className="fixed right-4 top-4 z-50 border border-border bg-card/75 text-text shadow-[var(--shadow-soft)] backdrop-blur-xl hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </IconButton>
      </Tooltip>
      {children}
      <FloatingNav />
    </main>
  );
};

export default Layout;
