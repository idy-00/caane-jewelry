import { useState } from 'react'
import { motion } from 'framer-motion'
import { femme } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function BoutiqueFemme() {
  const [active, setActive] = useState('Tout')

  const products = active === 'Tout'
    ? femme.products
    : femme.products.filter(p => p.category === active)

  return (
    <>
      {/* Hero avec image */}
      <section className="relative bg-cream pt-24 pb-16 px-6 md:px-12 overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-[38%] bg-cover bg-center max-md:hidden"
          style={{ backgroundImage: 'url(/new-img-2.jpeg)', backgroundPosition: '50% 38%' }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-[50%] bg-gradient-to-r from-cream to-transparent max-md:hidden" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.p
            className="font-jost font-light text-[9px] tracking-[0.3em] uppercase text-noir/40 mb-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            Collections
          </motion.p>
          <motion.h1
            className="font-playfair font-bold text-noir leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Boutique Femme
          </motion.h1>
          <motion.p
            className="font-cormorant italic text-noir/40 text-[15px] leading-[1.7] max-w-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          >
            Bagues, bracelets, sautoir, chaîne de taille —
            chaque pièce pensée pour vous.
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <nav className="bg-cream px-6 md:px-12 border-b border-noir/8 sticky top-[52px] z-[100]" aria-label="Filtres">
        <div className="max-w-6xl mx-auto flex overflow-x-auto scrollbar-none">
          {femme.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 font-jost font-light text-[9px] tracking-[0.18em] uppercase
                px-4 py-3 border-b-2 transition-all duration-200 cursor-pointer bg-transparent whitespace-nowrap
                ${active === cat
                  ? 'border-noir text-noir'
                  : 'border-transparent text-noir/35 hover:text-noir/60'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Grille produits */}
      <section className="bg-cream py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} dark={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
