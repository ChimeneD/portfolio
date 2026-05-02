import { create } from "zustand";

type AppState = {
  activeLink: string;
  darkMode: boolean;
  timeout: number;
  underConstruction: boolean;
};

type AppActions = {
  setActiveLink: (activeLink: string) => void;
  setDarkMode: (darkMode: boolean) => void;
  toggleDarkMode: () => void;
};

export const useAppStore = create<AppState & AppActions>((set) => ({
  activeLink: "",
  darkMode: false,
  timeout: 1000,
  underConstruction: false,
  setActiveLink: (activeLink) => set({ activeLink }),
  setDarkMode: (darkMode) => set({ darkMode }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
