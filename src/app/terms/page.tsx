import BackButton from '@/components/BackButton'

export default function Terms() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-blue-100 pt-28 pb-20">
        <BackButton />
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Syarat & Ketentuan</h1>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Ketentuan Umum</h2>
              <p className="text-gray-600 leading-relaxed">
                Dengan menggunakan platform SiMas, Anda menyetujui untuk terikat dengan syarat dan ketentuan ini.
                Platform ini ditujukan untuk penggunaan yang sah dan bertanggung jawab.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Penggunaan Platform</h2>
              <p className="text-gray-600 leading-relaxed">
                Pengguna wajib:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600 ml-4">
                <li>Memberikan informasi yang akurat</li>
                <li>Tidak menyalahgunakan platform</li>
                <li>Menjaga kerahasiaan informasi sensitif</li>
                <li>Melaporkan dengan itikad baik</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Tanggung Jawab</h2>
              <p className="text-gray-600 leading-relaxed">
                SiMas tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600 ml-4">
                <li>Kerugian akibat penggunaan platform</li>
                <li>Keakuratan informasi dari pengguna</li>
                <li>Gangguan teknis di luar kendali kami</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }