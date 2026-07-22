import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const POURQUOI = [
  'Acier inoxydable 316L', 'Hypoallergénique', 'Packaging luxueux',
  'Design intemporel', "Résistant à l'eau", 'Ne noircit pas',
  'Garantie qualité', 'Fabrication soignée',
]

export default function Histoire() {
  return (
    <>
      {/* Hero image */}
      <section className="relative min-h-[50vh] bg-noir flex items-end pb-14 overflow-hidden">
        <img src="/new-img-1.jpeg" alt="Čaané — Notre Histoire"
          className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '55% 15%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/10 via-transparent to-noir/75" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 pt-24">
          <motion.h1 className="font-playfair font-bold text-cream leading-[1.05]"
            style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}>
            Notre Histoire
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <img src="/caane-chaine-taille.jpeg" alt="Chaîne de taille Čaané"
              className="w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
          </motion.div>

          <div className="md:pt-6">
            <motion.p className="font-jost font-light text-[9px] tracking-[0.25em] uppercase text-noir/35 mb-3"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              L'Origine
            </motion.p>
            <motion.p className="font-cormorant italic text-noir/60 text-[15px] leading-[1.9] mb-8"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              Čaané est née d'un hommage — celui d'une fille à sa mère, Thiané. Chaque bijou porte l'empreinte
              de cette transmission : force, grâce, intemporalité.
            </motion.p>
            <motion.p className="font-playfair font-semibold text-noir text-[16px] leading-[1.4] mb-4"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              Devenir la référence africaine de la joaillerie premium.
            </motion.p>
            <motion.p className="font-jost font-light text-[12px] leading-[1.8] text-noir/50"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Grâce à un savoir-faire alliant élégance, qualité et innovation, Čaané ambitionne
              de porter haut la joaillerie africaine dans le monde entier.
            </motion.p>
            <p className="font-jost font-light text-[8px] tracking-[0.2em] uppercase text-gold mt-6">
              — Fatima Yashba, Fondatrice
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="bg-noir py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="font-playfair font-bold text-cream leading-[1.1] mb-10 text-center"
            style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Pourquoi Čaané ?
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {POURQUOI.map((item, i) => (
              <motion.p key={item}
                className="font-jost font-light text-[10px] text-cream/40 text-center"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.04 * i }}>
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
