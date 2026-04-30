"use client";

import React from "react";
import FloatingNav from "./floating-nav";

import { IconButton } from "@/components/icon-button";
import { Tooltip } from "@/components/tooltip";
import { useAppStore } from "@/stores/app-store";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import type { ReactNode } from "react";

type LayoutProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

const Layout = ({ title, description, children }: LayoutProps) => {
  const darkMode = useAppStore((state) => state.darkMode);
  const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);

  const handleDarkmode = () => {
    toggleDarkMode();
  };

  return (
    <main
      aria-label={title ?? description ?? "Portfolio content"}
      className="site-shell"
    >
      <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
        <IconButton
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={handleDarkmode}
          className="theme-toggle"
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
