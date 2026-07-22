import { motion } from 'framer-motion'

const valeurs = [
  { label: 'Matière Premium', desc: 'Acier inoxydable 316L, résistant à l\'eau.' },
  { label: 'Garantie 12 Mois', desc: 'Chaque pièce contrôlée et garantie.' },
  { label: 'Écrin Élégant', desc: 'Prêt à offrir dans un écrin Čaané.' },
  { label: 'Livraison Internationale', desc: 'Expédition sécurisée sous 48–72h.' },
]

export default function Manifeste() {
  return (
    <section className="bg-noir py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <motion.p
          className="font-jost font-light text-[9px] tracking-[0.3em] uppercase text-cream/30 mb-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Nos Engagements
        </motion.p>
        <motion.h2
          className="font-playfair font-bold text-cream leading-[1.1]"
          style={{ fontSize: 'clamp(26px, 3.2vw, 42px)' }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Pourquoi Čaané ?
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {valeurs.map((v, i) => (
          <motion.div
            key={v.label}
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.06 * i }}
          >
            <p className="font-jost font-light text-[8px] tracking-[0.2em] uppercase text-gold mb-2">
              {v.label}
            </p>
            <p className="font-jost font-light text-[11px] leading-[1.7] text-cream/35">
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
