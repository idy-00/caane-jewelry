import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="bg-cream pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="font-playfair font-bold text-noir leading-[1.05]"
            style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Contact
          </motion.h1>
        </div>
      </section>

      <section className="bg-cream pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <p className="font-jost font-light text-[9px] tracking-[0.25em] uppercase text-noir/35 mb-6">Coordonnées</p>
            <div className="space-y-5">
              {[
                { label: 'WhatsApp',  value: '+221 77 429 15 71',  href: 'https://wa.me/221774291571' },
                { label: 'Instagram', value: '@caane.jewels',       href: 'https://instagram.com/caane.jewels' },
                { label: 'Email',     value: 'contact@caane.jewelry', href: 'mailto:contact@caane.jewelry' },
              ].map(item => (
                <div key={item.label}>
                  <p className="font-jost font-light text-[8px] tracking-[0.2em] uppercase text-noir/30 mb-1">{item.label}</p>
                  <a href={item.href} target="_blank" rel="noreferrer"
                    className="font-playfair font-semibold text-noir text-[15px] hover:text-gold transition-colors duration-300">
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
            <p className="font-jost font-light text-[12px] text-noir/40 leading-[1.7] mt-8">
              Notre équipe répond sous 24h.
            </p>
          </div>

          <div>
            <p className="font-jost font-light text-[9px] tracking-[0.25em] uppercase text-noir/35 mb-6">Message</p>
            {sent ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                <p className="font-playfair font-semibold text-noir text-[16px] mb-2">Envoyé ✓</p>
                <p className="font-jost font-light text-[12px] text-noir/40">Nous vous répondrons sous 24h.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'nom', label: 'Votre nom', type: 'text' },
                  { name: 'email', label: 'Adresse e-mail', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <input
                      type={f.type}
                      required
                      placeholder={f.label}
                      value={form[f.name]}
                      onChange={e => setForm(v => ({ ...v, [f.name]: e.target.value }))}
                      className="w-full bg-transparent border-b border-noir/12 py-3 px-0
                        font-jost font-light text-[12px] text-noir
                        placeholder:text-noir/30 outline-none focus:border-noir/40 transition-colors duration-300"
                    />
                  </div>
                ))}
                <div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Votre message"
                    value={form.message}
                    onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
                    className="w-full bg-transparent border-b border-noir/12 py-3 px-0
                      font-jost font-light text-[12px] text-noir resize-none
                      placeholder:text-noir/30 outline-none focus:border-noir/40 transition-colors duration-300"
                  />
                </div>
                <button type="submit"
                  className="bg-noir text-cream font-jost font-light text-[9px] tracking-[0.25em] uppercase px-8 py-3 border-none cursor-pointer hover:bg-noir/85 transition-colors duration-300"
                >
                  Envoyer
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
