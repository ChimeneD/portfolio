import type { Metadata } from "next";
import "@/styles/global.css";
import { Figtree } from "next/font/google";
import { cn } from "@/types/lib/utils";
import { AppProviders } from "./providers";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

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
      className={cn("font-sans", figtree.variable)}
      suppressHydrationWarning
    >
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
