// components/Laws.tsx
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Book, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const laws = [
  {
    id: 1,
    number: "UU RI Nomor 30 Tahun 2002",
    title: "Tentang Komisi Pemberantasan Korupsi",
    description: "Dengan Undang-Undang ini dibentuk Komisi Pemberantasan Tindak Pidana Korupsi yang...",
    fullDescription: "Dengan Undang-Undang ini dibentuk Komisi Pemberantasan Tindak Pidana Korupsi yang untuk selanjutnya disebut Komisi Pemberantasan Korupsi. Komisi Pemberantasan Korupsi adalah lembaga negara yang dalam melaksanakan tugas dan wewenangnya bersifat independen dan bebas dari pengaruh kekuasaan manapun."
  },
  {
    id: 2,
    number: "UU No. 31 Tahun 1999 jo UU RI Nomor 20 Tahun 2001",
    title: "Tentang Pemberantasan Tindak pidana korupsi",
    description: "Tindak Pidana Korupsi adalah tindak pidana sebagaimana dimaksud dalam Undang-Undang...",
    fullDescription: "Tindak Pidana Korupsi adalah tindak pidana sebagaimana dimaksud dalam Undang-Undang Nomor 31 Tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi sebagaimana telah diubah dengan Undang-Undang Nomor 20 Tahun 2001 tentang Perubahan atas Undang-Undang Nomor 31 Tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi."
  },
  {
    id: 3,
    number: "TAP MPR NO XI/MPR/1998",
    title: "Tentang Penyelenggara Negara yang Bersih dan Bebas Korupsi, Kolusi, dan Nepotisme",
    description: "Pasal 1 ayat (2), Pasal 2, Pasal 3, Pasal 23, Pasal 28D ayat (1) dan Pasal 33 Undang Undang...",
    fullDescription: "Pasal 1 ayat (2), Pasal 2, Pasal 3, Pasal 23, Pasal 28D ayat (1) dan Pasal 33 Undang Undang Dasar Negara Republik Indonesia Tahun 1945; 2. Ketetapan Majelis Permusyawaratan Rakyat Republik Indonesia Nomor XI/MPR/1998 tentang Penyelenggara Negara yang Bersih dan Bebas Korupsi, Kolusi, dan Nepotisme;"
  },
  {
    id: 4,
    number: "Perbup Banyumas No 59 Tahun 2017",
    title: "Tentang Pedoman Penanganan Benturan Kepentingan di Lingkungan Kabupaten Banyumas",
    description: "Peraturan Bupati Banyumas Nomor 59 Tahun 2017 ini ditetapkan dengan pertimbangan...",
    fullDescription: "Peraturan Bupati Banyumas Nomor 59 Tahun 2017 ditetapkan dengan pertimbangan bahwa benturan kepentingan dapat menyebabkan korupsi, karena kepentingan pribadi mempengaruhi profesionalitas pegawai. Selain itu, pemahaman yang tidak seragam mengenai benturan kepentingan berdampak pada kinerja pegawai. Oleh karena itu, diperlukan pedoman penanganan benturan kepentingan.."
},
  {
    id: 5,
    number: "Perbup Banyumas No 45 Tahun 2021",
    title: "Tentang Pedoman Pengendalian Gratifikasi",
    description: "Peraturan Bupati Banyumas tentang pengendalian gratifikasi bertujuan mendukung...",
    fullDescription: "Peraturan Bupati Banyumas tentang pengendalian gratifikasi bertujuan mendukung pemerintahan bersih. Mengatur pelaporan, pengawasan, perlindungan pelapor, dan sanksi bagi pejabat yang terlibat gratifikasi. Peraturan ini menggantikan Peraturan KPK No. 2 Tahun 2019."
  },
  {
    id: 6,
    number: "Perbup Banyumas No 99 Tahun 2020",
    title: "Tentang Sistem Penanganan Pengaduan (Whistleblowing System) Tindak Pidana Korupsi",
    description: "Peraturan Bupati (Perbup) Kabupaten Banyumas Nomor 57 Tahun 2017 tentang...",
    fullDescription: "Peraturan Bupati (Perbup) Kabupaten Banyumas Nomor 57 Tahun 2017 tentang Pedoman Umum Sistem Penanganan Pengaduan (Whistleblower System) Tindak Pidana Korupsi Di Lingkungan Pemerintah Kabupaten Banyumas"
  },
];

const LawModal = ({ law, isOpen, onClose }: {
  law: typeof laws[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !law) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto touch-none"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-2xl shadow-xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-lg shrink-0">
            <Book className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {law.number}
            </h3>
            <p className="text-blue-600 font-medium text-base sm:text-lg mb-4">
              {law.title}
            </p>
            <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
  {law.fullDescription}
</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 active:scale-95 transition-transform"
          >
            Tutup
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  export default function Laws() {
    const [selectedLaw, setSelectedLaw] = useState<typeof laws[0] | null>(null);

  // Update card click handler
  const handleLawClick = (law: typeof laws[0]) => {
    setSelectedLaw(law);
  };

    return (
      <>
      <section id="laws" className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          {/* Header remains same */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Undang-Undang <span className="text-blue-600">Anti Korupsi</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Landasan hukum dalam pemberantasan korupsi di Indonesia
            </p>
          </motion.div>
  
          {/* Desktop Layout */}
          <div className="hidden lg:flex gap-12">
            {/* Garuda Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-1/3 sticky top-20 h-[calc(100vh-10rem)]"
            >
              <div className="relative h-full w-full">
                <Image
                  src="/garuda-indonesia.png"
                  alt="Garuda Pancasila"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-50/30 to-transparent" />
              </div>
            </motion.div>
  
            {/* Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-2/3 grid grid-cols-2 gap-6 auto-rows-min"
            >
              {laws.map((law, index) => (
                <motion.div
                  key={law.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`group ${index % 2 === 0 ? 'mt-0' : 'mt-12'}`}
                >
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                        <Book className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">
                          {law.number}
                        </h3>
                        <p className="text-blue-600 font-medium mb-3">
                          {law.title}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {law.description}
                        </p>
                        <motion.button
          whileHover={{ x: 5 }}
          onClick={() => handleLawClick(law)}
          className="mt-4 text-blue-600 text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Baca Selengkapnya <ArrowRight size={16} />
        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
  
          {/* Mobile Layout */}
          <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="lg:hidden space-y-6"
>
  {laws.map((law) => (
    <motion.div
      key={law.id}
      variants={itemVariants}
      className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl"
    >
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Book className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-xl mb-2">
            {law.number}
          </h3>
          <p className="text-blue-600 font-medium mb-3">{law.title}</p>
          <p className="text-gray-600">{law.description}</p>
        </div>
      </div>
      <button 
        onClick={() => handleLawClick(law)} // Add this handler
        className="mt-4 text-blue-600 flex items-center gap-2 active:scale-95 transition-transform"
      >
        Baca Selengkapnya <ArrowRight size={16} />
      </button>
    </motion.div>
  ))}
</motion.div>
        </div>
      </section>

      {/* Add modal */}
      <AnimatePresence>
        <LawModal
          law={selectedLaw}
          isOpen={!!selectedLaw}
          onClose={() => setSelectedLaw(null)}
        />
      </AnimatePresence>
      </>
    );
  }