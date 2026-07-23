import { useState } from 'react'
import { motion } from 'framer-motion'
import { homme } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function BoutiqueHomme() {
  const [active, setActive] = useState('Tout')

  const products = homme.products.filter(p =>
    active === 'Tout' || p.category === active
  )

  return (
    <>
      {/* Hero avec image de fond */}
      <section className="relative bg-noir pt-24 pb-16 px-6 md:px-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(/caane-bague-bracelet.jpeg)', backgroundPosition: '50% 20%' }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.p
            className="font-jost font-light text-[9px] tracking-[0.3em] uppercase text-cream/30 mb-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            Collections
          </motion.p>
          <motion.h1
            className="font-playfair font-bold text-cream leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Boutique Homme
          </motion.h1>
          <motion.p
            className="font-cormorant italic text-cream/35 text-[15px] leading-[1.7] max-w-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          >
            Bagues signet, bracelets d'autorité, chapelet prestige.
            L'homme qui sait ce qu'il porte.
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <nav className="bg-noir px-6 md:px-12 sticky top-[52px] z-[100]" aria-label="Filtres">
        <div className="max-w-6xl mx-auto flex overflow-x-auto scrollbar-none">
          {homme.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 font-jost font-light text-[9px] tracking-[0.18em] uppercase
                px-4 py-3 border-b-2 transition-all duration-200 cursor-pointer bg-transparent whitespace-nowrap
                ${active === cat
                  ? 'border-cream text-cream'
                  : 'border-transparent text-cream/35 hover:text-cream/60'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Grille produits */}
      <section className="bg-noir py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {products.length === 0 ? (
            <p className="text-center py-20 font-cormorant italic text-cream/30 text-[16px]">
              Aucune pièce pour cette sélection.
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} dark={true} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
