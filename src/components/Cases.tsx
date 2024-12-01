// components/Cases.tsx
"use client";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  DollarSign,
  Building2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const cases = [
  // Pengadaan Cases
  {
    id: 1,
    title: "Kasus Pengadaan Alat Kesehatan RSUD",
    year: 2023,
    amount: "2.5 Miliar",
    institution: "Dinas Kesehatan",
    description:
      "Pengadaan alat kesehatan dengan markup harga yang tidak wajar dan spesifikasi yang tidak sesuai standar.",
    status: "Sedang Diproses",
    category: "pengadaan",
  },
  {
    id: 2,
    title: "Pengadaan Peralatan Kantor Fiktif",
    year: 2022,
    amount: "800 Juta",
    institution: "Sekretariat Daerah",
    description:
      "Pengadaan peralatan kantor yang tidak sesuai dengan dokumen dan spesifikasi yang telah ditentukan.",
    status: "Selesai",
    category: "pengadaan",
  },
  {
    id: 3,
    title: "Markup Pengadaan Komputer Sekolah",
    year: 2023,
    amount: "1.2 Miliar",
    institution: "Dinas Pendidikan",
    description:
      "Kasus markup harga dalam pengadaan komputer untuk sekolah-sekolah di Banyumas.",
    status: "Sedang Diproses",
    category: "pengadaan",
  },

  // Infrastruktur Cases
  {
    id: 4,
    title: "Proyek Jembatan Mangkrak",
    year: 2022,
    amount: "4.7 Miliar",
    institution: "Dinas PUPR",
    description:
      "Pembangunan jembatan yang terbengkalai dengan kualitas tidak sesuai standar dan spesifikasi.",
    status: "Selesai",
    category: "infrastruktur",
  },
  {
    id: 5,
    title: "Markup Proyek Irigasi",
    year: 2023,
    amount: "3.1 Miliar",
    institution: "Dinas PUPR",
    description:
      "Penggelembungan anggaran dalam proyek perbaikan saluran irigasi di kawasan pertanian.",
    status: "Sedang Diproses",
    category: "infrastruktur",
  },
  {
    id: 6,
    title: "Proyek Drainase Fiktif",
    year: 2021,
    amount: "2.8 Miliar",
    institution: "Dinas PUPR",
    description:
      "Pembangunan sistem drainase yang tidak sesuai dengan rencana dan spesifikasi teknis.",
    status: "Selesai",
    category: "infrastruktur",
  },

  // Perizinan Cases
  {
    id: 7,
    title: "Suap Izin Usaha Pertambangan",
    year: 2023,
    amount: "500 Juta",
    institution: "Dinas ESDM",
    description:
      "Kasus suap dalam penerbitan izin usaha pertambangan di kawasan terlarang.",
    status: "Sedang Diproses",
    category: "perizinan",
  },
  {
    id: 8,
    title: "Pungli Izin Mendirikan Bangunan",
    year: 2022,
    amount: "300 Juta",
    institution: "Dinas PMPTSP",
    description:
      "Pungutan liar dalam pengurusan IMB untuk proyek perumahan dan komersial.",
    status: "Selesai",
    category: "perizinan",
  },
  {
    id: 9,
    title: "Manipulasi Izin Lingkungan",
    year: 2023,
    amount: "750 Juta",
    institution: "Dinas Lingkungan Hidup",
    description:
      "Pemalsuan dokumen dan suap dalam penerbitan izin lingkungan untuk pabrik.",
    status: "Sedang Diproses",
    category: "perizinan",
  },
];
const categories = [
  { id: "all", label: "Semua Kasus" },
  { id: "pengadaan", label: "Pengadaan" },
  { id: "infrastruktur", label: "Infrastruktur" },
  { id: "perizinan", label: "Perizinan" },
];

export default function Cases() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const casesPerPage = 3;

  const filteredCases = cases.filter((caseItem) => {
    const matchesCategory =
      activeCategory === "all" || caseItem.category === activeCategory;
    const matchesSearch = caseItem.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Update your category click handler
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Update your search handler
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = filteredCases.slice(indexOfFirstCase, indexOfLastCase);
  const totalPages = Math.ceil(filteredCases.length / casesPerPage);

  return (
    <section
      id="cases"
      className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-blue-100 py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kasus Korupsi <span className="text-blue-600">Banyumas</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Transparansi kasus korupsi untuk pembelajaran dan pencegahan di masa
            depan
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari kasus korupsi..."
              className="w-full text-gray-700 pl-12 pr-4 py-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white/80 text-gray-600 hover:bg-blue-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {currentCases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20 },
              }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar size={16} />
                  <span>{caseItem.year}</span>
                  <span className="mx-2">•</span>
                  <Building2 size={16} />
                  <span>{caseItem.institution}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {caseItem.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="text-red-500" size={20} />
                  <span className="font-semibold text-red-500">
                    Rp {caseItem.amount}
                  </span>
                </div>

                <p className="text-gray-600 flex-grow mb-4">
                  {caseItem.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      caseItem.status === "Sedang Diproses"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {caseItem.status}
                  </span>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-600 flex items-center gap-2"
                  >
                    Detail Kasus <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-600 hover:bg-blue-50"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 rounded-lg transition-colors ${
                  currentPage === pageNum
                    ? "bg-blue-600 text-white"
                    : "bg-white/80 text-gray-600 hover:bg-blue-50"
                }`}
              >
                {pageNum}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-600 hover:bg-blue-50"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
