import React, { useState, useEffect } from "react";
import {
  Home,
  User2,
  Terminal,
  Briefcase,
  Compass,
  Menu,
  X,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User2 },
  { label: "Skills", href: "#skills", icon: Terminal },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Compass },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => document.querySelector(l.href));
      for (const section of sections) {
        if (section instanceof HTMLElement) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(`#${section.id}`);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4">
      <nav className="mx-auto max-w-5xl px-6 py-3.5 flex items-center justify-between backdrop-blur-xl bg-[#0b1528]/40 border border-blue-500/15 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-xl font-bold font-display text-blue-200 hover:text-white transition-colors group"
        >
          <span className="tracking-wide bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
            Malki Yasara
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const IconComponent = link.icon;
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative flex items-center gap-2 text-[14px] font-medium transition-colors duration-200 py-2 group ${
                  isActive
                    ? "text-blue-300"
                    : "text-gray-400 hover:text-blue-300"
                }`}
              >
                <IconComponent
                  className={`w-4 h-4 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-500 group-hover:text-blue-400"
                  }`}
                />

                <span className="relative inline-flex justify-center">
                  {link.label}

                  {isActive && (
                    <AnimatePresence mode="wait">
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "48px", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                        className="absolute top-full mt-0.5 left-1/2 -translate-x-1/2 overflow-hidden flex justify-center pointer-events-none"
                      >
                        <span className="flex items-center gap-[2px] whitespace-nowrap">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-1.5 h-1.5 text-blue-400 fill-blue-400 animate-pulse"
                              style={{
                                animationDelay: `${i * 150}ms`,
                              }}
                            />
                          ))}
                        </span>
                      </motion.span>
                    </AnimatePresence>
                  )}
                </span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors p-1 cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-5xl p-4 rounded-xl backdrop-blur-xl bg-[#0b1528]/95 border border-blue-500/15 flex flex-col gap-3 shadow-xl">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-blue-400 hover:bg-blue-500/5 rounded-lg transition-all"
              >
                <IconComponent className="w-4 h-4 text-gray-400" />
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
