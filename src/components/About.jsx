import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, Award } from 'lucide-react'

const skills = [
  'Photoshop', 'Illustrator', 'Figma', 'Branding',
  'InDesign', 'After Effects', 'Typography', 'UI/UX Design',
  'Motion Graphics', 'Print Design',
]

const tools = [
  { name: 'Figma', level: 95 },
  { name: 'Photoshop', level: 90 },
  { name: 'Illustrator', level: 92 },
  { name: 'After Effects', level: 80 },
]

function DesignerAvatar() {
  return (
    <svg viewBox="0 0 300 380" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#1a4a38" />
          <stop offset="100%" stopColor="#0A231C" />
        </radialGradient>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3E9484" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3E9484" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="380" fill="url(#bgGrad)" rx="16" />
      <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#3E9484" opacity="0.2" />
      </pattern>
      <rect width="300" height="380" fill="url(#dotGrid)" rx="16" />
      <ellipse cx="150" cy="200" rx="100" ry="120" fill="url(#glowGrad)" />
      <ellipse cx="150" cy="310" rx="70" ry="40" fill="#0d2c23" />
      <rect x="100" y="240" width="100" height="80" rx="10" fill="#0d2c23" />
      <rect x="132" y="245" width="36" height="60" rx="4" fill="#1a4a38" />
      <path d="M132 245 Q150 270 168 245" fill="#0d2c23" stroke="#3E9484" strokeWidth="0.8" />
      <rect x="138" y="215" width="24" height="30" rx="6" fill="#c8a882" />
      <ellipse cx="150" cy="185" rx="52" ry="60" fill="#c8a882" />
      <path d="M98 170 Q100 120 150 115 Q200 120 202 170 Q195 145 185 140 Q170 130 150 128 Q130 130 115 140 Q105 145 98 170Z" fill="#2c1a0a" />
      <path d="M98 170 Q93 195 95 210 Q97 195 102 185Z" fill="#2c1a0a" />
      <path d="M202 170 Q207 195 205 210 Q203 195 198 185Z" fill="#2c1a0a" />
      <ellipse cx="98" cy="190" rx="8" ry="11" fill="#c0997a" />
      <ellipse cx="202" cy="190" rx="8" ry="11" fill="#c0997a" />
      <ellipse cx="98" cy="190" rx="4" ry="7" fill="#b8876a" />
      <ellipse cx="202" cy="190" rx="4" ry="7" fill="#b8876a" />
      <ellipse cx="132" cy="188" rx="11" ry="7" fill="white" />
      <ellipse cx="168" cy="188" rx="11" ry="7" fill="white" />
      <circle cx="134" cy="189" r="5" fill="#2c1a0a" />
      <circle cx="170" cy="189" r="5" fill="#2c1a0a" />
      <circle cx="135.5" cy="187.5" r="1.5" fill="white" />
      <circle cx="171.5" cy="187.5" r="1.5" fill="white" />
      <path d="M122 179 Q132 175 142 178" stroke="#2c1a0a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M158 178 Q168 175 178 179" stroke="#2c1a0a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M147 195 Q143 210 148 214 Q152 216 157 214 Q162 210 153 195" fill="#be9070" stroke="#be9070" strokeWidth="0.5" />
      <path d="M138 228 Q150 236 162 228" stroke="#8B5E42" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="150" cy="228" rx="32" ry="12" fill="#b8876a" opacity="0.25" />
      <rect x="60" y="248" width="42" height="18" rx="9" fill="#0d2c23" />
      <rect x="55" y="255" width="18" height="36" rx="9" fill="#c8a882" />
      <ellipse cx="64" cy="290" rx="9" ry="10" fill="#c8a882" />
      <rect x="198" y="248" width="42" height="18" rx="9" fill="#0d2c23" />
      <rect x="227" y="255" width="18" height="36" rx="9" fill="#c8a882" />
      <ellipse cx="236" cy="290" rx="9" ry="10" fill="#c8a882" />
      <rect x="118" y="182" width="28" height="18" rx="5" fill="none" stroke="#3E9484" strokeWidth="1.8" opacity="0.8" />
      <rect x="154" y="182" width="28" height="18" rx="5" fill="none" stroke="#3E9484" strokeWidth="1.8" opacity="0.8" />
      <line x1="146" y1="191" x2="154" y2="191" stroke="#3E9484" strokeWidth="1.8" opacity="0.8" />
      <line x1="107" y1="191" x2="118" y2="191" stroke="#3E9484" strokeWidth="1.5" opacity="0.6" />
      <line x1="182" y1="191" x2="194" y2="191" stroke="#3E9484" strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="90" cy="160" rx="60" ry="80" fill="#3E9484" opacity="0.06" />
      <rect x="70" y="345" width="160" height="24" rx="6" fill="rgba(62,148,132,0.15)" stroke="rgba(62,148,132,0.3)" strokeWidth="1" />
      <text x="150" y="362" textAnchor="middle" fill="#53B3A2" fontSize="11" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">
        ABDULLAH — DESIGNER
      </text>
    </svg>
  )
}

function SkillBar({ name, level, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: '#F4F4F4' }}>{name}</span>
        <span className="text-xs font-semibold" style={{ color: '#53B3A2' }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(62,148,132,0.15)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: '#3E9484' }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(62,148,132,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#3E9484' }}>
            03 — ABOUT
          </p>
          <h2
            className="font-extrabold leading-tight"
            style={{ color: '#F4F4F4', fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
          >
            The designer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(62,148,132,0.2)',
                boxShadow: '0 0 60px rgba(62,148,132,0.1)',
              }}
            >
              <DesignerAvatar />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 -right-3 sm:-right-5 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl"
              style={{
                backgroundColor: '#121212',
                border: '1px solid rgba(62,148,132,0.3)',
                boxShadow: '0 0 30px rgba(62,148,132,0.15)',
              }}
            >
              <div className="flex items-center gap-3">
                <Award size={20} style={{ color: '#3E9484' }} />
                <div>
                  <div className="font-extrabold text-lg leading-none" style={{ color: '#F4F4F4' }}>8+</div>
                  <div className="text-xs mt-0.5" style={{ color: '#8A9A96' }}>Years Experience</div>
                </div>
              </div>
            </motion.div>
            <div
              className="absolute -top-3 -left-3 w-16 h-16 rounded-tl-2xl pointer-events-none"
              style={{ border: '2px solid rgba(62,148,132,0.4)', borderRight: 'none', borderBottom: 'none' }}
            />
          </motion.div>

          {/* Right — Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 lg:mt-0"
          >
            {/* availability pill — matches reference */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: 'rgba(62,148,132,0.12)', border: '1px solid rgba(62,148,132,0.3)', color: '#53B3A2' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                Available for Projects
              </span>
            </div>

            <h3
              className="font-extrabold mb-6 leading-tight"
              style={{ color: '#F4F4F4', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
            >
              Designing with{' '}
              <span style={{ color: '#53B3A2' }}>purpose</span>,<br />
              crafting with{' '}
              <span style={{ color: '#53B3A2' }}>passion</span>.
            </h3>

            <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: '#8A9A96' }}>
              I&apos;m Abdullah Beshary, a Visual & Graphic Designer with 8+ years of experience
              helping brands find their visual voice. From startups to global companies, I turn
              complex ideas into clear, compelling design systems.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-10" style={{ color: '#8A9A96' }}>
              My work lives at the intersection of strategy and aesthetics — whether it&apos;s a full
              brand identity, a product interface, or a print campaign that stops people mid-scroll.
            </p>

            {/* Skill Tags */}
            <div className="mb-10">
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#53B3A2' }}>
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      backgroundColor: 'rgba(62,148,132,0.1)',
                      border: '1px solid rgba(62,148,132,0.25)',
                      color: '#F4F4F4',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Bars */}
            <div className="mb-10">
              <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#53B3A2' }}>
                Proficiency
              </h4>
              {tools.map((tool, i) => (
                <SkillBar key={tool.name} name={tool.name} level={tool.level} index={i} />
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-80 hover:scale-105"
              style={{ backgroundColor: '#3E9484', color: '#F4F4F4' }}
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
