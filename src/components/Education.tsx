// components/Education.tsx
"use client";
import { motion } from "framer-motion";
import {
  Play,
  Share2,
  BookOpen,
  Shield,
  Users,
  ArrowRight,
  Facebook, 
  Instagram,
  Check,
   Copy
} from "lucide-react";
import Image from "next/image";
import { RiWhatsappFill } from 'react-icons/ri';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const educationCards: { title: string; description: string; icon: any; color: CardColor }[] = [
  {
    title: "Pengertian Korupsi",
    description:
      "Memahami definisi dan bentuk-bentuk korupsi dalam kehidupan sehari-hari",
    icon: BookOpen,
    color: "blue",
  },
  {
    title: "Dampak Korupsi",
    description:
      "Menganalisis dampak korupsi terhadap masyarakat dan pembangunan",
    icon: Users,
    color: "red",
  },
  {
    title: "Pencegahan",
    description: "Strategi dan langkah-langkah dalam mencegah tindakan korupsi",
    icon: Shield,
    color: "green",
  },
];

type CardColor = "blue" | "red" | "green";

const cardStyles: Record<CardColor, { background: string; text: string }> = {
  blue: {
    background: "bg-blue-100",
    text: "text-blue-600",
  },
  red: {
    background: "bg-red-100",
    text: "text-red-600",
  },
  green: {
    background: "bg-green-100",
    text: "text-green-600",
  },
};

type SharePlatform = {
    name: string;
    icon: any;
    color: string;
    shareUrl: (url: string, text: string) => string;
  };
  
  const sharePlatforms: SharePlatform[] = [
    {
      name: 'WhatsApp',
      icon: RiWhatsappFill,
      color: 'text-green-500',
      shareUrl: (url, text) => 
        `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'text-blue-600',
      shareUrl: (url, text) => 
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'text-pink-600',
      shareUrl: (url, text) => 
        `https://www.instagram.com/share?url=${encodeURIComponent(url)}`,
    },
  ];
  
  // Add this component for the modal
  const ShareModal = ({ isOpen, onClose, platform, url }: {
    isOpen: boolean;
    onClose: () => void;
    platform: SharePlatform | null;
    url: string;
  }) => {
    if (!isOpen || !platform) return null;
  
    const handleShare = async () => {
      try {
        const text = "Mari pelajari tentang Anti Korupsi di SiMas Banyumas!";
        await navigator.clipboard.writeText(`${text}\n\n${url}`);
        
        toast.custom((t) => (
          <div className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Link Berhasil Disalin!
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Silahkan bagikan melalui {platform.name} untuk mengajak lebih banyak orang dalam memerangi korupsi
                  </p>
                </div>
              </div>
            </div>
          </div>
        ), {
          duration: 3000,
          position: 'top-center',
        });
        
        onClose();
      } catch (err) {
        toast.error('Gagal menyalin link. Silakan coba lagi.');
      }
    };
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="text-center space-y-4">
            <platform.icon className={`w-12 h-12 ${platform.color} mx-auto`} />
            <h3 className="text-xl font-semibold text-gray-900">
              Bagikan ke {platform.name}
            </h3>
            <p className="text-gray-600">
              Salin link untuk dibagikan ke {platform.name} dan bantu kami menyebarkan informasi anti korupsi
            </p>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleShare}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Copy size={18} />
                Salin Link
              </button>
              <button
                onClick={onClose}
                className="text-gray-700 flex-1 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

export default function Education() {
  const [selectedPlatform, setSelectedPlatform] = useState<SharePlatform | null>(null);
  const websiteUrl = "https://simas-banyumas.com"; 

  return (
    <>
    <section
      id="education"
      className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-blue-100 py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Edukasi <span className="text-blue-600">Anti Korupsi</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Mari bersama-sama memahami dan mencegah korupsi untuk Indonesia yang
            lebih baik
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {educationCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  cardStyles[card.color].background
                }`}
              >
                <card.icon
                  className={`w-6 h-6 ${cardStyles[card.color].text}`}
                />
              </div>
              <h3 className="text-xl text-gray-600 font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className="text-blue-600 flex items-center gap-2 hover:gap-3 transition-all">
                Pelajari <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-2xl p-8 mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-600 font-semibold">
                Video Edukasi
              </h3>
              <p className="text-gray-600">
                Pelajari lebih dalam tentang anti korupsi melalui video
                interaktif kami
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors">
                <Play size={20} />
                Tonton Video
              </button>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/video-thumbnail.jpg"
                alt="Video Thumbnail"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer"
                >
                  <Play className="w-6 h-6 text-blue-600" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Share Section */}
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="text-gray-600 mb-4">
        Bagikan informasi ini kepada yang lain
      </p>
      <div className="flex justify-center gap-4">
        {sharePlatforms.map((platform) => (
          <motion.button
            key={platform.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedPlatform(platform)}
            className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg"
          >
            <platform.icon className={`w-5 h-5 ${platform.color}`} />
          </motion.button>
        ))}
      </div>

      <ShareModal
        isOpen={!!selectedPlatform}
        onClose={() => setSelectedPlatform(null)}
        platform={selectedPlatform}
        url={websiteUrl}
      />
    </motion.div>
      </div>
    </section>
    <Toaster />
    </>
  );
}
