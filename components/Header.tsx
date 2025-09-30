import React from 'react';
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
// Logo imports - white logo for dark backgrounds, black logo for light backgrounds
import AygitLogoBlack from "../assets/logos/aygit-site.png";
import AygitLogoWhite from "../assets/logos/aygit-beyaz.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Ana Sayfa", href: "#hero" },
    { name: "Hizmetler", href: "#hizmetler" },
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Kullanıcılar", href: "#kullanicilar" },
    { name: "Kurumsal", href: "#kurumsal" },
    { name: "S.S.S", href: "#sss" }
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ scale: 0, x: -20 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-lg"
            >
              {/* Logo Image */}
              <img 
                src={isScrolled ? AygitLogoBlack : AygitLogoWhite} 
                alt="Aygıt Technologies" 
                className="h-10 w-auto transition-all duration-300 relative z-10"
              />
              
              {/* Light Sweep Effect - Simple Overlay */}
              <motion.div
                className={`absolute top-0 left-0 h-full w-8 bg-gradient-to-r ${
                  isScrolled 
                    ? 'from-transparent via-blue-400/60 to-transparent' 
                    : 'from-transparent via-white/60 to-transparent'
                } skew-x-12`}
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "calc(100% + 2rem)",
                  transition: { 
                    duration: 0.6, 
                    ease: "easeInOut" 
                  }
                }}
              />
              
              {/* Subtle Glow Background on Hover */}
              <motion.div
                className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md opacity-0 -z-10"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className={`font-medium transition-colors duration-300 relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></span>
              </motion.button>
            ))}
          </nav>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="hidden md:block"
          >
            <Button className={`px-6 py-2 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}>
              Ücretsiz Deneyin
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-6 bg-white/95 backdrop-blur-lg rounded-xl border border-gray-200 shadow-lg px-6"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="block py-3 text-gray-800 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg">
              Ücretsiz Deneyin
            </Button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}