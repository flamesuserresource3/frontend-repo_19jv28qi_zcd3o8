import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h3
          className="text-3xl md:text-5xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Comandă acum și primești bonusuri exclusive
        </motion.h3>
        <motion.p
          className="mt-4 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ediție tipărită + ebook + acces la un mini-audio ghidat pentru reconectare cu sinele.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#"
            className="rounded-full bg-black text-white px-8 py-4 font-medium hover:opacity-90 shadow-md"
          >
            Cumpără cartea — 99 RON
          </a>
          <span className="text-sm text-gray-600">Plăți securizate. Livrare rapidă.</span>
        </motion.div>
      </div>
    </section>
  )
}
