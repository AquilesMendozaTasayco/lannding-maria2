"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      const sections = document.querySelectorAll("section[id]");
      let current = "inicio";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = section.id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "proyecto", label: "Proyecto" },
    { id: "caracteristicas", label: "Características" },
    { id: "galeria", label: "Galería" },
    { id: "departamentos", label: "Departamentos" },
    { id: "avances", label: "Avances" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#004A99]/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/logo-maria-aux.webp"
            alt="Logo María Auxiliadora II"
            width={150}
            height={45}
            priority
            className="select-none"
          />
        </a>

        <nav className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative group transition-all duration-200 ${
                activeSection === link.id
                  ? "text-[#00A651]"
                  : scrolled
                  ? "text-white hover:text-[#00A651]"
                  : "text-white hover:text-[#00A651]"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#00A651] transition-all duration-300 ${
                  activeSection === link.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <HiX size={26} /> : <HiOutlineMenu size={26} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 text-[#004A99] shadow-lg transition-all duration-300 origin-top ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-6 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-[#00A651]"
                  : "hover:text-[#00A651]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
