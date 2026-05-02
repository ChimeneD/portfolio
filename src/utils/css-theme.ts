const DARK_MODE_COOKIE = "darkMode";

const getCookie = (name: string) => {
  if (typeof document === "undefined") {
    return undefined;
  }

  const cookie = document.cookie
    .split("; ")
    .find((value) => value.startsWith(`${name}=`));

  return cookie ? decodeURIComponent(cookie.split("=").slice(1).join("=")) : undefined;
};

const setCookie = (name: string, value: string) => {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${name}=${encodeURIComponent(
    value,
  )}; Max-Age=31536000; Path=/; SameSite=Lax`;
};

export const getCurrentTheme = (): "dark" | "light" => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedMode = getCookie(DARK_MODE_COOKIE);
  if (storedMode === "ON") {
    return "dark";
  }

  if (storedMode === "OFF") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const loadTheme = (theme: "dark" | "light") => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.setAttribute("color-scheme", theme);
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  setCookie(DARK_MODE_COOKIE, theme === "dark" ? "ON" : "OFF");
};
