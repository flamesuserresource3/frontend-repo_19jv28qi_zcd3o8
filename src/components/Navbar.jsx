import { motion } from 'framer-motion'
import { BookOpen, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center gap-2 font-semibold tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BookOpen className="w-5 h-5" />
          <span>Iubirea Reîncepe cu Mine</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#chapters" className="hover:text-black transition">Cuprins</a>
          <a href="#cta" className="hover:text-black transition">Comandă</a>
        </div>

        <motion.a
          href="#cta"
          className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ShoppingCart className="w-4 h-4" /> Cumpără acum
        </motion.a>
      </div>
    </div>
  )
}
