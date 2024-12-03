// components/Cases.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  DollarSign,
  Building2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  X,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";

const truncateText = (text: string, wordCount: number = 12) => {
  const words = text.split(" ");
  if (words.length <= wordCount) return text;
  return words.slice(0, wordCount).join(" ") + "...";
};

const CaseModal = ({
  caseItem,
  isOpen,
  onClose,
}: {
  caseItem: (typeof cases)[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !caseItem) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between mb-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2 text-gray-600"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Kembali</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 text-gray-700 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Status Badge */}
        <div className="mb-6">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              caseItem.status === "Sedang Diproses"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {caseItem.status}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {caseItem.title}
        </h2>

        {/* Meta Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={18} />
            <span>{caseItem.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 size={18} />
            <span>{caseItem.institution}</span>
          </div>
        </div>

        {/* Amount */}
        <div className="flex items-center gap-2 mb-6 bg-red-50 p-3 rounded-lg">
          <DollarSign className="text-red-500" size={24} />
          <span className="font-semibold text-red-600">{caseItem.amount}</span>
        </div>

        {/* Full Description */}
        <div className="prose prose-blue max-w-none mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Deskripsi Kasus
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {caseItem.fullDescription}
          </p>
        </div>

        {/* Reference Link */}
        <div className="border-t border-gray-100 pt-4">
          <a
            href={caseItem.reference}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Baca Selengkapnya di Sumber Berita</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const cases = [
  {
    id: 1,
    title: "Sempat Divonis Bebas, Eks Camat di Banyumas Kembali Masuk Penjara",
    date: "22 Juli 2024",
    amount: "dana eks PNPM",
    institution: "Kecamatan Kedungbanteng",
    description: truncateText(
      "Tiga terdakwa kasus korupsi dana eks PNPM kecamatan Kedungbanteng, Kabupaten Banyumas, Jawa Tengah termasuk mantan Camat Kedungbanteng, Purjito (55). Sedangkan dua lainnya yaitu, Komisaris Utama PT LKM Kedungmas Arif Indra Setyadi (54) dan Direktur Utama PT LKM Kedungmas Ida Rokhani (53)."
    ),
    fullDescription:
      "Tiga terdakwa kasus korupsi dana eks PNPM kecamatan Kedungbanteng, Kabupaten Banyumas, Jawa Tengah termasuk mantan Camat Kedungbanteng, Purjito (55). Sedangkan dua lainnya yaitu, Komisaris Utama PT LKM Kedungmas Arif Indra Setyadi (54) dan Direktur Utama PT LKM Kedungmas Ida Rokhani (53).",
    reference:
      "https://regional.kompas.com/read/2024/07/22/112523778/sempat-divonis-bebas-eks-camat-di-banyumas-kembali-masuk-penjara",
    status: "Selesai",
    category: "pengadaan",
  },
  {
    id: 2,
    title:
      "Diduga Tilap Uang Pajak, 4 Perangkat Desa Kedungwuluh Lor Diminta Mundur",
    date: "1 September 2024",
    amount: "korupsi uang pajak lebih kurang Rp 400 juta",
    institution: "Kelurahan desa kedungwuluh",
    description: truncateText(
      "Kasus ini melibatkan empat perangkat desa Kedungwuluh Lor yang diduga menilep uang pajak. Mereka diminta untuk mundur dari jabatan mereka karena keterlibatannya dalam penggelapan dana pajak yang seharusnya digunakan untuk kepentingan desa. Proses investigasi masih berlangsung, dan warga desa mendesak adanya tindakan tegas."
    ),
    fullDescription:
      "Kasus ini melibatkan empat perangkat desa Kedungwuluh Lor yang diduga menilep uang pajak. Mereka diminta untuk mundur dari jabatan mereka karena keterlibatannya dalam penggelapan dana pajak yang seharusnya digunakan untuk kepentingan desa. Proses investigasi masih berlangsung, dan warga desa mendesak adanya tindakan tegas.",
    reference:
      "https://www.rri.co.id/anti-korupsi/945945/diduga-tilap-uang-pajak-4-perangkat-desa-kedungwuluh-lor-diminta-mundur",
    status: "Sedang Diproses",
    category: "pajak",
  },
  {
    id: 3,
    title: "Penyimpangan Dana Aspirasi DPRD Banyumas Diusut Kejari",
    date: "19 Agustus 2021",
    amount: "Penyalahgunaan dana aspirasi oleh anggota DPRD Banyumas",
    institution: "DPRD Banyumas",
    description: truncateText(
      "Kejaksaan Negeri Banyumas mengusut kasus dugaan penyalahgunaan dana aspirasi yang seharusnya digunakan untuk kepentingan masyarakat, namun diduga disalahgunakan oleh anggota DPRD untuk kepentingan pribadi."
    ),
    fullDescription:
      "Kejaksaan Negeri Banyumas mengusut kasus dugaan penyalahgunaan dana aspirasi yang seharusnya digunakan untuk kepentingan masyarakat, namun diduga disalahgunakan oleh anggota DPRD untuk kepentingan pribadi.",
    reference:
      "https://regional.espos.id/penyimpangan-dana-aspirasi-dprd-banyumas-diusut-kejari-1146865",
    status: "Selesai",
    category: "pengadaan",
  },
  {
    id: 4,
    title:
      "Korupsi Dana Desa Rp 600 Juta, Mantan Kades di Banyumas Dijebloskan Penjara",
    date: "23 September 2022",
    amount: "Korupsi dana desa sebesar Rp 600 juta",
    institution: "Desa Karanglewas",
    description: truncateText(
      "Mantan kepala desa di Banyumas dijatuhi hukuman penjara setelah terbukti menggelapkan dana desa sebesar Rp 600 juta yang seharusnya digunakan untuk kepentingan pembangunan desa."
    ),
    fullDescription:
      "Mantan kepala desa di Banyumas dijatuhi hukuman penjara setelah terbukti menggelapkan dana desa sebesar Rp 600 juta yang seharusnya digunakan untuk kepentingan pembangunan desa.",
    reference:
      "https://regional.kompas.com/read/2022/09/23/184007878/korupsi-dana-desa-rp-600-juta-mantan-kades-di-banyumas-dijebloskan-penjara",
    status: "Selesai",
    category: "pengadaan",
  },
  {
    id: 5,
    title: "Jaksa Sita Rp470 Juta, Dugaan Korupsi Dana JPS COVID Banyumas",
    date: "10 Maret 2021",
    amount: "Korupsi dana JPS COVID-19 sebesar Rp 470 juta",
    institution: "Pemerintah Banyumas",
    description: truncateText(
      "Jaksa menyita uang sebesar Rp 470 juta terkait dengan dugaan korupsi dalam pengelolaan dana JPS (Jaring Pengaman Sosial) COVID-19 yang seharusnya digunakan untuk membantu masyarakat terdampak pandemi."
    ),
    fullDescription:
      "Jaksa menyita uang sebesar Rp 470 juta terkait dengan dugaan korupsi dalam pengelolaan dana JPS (Jaring Pengaman Sosial) COVID-19 yang seharusnya digunakan untuk membantu masyarakat terdampak pandemi.",
    reference:
      "https://www.cnnindonesia.com/nasional/20210310124327-12-615979/jaksa-sita-rp470-juta-dugaan-korupsi-dana-jps-covid-banyumas",
    status: "Selesai",
    category: "pengadaan",
  },
  {
    id: 6,
    title:
      "Gebuk Banyumas Gelar Aksi Demo, Usut Dugaan Kasus Korupsi Dana BPNT Banyumas",
    date: "28 April 2021",
    amount: "Dugaan korupsi dana BPNT (Bantuan Pangan Non Tunai)",
    institution: "Pemerintah Kabupaten Banyumas",
    description: truncateText(
      "Sejumlah masyarakat yang tergabung dalam Gerakan Bersama Usut Korupsi (GebuK) Banyumas menggelar aksi demo di depan DPRD Banyumas, menuntut penyelidikan lebih lanjut terkait dugaan penyelewengan dana BPNT yang melibatkan anggota DPRD dan pegawai Dinas Sosial Kabupaten Banyumas."
    ),
    fullDescription:
      "Sejumlah masyarakat yang tergabung dalam Gerakan Bersama Usut Korupsi (GebuK) Banyumas menggelar aksi demo di depan DPRD Banyumas, menuntut penyelidikan lebih lanjut terkait dugaan penyelewengan dana BPNT yang melibatkan anggota DPRD dan pegawai Dinas Sosial Kabupaten Banyumas.",
    reference:
      "https://www.tabloidpamor.com/index-2.php?view=news&gebuk-banyumas-gelar-aksi-demo-usut-dugaan-kasus-korupsi-dana-bpnt-banyumas&PMR=VG5wck5VNVJQVDA9",
    status: "Selesai",
    category: "pengadaan",
  },
];
const categories = [
  { id: "all", label: "Semua Kasus" },
  { id: "pengadaan", label: "Pengadaan" },
  { id: "pajak", label: "pajak" },
];

export default function Cases() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCase, setSelectedCase] = useState<(typeof cases)[0] | null>(
    null
  );

  // Add click handler
  const handleCaseClick = (caseItem: (typeof cases)[0]) => {
    setSelectedCase(caseItem);
  };

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
    <>
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
              Transparansi kasus korupsi untuk pembelajaran dan pencegahan di
              masa depan
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
                  {/* Status Badge - Top Right */}
                  <div className="flex justify-end mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        caseItem.status === "Sedang Diproses"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {caseItem.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {caseItem.title}
                  </h3>

                  {/* Meta Information */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar size={16} />
                      <span>{caseItem.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Building2 size={16} />
                      <span>{caseItem.institution}</span>
                    </div>
                  </div>

                  {/* Corruption Amount */}
                  <div className="flex items-center gap-2 mb-4 bg-red-50 p-2 rounded-lg">
                    <DollarSign className="text-red-500" size={20} />
                    <span className="font-medium text-red-600">
                      {caseItem.amount}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{caseItem.description}</p>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <a
                      href={caseItem.reference}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1"
                    >
                      Sumber Berita
                      <ArrowUpRight size={14} />
                    </a>

                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => handleCaseClick(caseItem)}
                      className="text-blue-600 flex items-center gap-2"
                    >
                      Detail Kasus
                      <ArrowRight size={16} />
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

      <AnimatePresence>
        <CaseModal
          caseItem={selectedCase}
          isOpen={!!selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      </AnimatePresence>
    </>
  );
}
