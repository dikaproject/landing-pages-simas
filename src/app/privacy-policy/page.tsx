import BackButton from '@/components/BackButton'

export default function PrivacyPolicy() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-blue-100 pt-28 pb-20">
        <BackButton />
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Kebijakan Privasi</h1>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informasi yang Kami Kumpulkan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami mengumpulkan informasi ketika Anda menggunakan platform SiMas, termasuk:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600 ml-4">
                <li>Informasi yang Anda berikan saat melaporkan kasus</li>
                <li>Data penggunaan website</li>
                <li>Informasi perangkat dan browser</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Penggunaan Informasi</h2>
              <p className="text-gray-600 leading-relaxed">
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600 ml-4">
                <li>Memproses dan menindaklanjuti laporan</li>
                <li>Meningkatkan layanan platform</li>
                <li>Mengirim pembaruan tentang laporan Anda</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Keamanan Data</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami berkomitmen untuk melindungi data Anda dengan:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600 ml-4">
                <li>Enkripsi data end-to-end</li>
                <li>Akses terbatas pada informasi sensitif</li>
                <li>Pemantauan keamanan berkala</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }