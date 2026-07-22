import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-noir">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div>
            <p className="font-playfair font-bold text-[20px] text-cream mb-1">ČAANÉ</p>
            <p className="font-jost font-light text-[8px] tracking-[0.4em] uppercase text-cream/30 mb-5">By Fatima Yashba</p>
            <p className="font-cormorant italic text-cream/30 text-[14px] leading-relaxed">
              Élégance · Féminité · Confiance.
            </p>
          </div>

          <div>
            <p className="font-jost font-light text-[8px] tracking-[0.25em] uppercase text-cream/30 mb-5">Navigation</p>
            <ul className="space-y-2.5 list-none">
              {[
                ['Boutique Femme', '/boutique-femme'],
                ['Boutique Homme', '/boutique-homme'],
                ['Notre Histoire', '/histoire'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="font-jost font-light text-[11px] text-cream/40 hover:text-cream transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-jost font-light text-[8px] tracking-[0.25em] uppercase text-cream/30 mb-5">Contact</p>
            <div className="space-y-2.5">
              <a href="https://wa.me/221774291571" target="_blank" rel="noreferrer"
                className="block font-jost font-light text-[11px] text-cream/40 hover:text-cream transition-colors duration-300">
                +221 77 429 15 71
              </a>
              <a href="https://instagram.com/caane.jewels" target="_blank" rel="noreferrer"
                className="block font-jost font-light text-[11px] text-cream/40 hover:text-cream transition-colors duration-300">
                @caane.jewels
              </a>
              <a href="mailto:contact@caane.jewelry"
                className="block font-jost font-light text-[11px] text-cream/40 hover:text-cream transition-colors duration-300">
                contact@caane.jewelry
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-cream/8 mb-6" />
        <p className="font-jost font-light text-[8px] tracking-[0.15em] text-cream/20 text-center">
          © 2026 Čaané · Dakar, Sénégal
        </p>
      </div>
    </footer>
  )
}
