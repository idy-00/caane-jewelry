import { motion } from 'framer-motion'

const feed = [
  { src: '/new-img-1.jpeg', pos: '55% 18%' },
  { src: '/new-img-2.jpeg', pos: '50% 38%' },
  { src: '/new-img-3.jpeg', pos: '50% 28%' },
  { src: '/new-img-4.jpeg', pos: '50% 40%' },
]

export default function InstagramTeaser() {
  return (
    <section className="bg-noir py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="font-jost font-light text-[9px] tracking-[0.3em] uppercase text-cream/30 mb-2">Instagram</p>
            <h2 className="font-playfair font-bold text-cream leading-[1.1]" style={{ fontSize: 'clamp(22px, 2.5vw, 34px)' }}>
              @caane.jewels
            </h2>
          </div>
          <a
            href="https://instagram.com/caane.jewels"
            target="_blank" rel="noreferrer"
            className="font-jost font-light text-[9px] tracking-[0.2em] uppercase text-gold hover:text-cream transition-colors duration-300"
          >
            Suivre →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {feed.map((f, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/caane.jewels"
              target="_blank" rel="noreferrer"
              className="block relative overflow-hidden group aspect-square"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 * i }}
            >
              <img
                src={f.src}
                alt={`Čaané ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ objectPosition: f.pos }}
              />
              <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-colors duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
