"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { VscFolderLibrary } from "react-icons/vsc";
import { RiMessage2Line, RiUserLine } from "react-icons/ri";
import { LuSparkles } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useAppStore } from "@/stores/app-store";
import { Tooltip } from "@/components/tooltip";

const navItems = [
  { href: "#", label: "Home", icon: GoHome },
  { href: "#about", label: "About", icon: RiUserLine },
  { href: "#services", label: "Services", icon: LuSparkles },
  { href: "#portfolio", label: "Work", icon: VscFolderLibrary },
  { href: "#contact", label: "Contact", icon: RiMessage2Line },
];

const baseItemClass =
  "inline-flex size-10 items-center justify-center rounded-full border text-base transition-all duration-300";

const FloatingNav = () => {
  const pathname = usePathname();
  const activeLink = useAppStore((state) => state.activeLink);
  const setActiveLink = useAppStore((state) => state.setActiveLink);

  const getNavItemClass = (href: string) => {
    const isActive = activeLink === href || (pathname === "/policies" && href === "/policies");

    return `${baseItemClass} ${
      isActive
        ? "border-primary bg-primary text-primary-foreground shadow-(--shadow-primary)"
        : "border-border bg-card/75 text-text hover:border-primary hover:text-primary"
    }`;
  };

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-card/80 p-2 backdrop-blur-xl md:bottom-auto md:left-auto md:right-5 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:flex-col"
      aria-label="Primary navigation"
    >
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <Tooltip title={item.label} key={item.href}>
            <a
              href={`/${item.href}`}
              className={getNavItemClass(item.href)}
              onClick={() => setActiveLink(item.href)}
              aria-label={item.label}
            >
              <Icon />
            </a>
          </Tooltip>
        );
      })}
      <Tooltip title="Policies">
        <Link
          href="/policies"
          className={getNavItemClass("/policies")}
          onClick={() => setActiveLink("/policies")}
          aria-label="Policies"
        >
          <HiOutlineDocumentText />
        </Link>
      </Tooltip>
    </nav>
  );
};

export default FloatingNav;
