// components/BackButton.tsx
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  return (
    <Link 
      href="/"
      className="fixed top-24 left-8 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-colors group"
    >
      <ArrowLeft 
        size={24} 
        className="text-blue-600 group-hover:-translate-x-1 transition-transform" 
      />
    </Link>
  )
}