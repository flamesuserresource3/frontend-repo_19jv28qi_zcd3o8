import { motion } from 'framer-motion'
import { Heart, Sparkles, Target } from 'lucide-react'

const items = [
  {
    icon: Heart,
    title: 'Vindecare emoțională',
    text: 'Instrumente practice pentru a-ți reîntoarce blândețea față de tine și ceilalți.'
  },
  {
    icon: Sparkles,
    title: 'Ritualuri zilnice',
    text: 'Obiceiuri simple, dar transformatoare, pentru claritate și bucurie.'
  },
  {
    icon: Target,
    title: 'Claritate și scop',
    text: 'Ghidare pentru a-ți realinia viața cu valorile inimii tale.'
  }
]

export default function Features() {
  return (
    <section className="relative py-24" id="chapters">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ce vei găsi în carte
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-3xl border border-black/10 p-6 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <item.icon className="w-6 h-6" />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_top,rgba(255,182,193,0.25),transparent_60%)]" />
    </section>
  )
}
