import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

export default function CartDrawer() {
  const { items, removeItem, updateQty, totalItems, totalPrice, isOpen, closeCart } = useCart()

  const whatsappMessage = items.map(i =>
    `• ${i.name} (x${i.qty}) — ${formatPrice(i.price * i.qty)}`
  ).join('\n')

  const whatsappUrl = `https://wa.me/221774291571?text=${encodeURIComponent(
    `Bonjour Čaané,\n\nJe souhaite commander :\n\n${whatsappMessage}\n\nTotal : ${formatPrice(totalPrice)}\n\nMerci !`
  )}`

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-noir/40 z-[998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          <motion.aside
            className="fixed top-0 right-0 h-full w-full max-w-[380px] bg-noir z-[999] flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-cream/8">
              <h2 className="font-playfair font-semibold text-cream text-[16px]">
                Panier
                {totalItems > 0 && (
                  <span className="ml-2 font-jost font-light text-[11px] text-cream/40">({totalItems})</span>
                )}
              </h2>
              <button onClick={closeCart}
                className="text-cream/40 hover:text-cream bg-transparent border-none cursor-pointer transition-colors"
                aria-label="Fermer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="font-jost font-light text-[12px] text-cream/30">Panier vide</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-3 pb-4 border-b border-cream/6 last:border-none">
                      <div className="w-14 h-18 flex-shrink-0 overflow-hidden">
                        <img src={item.image} alt={item.name}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: item.objectPosition || '50% 50%' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-playfair font-semibold text-[12px] text-cream leading-tight truncate">{item.name}</h4>
                        <p className="font-jost font-light text-[10px] text-cream/40 mb-2">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-cream/12">
                            <button onClick={() => updateQty(item.id, item.qty - 1)}
                              className="w-6 h-6 flex items-center justify-center text-cream/50 bg-transparent border-none cursor-pointer text-[13px]">−</button>
                            <span className="w-5 text-center font-jost text-[10px] text-cream">{item.qty}</span>
                            <button onClick={() => updateQty(item.id, item.qty + 1)}
                              className="w-6 h-6 flex items-center justify-center text-cream/50 bg-transparent border-none cursor-pointer text-[13px]">+</button>
                          </div>
                          <button onClick={() => removeItem(item.id)}
                            className="font-jost font-light text-[7px] tracking-[0.15em] uppercase text-cream/25 hover:text-cream/60 bg-transparent border-none cursor-pointer transition-colors">
                            Retirer
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-4 border-t border-cream/8">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="font-jost font-light text-[9px] tracking-[0.2em] uppercase text-cream/40">Total</span>
                  <span className="font-playfair font-bold text-[18px] text-gold">{formatPrice(totalPrice)}</span>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer"
                  className="block w-full text-center py-3 bg-cream text-noir font-jost font-light text-[9px] tracking-[0.25em] uppercase no-underline hover:bg-cream/90 transition-colors duration-300">
                  Commander via WhatsApp
                </a>
                <p className="font-jost font-light text-[8px] text-cream/20 text-center mt-2">
                  Wave · Orange Money · Espèces
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
