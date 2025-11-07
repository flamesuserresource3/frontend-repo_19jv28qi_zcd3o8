import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0WkqVguEHCdlqE2Q/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Iubirea Reîncepe cu Mine
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              O călătorie profundă către sine, vindecare și o iubire care pornește din interior.
            </motion.p>
            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <a href="#cta" className="rounded-full bg-black text-white px-6 py-3 font-medium hover:opacity-90">Cumpără acum</a>
              <a href="#chapters" className="rounded-full border border-black/10 px-6 py-3 font-medium hover:bg-black/5">Vezi cuprinsul</a>
            </motion.div>
          </div>

          <motion.div
            className="relative h-[420px] rounded-3xl bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 shadow-inner"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.5),transparent_45%)]" />
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-white/60 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/40 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg" />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
    </section>
  )
}
