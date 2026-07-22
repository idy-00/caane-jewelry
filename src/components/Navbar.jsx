import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import Logo from './Logo'

const links = [
  { label: 'Femme',    to: '/boutique-femme' },
  { label: 'Homme',    to: '/boutique-homme' },
  { label: 'Été',      to: '/edition-ete' },
  { label: 'Histoire', to: '/histoire' },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { totalItems, openCart } = useCart()

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 md:px-12 py-3 bg-noir">

        <Link to="/" className="flex-shrink-0" aria-label="Accueil Čaané">
          <Logo size={32} />
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`font-jost font-light text-[10px] tracking-[0.2em] uppercase transition-colors duration-200
                  ${pathname === l.to ? 'text-gold' : 'text-cream/70 hover:text-cream'}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={openCart}
              className="relative bg-transparent border-none cursor-pointer p-1 text-cream/70 hover:text-cream transition-colors"
              aria-label="Ouvrir le panier"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold text-noir font-jost text-[8px] font-medium flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative bg-transparent border-none cursor-pointer p-1 text-cream/70"
            aria-label="Ouvrir le panier"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-gold text-noir font-jost text-[7px] font-medium flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span className="block w-5 h-px bg-cream" />
            <span className="block w-5 h-px bg-cream" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[190] bg-noir flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                <Link to={l.to} className="font-playfair font-semibold text-[28px] text-cream hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <button
              className="absolute top-5 right-6 font-jost font-light text-[10px] tracking-[0.2em] uppercase text-cream/60 bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Fermer
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
