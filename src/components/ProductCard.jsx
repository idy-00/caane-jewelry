import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, index = 0, dark = false }) {
  const isPlaceholder = product.placeholder
  const { addItem } = useCart()

  const inner = (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.05 * (index % 6), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-3">
        {isPlaceholder ? (
          <div className={`w-full h-full flex items-center justify-center ${dark ? 'bg-noir' : 'bg-noir/5'}`}>
            <span className={`font-jost font-light text-[8px] tracking-[0.2em] uppercase ${dark ? 'text-cream/30' : 'text-noir/30'}`}>
              Bientôt
            </span>
          </div>
        ) : (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              style={{ objectPosition: product.objectPosition || '50% 50%' }}
            />
            {product.price && (
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product) }}
                className={`absolute bottom-0 left-0 right-0 font-jost font-light text-[8px] tracking-[0.2em] uppercase py-2.5 border-none cursor-pointer
                  md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300
                  ${dark ? 'bg-cream text-noir' : 'bg-noir text-cream'}`}
              >
                Ajouter au panier
              </button>
            )}
          </>
        )}
      </div>

      <div>
        <p className={`font-jost font-light text-[7px] tracking-[0.2em] uppercase mb-0.5
          ${dark ? 'text-cream/30' : 'text-noir/35'}`}>
          {product.collection}
        </p>
        <h3 className={`font-playfair font-semibold text-[14px] leading-tight mb-0.5
          ${dark ? 'text-cream' : 'text-noir'}`}>
          {product.name}
        </h3>
        <p className={`font-jost font-light text-[11px]
          ${dark ? 'text-cream/50' : 'text-noir/50'}`}>
          {formatPrice(product.price, 'CFA', product.priceUnit)}
        </p>
      </div>
    </motion.article>
  )

  if (isPlaceholder) return inner

  return (
    <Link to={`/produit/${product.id}`} className="block">
      {inner}
    </Link>
  )
}
