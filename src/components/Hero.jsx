import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import heroPhoto from '../assets/HeroSection.png'

const stats = [
  { number: '120+', label: 'Projects' },
  { number: '60+',  label: 'Client' },
  { number: '12+',  label: 'Content Types' },
  { number: '5+',   label: 'Professional Tools' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Full-bleed photo ── */}
      <div className="absolute inset-0">
        <img
          src={heroPhoto}
          alt="Abdullah Beshary — Graphic Designer"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
        {/* dark vignette so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(5,20,15,0.72) 0%, rgba(5,20,15,0.18) 50%, rgba(5,20,15,0.45) 100%)',
          }}
        />
        {/* bottom fade for stats bar */}
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{
            background:
              'linear-gradient(to top, rgba(5,20,15,0.88) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen pt-24 sm:pt-28 lg:pt-32">

        {/* ── Middle row: name-left | buttons-right ── */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12
                          flex flex-col sm:flex-row sm:items-end sm:justify-between
                          gap-6 sm:gap-0 pb-8 sm:pb-0">

            {/* Name + title — bottom-left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1
                className="font-extrabold leading-none tracking-tight"
                style={{
                  color: '#F4F4F4',
                  fontSize: 'clamp(2.6rem, 7vw, 6rem)',
                  lineHeight: 1.0,
                  textShadow: '0 2px 24px rgba(0,0,0,0.5)',
                }}
              >
                ABDULLAH<br />BESHARY
              </h1>
              <p
                className="mt-3 font-semibold tracking-wide"
                style={{
                  color: '#F4F4F4',
                  fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                  opacity: 0.9,
                }}
              >
                Graphic Designer
              </p>
            </motion.div>

            {/* CTA buttons — bottom-right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-col gap-3 sm:items-end"
            >
              <a
                href="#works"
                className="inline-flex items-center justify-between gap-4 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-250 hover:scale-105 hover:opacity-90"
                style={{
                  border: '1.5px solid rgba(83,179,162,0.85)',
                  color: '#F4F4F4',
                  backgroundColor: 'rgba(62,148,132,0.18)',
                  backdropFilter: 'blur(8px)',
                  minWidth: '170px',
                }}
              >
                View my work
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(83,179,162,0.3)' }}
                >
                  <ChevronRight size={14} />
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-between gap-4 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-250 hover:scale-105 hover:opacity-90"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  color: '#F4F4F4',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                  minWidth: '170px',
                }}
              >
                Get in touch
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <ChevronRight size={14} />
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-8 sm:pb-10 lg:pb-14">
            <div className="flex items-center justify-start sm:justify-center lg:justify-start flex-wrap gap-0">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {/* stat item */}
                  <div className="flex flex-col items-start px-5 sm:px-8 py-2 first:pl-0">
                    <span
                      className="font-extrabold leading-none"
                      style={{
                        color: '#53B3A2',
                        fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
                        textShadow: '0 0 20px rgba(83,179,162,0.4)',
                      }}
                    >
                      {stat.number}
                    </span>
                    <span
                      className="text-xs font-semibold tracking-widest uppercase mt-1"
                      style={{ color: 'rgba(244,244,244,0.75)' }}
                    >
                      {stat.label}
                    </span>
                  </div>

                  {/* divider — not after last item */}
                  {i < stats.length - 1 && (
                    <div
                      className="h-10 w-px flex-shrink-0"
                      style={{ backgroundColor: 'rgba(83,179,162,0.35)' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
