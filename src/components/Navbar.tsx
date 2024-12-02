"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Beranda", href: "#home" },
  { title: "Edukasi", href: "#education" },
  { title: "Undang-Undang", href: "#laws" },
  { title: "Kasus", href: "#cases" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleDesktopScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      };
      
      const handleMobileScroll = (href: string) => {
        setIsOpen(false);
        setTimeout(() => {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
      };

  return (
    <nav
    className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-4"
          >
            <Image
              src="/banyumas.png"
              alt="SiMas Logo"
              width={40}
              height={40}
              priority
            />
            <span className="font-bold text-xl text-blue-600">SiMas</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={(e) => handleDesktopScroll(e, link.href)}
      className="relative text-gray-600 hover:text-blue-600 transition-colors group cursor-pointer"
    >
      {link.title}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
    </a>
  ))}
            <button className="bg-blue-600/90 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors backdrop-blur-sm">
              Laporkan
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 backdrop-blur-md border-t"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
            {navLinks.map((link) => (
  <a
    key={link.href}
    href={link.href}
    onClick={() => handleMobileScroll(link.href)}
    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 cursor-pointer"
  >
    {link.title}
  </a>
))}
              <button
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Laporkan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
