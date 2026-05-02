import type { Metadata } from "next";
import "@/styles/global.css";
import { Archivo, Raleway } from "next/font/google";
import { cn } from "@/types/lib/utils";
import { AppProviders } from "./providers";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-sans" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Daniel C. Amadi | Portfolio",
  description: "Fullstack developer portfolio for Daniel C. Amadi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      color-scheme="light"
      data-scroll-behavior="smooth"
      className={cn("font-sans", archivo.variable, raleway.variable)}
      suppressHydrationWarning
    >
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
