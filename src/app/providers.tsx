"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { Toaster } from "@/types/components/ui/sonner";

import { useAppStore } from "@/stores/app-store";
import { TooltipProvider } from "@/types/components/ui/tooltip";
import { getCurrentTheme, loadTheme } from "@/utils/css-theme";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  const darkMode = useAppStore((state) => state.darkMode);
  const setDarkMode = useAppStore((state) => state.setDarkMode);
  const initialTheme = useRef<"dark" | "light" | null>(null);

  useEffect(() => {
    const theme = getCurrentTheme();
    initialTheme.current = theme;
    setDarkMode(theme === "dark");
    loadTheme(theme);
  }, [setDarkMode]);

  useEffect(() => {
    const nextTheme = darkMode ? "dark" : "light";

    if (initialTheme.current) {
      if (initialTheme.current === nextTheme) {
        initialTheme.current = null;
      }
      return;
    }

    loadTheme(nextTheme);
  }, [darkMode]);

  return (
    <TooltipProvider>
      <Toaster />
      {children}
    </TooltipProvider>
  );
}
