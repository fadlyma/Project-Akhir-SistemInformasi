"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Beranda", id: "beranda" },
  { label: "Tentang Kami", id: "tentang" },
  { label: "Galeri", id: "galeri" },
  { label: "Kontak", id: "kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Beranda");

  const handleScroll = (label: string, id: string) => {
    setActive(label);
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#eadbc8]/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 h-20">

        {/* LOGO (TIDAK DIUBAH UKURAN) */}
        <div className="cursor-pointer">
          <Image
            src="/images/WARUNG.PNG"
            alt="Logo Warung"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.label, item.id)}
              className={`text-[15px] tracking-wide transition-all duration-200 ${
                active === item.label
                  ? "font-semibold text-black"
                  : "font-normal text-[#444] hover:text-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/95 shadow-md backdrop-blur-md px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.label, item.id)}
              className={`block w-full text-left py-2 text-[15px] tracking-wide transition-all duration-200 ${
                active === item.label
                  ? "font-semibold text-black"
                  : "font-medium text-[#444] hover:text-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
