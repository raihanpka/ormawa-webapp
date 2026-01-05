import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import imgLogo from "../assets/logo/logo-lemma-white.png";

type NavbarProps = {
  className?: string;
  textColor?: "blue" | "white";
  language?: "id" | "en";
  onLanguageChange?: (lang: "id" | "en") => void;
};

const navItems = {
  id: ["Lanskap", "Capaian", "Kolaborasi", "Refleksi", "Program Unggulan"],
  en: ["Landscape", "Achievements", "Collaboration", "Reflection", "Flagship Programs"],
};

export default function Navbar({
  className,
  language = "id",
  onLanguageChange,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = navItems[language];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-in-out",
        "px-4 py-6",
        className
      )}
    >
      <div
        className={cn(
          "w-full max-w-[1113px] rounded-full border transition-all duration-300 ease-in-out",
          "h-[70px] flex items-center justify-between px-6 md:px-9",
          isScrolled
            ? "bg-[rgba(0,31,77,0.85)] backdrop-blur-md border-[rgba(183,236,246,0.1)] shadow-lg"
            : "bg-[rgba(0,31,77,0.2)] border-transparent backdrop-blur-sm"
        )}
      >
        {/* Logo and Title */}
        <div className="flex gap-3 md:gap-[18px] items-center">
          <div className="h-[24px] md:h-[30.652px] w-auto relative flex-shrink-0">
            <img 
              alt="Logo Lemma" 
              className="block max-w-none size-full object-contain" 
              src={imgLogo} 
            />
          </div>
          <p 
            className="text-[#e2f2fc] text-base md:text-[21.272px] leading-[1.27] tracking-[0.4254px] whitespace-nowrap"
            style={{ fontFamily: 'Barmeno, sans-serif', fontWeight: 500 }}
          >
            LPJ ORMAWA IPB 2025
          </p>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex gap-[23px] items-center text-[#eaeaea] text-[16px] xl:text-[20px] leading-[1.27] tracking-[-0.8px]"
          style={{ fontFamily: 'Fraunces, sans-serif', fontWeight: 700 }}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={`#chapter-${index + 1}`}
              className="hover:text-[#e2f2fc] transition-colors duration-200 whitespace-nowrap cursor-pointer"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Language Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div
            className="hidden md:flex gap-[8px] items-center text-[#eaeaea] text-[18px] md:text-[21.272px] leading-[1.27] tracking-[-0.8509px]"
          >
            <button
              onClick={() => onLanguageChange?.("id")}
              className={cn(
                "transition-all duration-200",
                language === "id" 
                  ? "font-bold text-[#e2f2fc]" 
                  : "font-normal opacity-70 hover:opacity-100 hover:text-[#e2f2fc]"
              )}
              style={{ 
                fontFamily: 'Fraunces, sans-serif',
                fontVariationSettings: "'SOFT' 0, 'WONK' 1" 
              }}
            >
              ID
            </button>
            <span 
              className="font-bold"
              style={{ 
                fontFamily: 'Fraunces, sans-serif',
                fontVariationSettings: "'SOFT' 0, 'WONK' 1" 
              }}
            >
              |
            </span>
            <button
              onClick={() => onLanguageChange?.("en")}
              className={cn(
                "transition-all duration-200",
                language === "en" 
                  ? "font-bold text-[#e2f2fc]" 
                  : "font-normal opacity-70 hover:opacity-100 hover:text-[#e2f2fc]"
              )}
              style={{ 
                fontFamily: 'Fraunces, sans-serif',
                fontVariationSettings: "'SOFT' 0, 'WONK' 1" 
              }}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#e2f2fc]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100px] left-4 right-4 bg-[rgba(0,31,77,0.95)] backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 lg:hidden border border-[rgba(183,236,246,0.1)] shadow-xl animate-in fade-in slide-in-from-top-5">
          {items.map((item, index) => (
            <a
              key={index}
              href={`#chapter-${index + 1}`}
              className="text-[#eaeaea] text-lg font-bold hover:text-[#e2f2fc] py-2 border-b border-white/10 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontFamily: 'Fraunces, sans-serif' }}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-4 pt-2 justify-center md:hidden">
             <button
              onClick={() => { onLanguageChange?.("id"); setIsMobileMenuOpen(false); }}
              className={cn(
                "text-lg",
                language === "id" ? "font-bold text-[#e2f2fc]" : "text-[#eaeaea]/70"
              )}
            >
              ID
            </button>
            <span className="text-[#eaeaea]">|</span>
            <button
              onClick={() => { onLanguageChange?.("en"); setIsMobileMenuOpen(false); }}
              className={cn(
                "text-lg",
                language === "en" ? "font-bold text-[#e2f2fc]" : "text-[#eaeaea]/70"
              )}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
