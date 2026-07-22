import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]
const fade = (i) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease },
})

export default function Hero() {
  const imgRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      const onScroll = () => {
        if (imgRef.current && window.scrollY < window.innerHeight) {
          imgRef.current.style.transform = `scale(1.03) translateY(${window.scrollY * 0.06}px)`
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex overflow-hidden bg-noir">

      {/* Desktop: left text panel */}
      <div className="relative w-[44%] flex-shrink-0 flex flex-col justify-center px-12 lg:px-16 z-10 max-md:hidden">
        <motion.h1
          {...fade(0)}
          className="font-playfair font-black text-cream leading-[0.88] mb-3"
          style={{ fontSize: 'clamp(64px, 7vw, 120px)' }}
        >
          ČAANÉ
        </motion.h1>
        <motion.p
          {...fade(1)}
          className="font-jost font-extralight text-cream/50 mb-12"
          style={{ fontSize: 'clamp(10px, 1vw, 14px)', letterSpacing: '0.45em' }}
        >
          BY FATIMA YASHBA
        </motion.p>
        <motion.p
          {...fade(2)}
          className="font-cormorant italic text-cream/40 leading-[1.8] mb-10 max-w-[240px]"
          style={{ fontSize: '15px' }}
        >
          Élégance · Féminité · Confiance.
        </motion.p>
        <motion.div {...fade(3)}>
          <Link
            to="/boutique-femme"
            className="inline-block font-jost font-light text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/40 px-6 py-3 hover:bg-gold hover:text-noir transition-all duration-300"
          >
            Découvrir
          </Link>
        </motion.div>
      </div>

      {/* Desktop: right image */}
      <div className="relative flex-1 overflow-hidden max-md:hidden">
        <img
          ref={imgRef}
          src="/new-img-1.jpeg"
          alt="Čaané — joaillerie africaine contemporaine"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '55% 18%', transform: 'scale(1.03)', transformOrigin: 'center top' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/20 to-transparent pointer-events-none" />
      </div>

      {/* Mobile */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/new-img-1.jpeg"
          alt="Čaané"
          className="w-full h-full object-cover"
          style={{ objectPosition: '55% 15%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/20 via-transparent to-noir/80" />
        <div className="absolute bottom-16 left-6 right-6 z-10">
          <h1 className="font-playfair font-black text-cream leading-[0.88] mb-2" style={{ fontSize: '56px' }}>
            ČAANÉ
          </h1>
          <p className="font-jost font-extralight text-cream/50 text-[10px] tracking-[0.4em] mb-8">BY FATIMA YASHBA</p>
          <Link
            to="/boutique-femme"
            className="inline-block font-jost font-light text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/40 px-6 py-3 hover:bg-gold hover:text-noir transition-all duration-300"
          >
            Découvrir
          </Link>
        </div>
      </div>
    </section>
  )
}
