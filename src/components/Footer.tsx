// components/Footer.tsx
"use client";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const handleFooterScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      
      // Add slight delay to ensure smooth scrolling
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80; // Match navbar height
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    };

  return (
    <footer className="bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Banyumas.png"
                alt="SiMas Logo"
                width={50}
                height={50}
                className="bg-white rounded-lg p-1"
              />
              <span className="font-bold text-2xl">SiMas</span>
            </div>
            <p className="text-blue-100 text-sm">
              Platform untuk memerangi korupsi dan meningkatkan integritas dengan
              melibatkan generasi muda Banyumas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
        <h3 className="font-semibold text-lg mb-4">Tautan Cepat</h3>
        <ul className="space-y-2">
          {[
            { title: "Beranda", href: "home" },
            { title: "Edukasi", href: "education" },
            { title: "Undang-Undang", href: "laws" },
            { title: "Kasus", href: "cases" }
          ].map((item) => (
            <li key={item.href}>
              <a
                href={`#${item.href}`}
                onClick={(e) => handleFooterScroll(e, `#${item.href}`)}
                className="text-blue-100 hover:text-white transition-colors cursor-pointer"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-blue-100">
                <MapPin size={18} />
                <span>Purwokerto, Banyumas</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <Phone size={18} />
                <span>+62 123 4567 8900</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <Mail size={18} />
                <span>info@simas-banyumas.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Media Sosial</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm text-center md:text-left">
              © 2024 SiMas Banyumas. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-blue-100">
  <Link href="/privacy-policy" className="hover:text-white transition-colors">
    Kebijakan Privasi
  </Link>
  <Link href="/terms" className="hover:text-white transition-colors">
    Syarat & Ketentuan
  </Link>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
}