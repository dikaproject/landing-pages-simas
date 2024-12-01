// app/page.tsx
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Education from '@/components/Education'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Education />
      </main>
    </>
  )
}