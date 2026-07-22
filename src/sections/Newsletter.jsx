import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSent(true)
  }

  return (
    <section className="bg-cream py-20 px-6 md:px-12">
      <div className="max-w-md mx-auto text-center">
        <p className="font-jost font-light text-[9px] tracking-[0.3em] uppercase text-noir/40 mb-4">Newsletter</p>
        <h2
          className="font-playfair font-bold text-noir mb-4 leading-[1.1]"
          style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}
        >
          Rejoignez la Čaané Family
        </h2>
        <p className="font-jost font-light text-[12px] text-noir/50 leading-[1.7] mb-8">
          Nouvelles collections et offres exclusives.
        </p>

        {sent ? (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-jost font-light text-[11px] text-gold">
            Merci de nous rejoindre ✓
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Votre adresse e-mail"
              required
              className="flex-1 bg-transparent border border-noir/15 sm:border-r-0 px-4 py-3
                font-jost font-light text-[11px] text-noir
                placeholder:text-noir/30 outline-none focus:border-noir/40 transition-colors duration-300"
            />
            <button
              type="submit"
              className="border border-noir bg-noir px-6 py-3
                font-jost font-light text-[9px] tracking-[0.25em] uppercase text-cream
                hover:bg-transparent hover:text-noir transition-all duration-300 cursor-pointer"
            >
              S'inscrire
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
