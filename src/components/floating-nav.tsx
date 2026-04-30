import React from "react";
import { GoHome } from "react-icons/go";
import { VscFolderLibrary } from "react-icons/vsc";
import { RiMessage2Line, RiUserLine } from "react-icons/ri";
import { IoBrushOutline } from "react-icons/io5";
import { useAppStore } from "@/stores/app-store";
import { nav_classes } from "../utils/styles/javascript/floating-nav";
import { HiOutlineDocumentText } from "react-icons/hi";
import Link from "next/link";

const FloatingNav = () => {
  const activeLink = useAppStore((state) => state.activeLink);
  const setActiveLink = useAppStore((state) => state.setActiveLink);
  const nav_class = nav_classes();
  return (
    <nav className={nav_class.nav_container}>
      <a
        href={`/#`}
        className={`${activeLink === "#" ? nav_class.active : ""}`}
        onClick={() => setActiveLink("#")}
      >
        <GoHome />
      </a>
      <a
        href={`/#about`}
        className={`${activeLink === "#about" ? nav_class.active : ""}`}
        onClick={() => setActiveLink("#about")}
      >
        <RiUserLine />
      </a>
      <a
        href={`/#skills`}
        className={`${activeLink === "#skills" ? nav_class.active : ""}`}
        onClick={() => setActiveLink("#skills")}
      >
        <IoBrushOutline />
      </a>
      <a
        href={"/#portfolio"}
        className={`${activeLink === "#portfolio" ? nav_class.active : ""}`}
        onClick={() => setActiveLink("#portfolio")}
      >
        <VscFolderLibrary />
      </a>
      <a
        href={"/#contact"}
        className={`${activeLink === "#contact" ? nav_class.active : ""}`}
        onClick={() => setActiveLink("#contact")}
      >
        <RiMessage2Line />
      </a>
      <Link
        href="/policies"
        className={`${activeLink === "/policies" ? nav_class.active : ""}`}
        onClick={() => setActiveLink("/policies")}
      >
        <HiOutlineDocumentText />
      </Link>
    </nav>
  );
};

export default FloatingNav;
