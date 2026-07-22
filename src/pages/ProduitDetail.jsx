import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { femme, homme, formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'

const allProducts = [...femme.products, ...homme.products]

export default function ProduitDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = allProducts.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <p className="font-cormorant italic text-noir/40 text-[18px] mb-4">Produit introuvable.</p>
          <Link to="/" className="font-jost font-light text-[9px] tracking-[0.2em] uppercase text-noir/60">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  const dark = id.startsWith('h-')
  const bg = dark ? 'bg-noir' : 'bg-cream'
  const text = dark ? 'text-cream' : 'text-noir'
  const muted = dark ? 'text-cream/40' : 'text-noir/40'
  const border = dark ? 'border-cream/8' : 'border-noir/8'

  return (
    <div className={bg}>
      <section className={`pt-20 pb-20 px-6 md:px-12 ${bg}`}>
        <div className="max-w-5xl mx-auto">

          <motion.div className="flex items-center gap-2 mb-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link to={dark ? '/boutique-homme' : '/boutique-femme'}
              className={`font-jost font-light text-[8px] tracking-[0.2em] uppercase ${muted} hover:${text} transition-colors`}>
              {dark ? 'Homme' : 'Femme'}
            </Link>
            <span className={`text-[8px] ${muted}`}>·</span>
            <span className={`font-jost font-light text-[8px] tracking-[0.2em] uppercase ${muted}`}>
              {product.collection}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            <motion.div
              className="relative"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: product.objectPosition || '50% 30%' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:pt-4"
            >
              {product.badge && (
                <span className={`inline-block font-jost font-light text-[7px] tracking-[0.2em] uppercase px-3 py-1 border mb-4
                  ${dark ? 'text-cream/60 border-cream/15' : 'text-noir/60 border-noir/15'}`}>
                  {product.badge}
                </span>
              )}

              <h1 className={`font-playfair font-bold leading-[1.05] mb-2 ${text}`}
                style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}>
                {product.name}
              </h1>

              {product.tagline && (
                <p className={`font-cormorant italic text-[14px] mb-6 ${muted}`}>
                  {product.tagline}
                </p>
              )}

              {product.description && (
                <p className={`font-jost font-light text-[12px] leading-[1.8] mb-6 ${muted}`}>
                  {product.description}
                </p>
              )}

              <p className={`font-playfair font-bold text-gold mb-8`}
                style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}>
                {formatPrice(product.price, 'CFA', product.priceUnit)}
              </p>

              <div className={`border-t ${border} pt-4 mb-4`}>
                <p className={`font-jost font-light text-[7px] tracking-[0.2em] uppercase ${muted} mb-1`}>Composition</p>
                <p className={`font-jost font-light text-[12px] ${muted}`}>
                  {product.material}{product.stone && ` · ${product.stone}`}
                </p>
              </div>

              <div className={`border-t ${border} pt-4 mb-8`}>
                <div className="grid grid-cols-2 gap-3">
                  {['Garantie 12 mois', 'Écrin inclus', 'Livraison 48–72h', 'Hypoallergénique'].map(val => (
                    <p key={val} className={`font-jost font-light text-[10px] ${muted}`}>{val}</p>
                  ))}
                </div>
              </div>

              {product.price && (
                <button
                  onClick={() => addItem(product)}
                  className={`w-full py-3 font-jost font-light text-[9px] tracking-[0.25em] uppercase border-none cursor-pointer transition-all duration-300 mb-4
                    ${dark ? 'bg-cream text-noir hover:bg-cream/90' : 'bg-noir text-cream hover:bg-noir/90'}`}
                >
                  Ajouter au panier
                </button>
              )}

              <a
                href={`https://wa.me/221774291571?text=Bonjour, je suis intéressé(e) par : ${product.name}`}
                target="_blank" rel="noreferrer"
                className={`block text-center font-jost font-light text-[9px] tracking-[0.2em] uppercase ${dark ? 'text-cream/40 hover:text-cream' : 'text-noir/40 hover:text-noir'} transition-colors duration-300`}
              >
                Commander via WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
