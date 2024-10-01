"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const linkStyle = (link: string) =>
    `px-3 py-2 transition-colors duration-200 ${
      activeLink === link
        ? "border-l-4 border-[#D9E0A4] bg-[#F2F5D5] text-[#19485F]"
        : "hover:text-[#D9E0A4] hover:bg-[#19485F]/20"
    }`;

  return (
    <header className="bg-[#19485F] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mosnyik Blog</h1>
        <nav className="hidden md:flex">
          <a
            href="#"
            className={linkStyle("home")}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a
            href="#"
            className={linkStyle("about")}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
          <a
            href="#"
            className={linkStyle("contact")}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col">
            <a
              href="#"
              className={linkStyle("home")}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
            <a
              href="#"
              className={linkStyle("about")}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
            <a
              href="#"
              className={linkStyle("contact")}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
