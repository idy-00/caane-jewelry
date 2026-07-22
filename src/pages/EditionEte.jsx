import { motion } from 'framer-motion'

export default function EditionEte() {
  return (
    <>
      <section className="relative min-h-[50vh] bg-noir flex items-end pb-14 overflow-hidden">
        <img
          src="/new-img-3.jpeg"
          alt="Édition Été — Čaané"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/5 via-transparent to-noir/75" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 pt-24">
          <motion.h1
            className="font-playfair font-bold text-cream leading-[1.05]"
            style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Édition Été
          </motion.h1>
        </div>
      </section>

      <section className="bg-cream py-20 px-6 md:px-12">
        <div className="max-w-md mx-auto text-center">
          <p className="font-cormorant italic text-noir/40 text-[16px] mb-4">
            Collection estivale en préparation.
          </p>
          <p className="font-jost font-light text-[9px] tracking-[0.2em] uppercase text-noir/30">
            Bientôt disponible
          </p>
        </div>
      </section>
    </>
  )
}
