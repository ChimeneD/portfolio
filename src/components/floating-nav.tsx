"use client";

import React from "react";
import { GoHome } from "react-icons/go";
import { VscFolderLibrary } from "react-icons/vsc";
import { RiMessage2Line, RiUserLine } from "react-icons/ri";
import { IoBrushOutline } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";
import { useAppStore } from "@/stores/app-store";
import { nav_classes } from "../utils/styles/javascript/floating-nav";
import { HiOutlineDocumentText } from "react-icons/hi";
import Link from "next/link";
import { Tooltip } from "@/components/tooltip";

const navItems = [
  { href: "#", label: "Home", icon: GoHome },
  { href: "#about", label: "About", icon: RiUserLine },
  { href: "#skills", label: "Skills", icon: IoBrushOutline },
  { href: "#services", label: "Services", icon: LuSparkles },
  { href: "#portfolio", label: "Portfolio", icon: VscFolderLibrary },
  { href: "#contact", label: "Contact", icon: RiMessage2Line },
];

const FloatingNav = () => {
  const activeLink = useAppStore((state) => state.activeLink);
  const setActiveLink = useAppStore((state) => state.setActiveLink);
  const nav_class = nav_classes();
  const getNavItemClass = (href: string) =>
    `${nav_class.nav_item} ${activeLink === href ? nav_class.active : ""}`;

  return (
    <nav className={nav_class.nav_container} aria-label="Primary navigation">
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
