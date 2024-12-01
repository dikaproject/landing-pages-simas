// components/HeroSection.tsx
'use client';
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-blue-100 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
          >
            <div className="flex items-center space-x-4">
              <Image 
                src="/banyumas.png"
                alt="Banyumas Logo"
                width={80}
                height={80}
                className="mb-4"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                className="h-[2px] bg-blue-600"
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-blue-600 font-medium tracking-wider">PLATFORM ANTI KORUPSI</h2>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Selamat Datang di{" "}
                <span className="text-blue-600">SiMas</span>
                <span className="block text-3xl md:text-4xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400">
                  Sinergi Banyumas
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              Bersama membangun generasi muda Banyumas yang berintegritas dan bebas dari korupsi untuk masa depan yang lebih baik.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg shadow-lg shadow-blue-500/30"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors text-lg"
              >
                Lihat Video
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full"
          >
            <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full blur-3xl" />
            <Image
              src="/anti-korupsi-banyumas.jpg"
              alt="Anti Corruption Hero Image"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}