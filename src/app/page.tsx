// app/page.tsx
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Education from '@/components/Education'
import Laws from '@/components/Laws'
import Cases from '@/components/Cases'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Education />
        <Laws />
        <Cases />
        <Footer />
      </main>
    </>
  )
}