// components/Laws.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Book, ArrowRight } from 'lucide-react';

const laws = [
  {
    id: 1,
    number: "UU No. 31 Tahun 1999",
    title: "Pemberantasan Tindak Pidana Korupsi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    number: "UU No. 20 Tahun 2001",
    title: "Perubahan UU Tipikor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 3,
    number: "UU No. 30 Tahun 2002",
    title: "Komisi Pemberantasan Korupsi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 4,
    number: "UU No. 46 Tahun 2009",
    title: "Pengadilan Tindak Pidana Korupsi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 5,
    number: "UU No. 8 Tahun 2010",
    title: "Pencegahan dan Pemberantasan TPPU",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 6,
    number: "UU No. 19 Tahun 2019",
    title: "Perubahan Kedua UU KPK",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
];

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
    return (
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
            {laws.map((law, index) => (
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
                <button className="mt-4 text-blue-600 flex items-center gap-2">
                  Baca Selengkapnya <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }