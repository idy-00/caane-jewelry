import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import BoutiqueFemme from './pages/BoutiqueFemme'
import BoutiqueHomme from './pages/BoutiqueHomme'
import EditionEte from './pages/EditionEte'
import Histoire from './pages/Histoire'
import Contact from './pages/Contact'
import ProduitDetail from './pages/ProduitDetail'

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/boutique-femme" element={<PageTransition><BoutiqueFemme /></PageTransition>} />
          <Route path="/boutique-homme" element={<PageTransition><BoutiqueHomme /></PageTransition>} />
          <Route path="/edition-ete" element={<PageTransition><EditionEte /></PageTransition>} />
          <Route path="/histoire" element={<PageTransition><Histoire /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/produit/:id" element={<PageTransition><ProduitDetail /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
