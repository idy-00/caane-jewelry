import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const collections = [
  {
    label: 'Collection Femme',
    sub: 'Bagues · Bracelets · Sautoir · Chaîne de taille',
    to: '/boutique-femme',
    image: '/new-img-2.jpeg',
    objectPos: '50% 38%',
  },
  {
    label: 'Collection Homme',
    sub: 'Bagues Signet · Bracelets · Chapelets',
    to: '/boutique-homme',
    image: '/WhatsApp%20Image%202026-07-08%20at%203.54.37%20PM.jpeg',
    objectPos: '22% 38%',
  },
  {
    label: 'Édition Été',
    sub: 'Bientôt disponible',
    to: '/edition-ete',
    image: '/new-img-3.jpeg',
    objectPos: '50% 28%',
  },
]

export default function CollectionsGrid() {
  return (
    <section className="bg-cream py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto mb-12">
        <motion.p
          className="font-jost font-light text-[9px] tracking-[0.3em] uppercase text-noir/40 mb-3"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Nos Univers
        </motion.p>
        <motion.h2
          className="font-playfair font-bold text-noir leading-[1.08]"
          style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Les Collections
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-3">
        <CollCard col="md:col-span-7" card={collections[0]} h="h-[480px] md:h-[540px]" />
        <div className="md:col-span-5 flex flex-col gap-3">
          <CollCard card={collections[1]} h="h-[240px] md:h-[265px]" />
          <CollCard card={collections[2]} h="h-[240px] md:h-[265px]" />
        </div>
      </div>
    </section>
  )
}

function CollCard({ card, h, col = '' }) {
  return (
    <motion.div
      className={`relative overflow-hidden group ${col} ${h}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={card.to} className="block w-full h-full">
        <img
          src={card.image}
          alt={card.label}
          className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          style={{ objectPosition: card.objectPos }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/10 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <p className="font-jost font-light text-[7px] tracking-[0.2em] uppercase text-cream/50 mb-1">
            {card.sub}
          </p>
          <h3 className="font-playfair font-bold text-cream leading-tight text-[20px] md:text-[22px]">
            {card.label}
          </h3>
        </div>
      </Link>
    </motion.div>
  )
}
