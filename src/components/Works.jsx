import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Verdant — Brand Identity',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Strategy'],
    color: '#1a3d32',
    accent: '#3E9484',
    pattern: 'brand',
  },
  {
    id: 2,
    title: 'Luminary — Web Design',
    category: 'Web Design',
    tags: ['UI/UX', 'Figma', 'Responsive'],
    color: '#1a1a2e',
    accent: '#6366f1',
    pattern: 'web',
  },
  {
    id: 3,
    title: 'Eclipse — Poster Art',
    category: 'Poster Art',
    tags: ['Illustration', 'Typography'],
    color: '#2a1a0e',
    accent: '#f59e0b',
    pattern: 'poster',
  },
  {
    id: 4,
    title: 'Neon Pulse — Packaging',
    category: 'Packaging',
    tags: ['Print', 'Mockup', '3D'],
    color: '#1a0a2e',
    accent: '#a855f7',
    pattern: 'package',
  },
  {
    id: 5,
    title: 'Atlas — App Interface',
    category: 'UI/UX Design',
    tags: ['Mobile', 'Interaction', 'Figma'],
    color: '#0a1a2e',
    accent: '#0ea5e9',
    pattern: 'app',
  },
  {
    id: 6,
    title: 'Bloom — Editorial',
    category: 'Editorial Design',
    tags: ['Layout', 'Typography', 'Print'],
    color: '#1a0a1a',
    accent: '#ec4899',
    pattern: 'editorial',
  },
]

function ProjectThumbnail({ project }) {
  const icons = {
    brand: (
      <g>
        <circle cx="80" cy="75" r="38" fill="none" stroke={project.accent} strokeWidth="2.5" />
        <circle cx="80" cy="75" r="22" fill={project.accent} opacity="0.15" />
        <path d="M65 75 L95 75 M80 60 L80 90" stroke={project.accent} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="80" cy="75" r="6" fill={project.accent} />
        <text x="80" y="128" textAnchor="middle" fill={project.accent} fontSize="9" fontFamily="sans-serif" opacity="0.6" letterSpacing="3">VERDANT</text>
      </g>
    ),
    web: (
      <g>
        <rect x="30" y="45" width="100" height="70" rx="6" fill="none" stroke={project.accent} strokeWidth="2" />
        <rect x="30" y="45" width="100" height="14" rx="6" fill={project.accent} opacity="0.2" />
        <rect x="38" y="70" width="40" height="4" rx="2" fill={project.accent} opacity="0.5" />
        <rect x="38" y="80" width="60" height="3" rx="1.5" fill={project.accent} opacity="0.3" />
        <rect x="38" y="89" width="50" height="3" rx="1.5" fill={project.accent} opacity="0.3" />
        <rect x="38" y="98" width="35" height="8" rx="4" fill={project.accent} opacity="0.7" />
        <circle cx="41" cy="52" r="2" fill={project.accent} />
        <circle cx="49" cy="52" r="2" fill={project.accent} opacity="0.5" />
        <circle cx="57" cy="52" r="2" fill={project.accent} opacity="0.3" />
      </g>
    ),
    poster: (
      <g>
        <rect x="45" y="30" width="70" height="100" rx="4" fill="none" stroke={project.accent} strokeWidth="2" />
        <ellipse cx="80" cy="70" rx="22" ry="28" fill={project.accent} opacity="0.12" />
        <path d="M58 65 Q80 38 102 65" stroke={project.accent} strokeWidth="2" fill="none" />
        <path d="M58 75 Q80 48 102 75" stroke={project.accent} strokeWidth="1.5" fill="none" opacity="0.5" />
        <rect x="55" y="95" width="50" height="4" rx="2" fill={project.accent} opacity="0.6" />
        <rect x="62" y="104" width="36" height="3" rx="1.5" fill={project.accent} opacity="0.3" />
      </g>
    ),
    package: (
      <g>
        <path d="M80 35 L110 52 L110 88 L80 105 L50 88 L50 52 Z" fill="none" stroke={project.accent} strokeWidth="2" />
        <path d="M80 35 L80 105" stroke={project.accent} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
        <path d="M50 52 L110 52" stroke={project.accent} strokeWidth="1.5" opacity="0.4" />
        <circle cx="80" cy="70" r="8" fill={project.accent} opacity="0.3" />
        <circle cx="80" cy="70" r="4" fill={project.accent} opacity="0.7" />
      </g>
    ),
    app: (
      <g>
        <rect x="55" y="30" width="50" height="90" rx="10" fill="none" stroke={project.accent} strokeWidth="2" />
        <rect x="55" y="30" width="50" height="90" rx="10" fill={project.accent} opacity="0.05" />
        <rect x="65" y="50" width="30" height="20" rx="4" fill={project.accent} opacity="0.2" />
        <rect x="65" y="76" width="12" height="12" rx="3" fill={project.accent} opacity="0.5" />
        <rect x="82" y="76" width="12" height="12" rx="3" fill={project.accent} opacity="0.3" />
        <rect x="65" y="93" width="30" height="3" rx="1.5" fill={project.accent} opacity="0.3" />
        <rect x="70" y="38" width="20" height="3" rx="1.5" fill={project.accent} opacity="0.5" />
      </g>
    ),
    editorial: (
      <g>
        <rect x="35" y="35" width="90" height="90" rx="4" fill="none" stroke={project.accent} strokeWidth="2" />
        <rect x="35" y="35" width="42" height="90" fill={project.accent} opacity="0.08" />
        <rect x="42" y="45" width="28" height="36" rx="2" fill={project.accent} opacity="0.2" />
        <rect x="86" y="45" width="30" height="4" rx="2" fill={project.accent} opacity="0.5" />
        <rect x="86" y="54" width="22" height="3" rx="1.5" fill={project.accent} opacity="0.3" />
        <rect x="86" y="62" width="26" height="3" rx="1.5" fill={project.accent} opacity="0.3" />
        <rect x="86" y="70" width="18" height="3" rx="1.5" fill={project.accent} opacity="0.3" />
        <rect x="42" y="95" width="70" height="3" rx="1.5" fill={project.accent} opacity="0.3" />
        <rect x="42" y="103" width="50" height="3" rx="1.5" fill={project.accent} opacity="0.2" />
      </g>
    ),
  }

  return (
    <svg viewBox="0 0 160 140" className="w-full h-full">
      <rect width="160" height="140" fill={project.color} />
      <defs>
        <pattern id={`grid-${project.id}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke={project.accent} strokeWidth="0.3" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="160" height="140" fill={`url(#grid-${project.id})`} />
      {icons[project.pattern]}
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ backgroundColor: '#121212', border: '1px solid rgba(255,255,255,0.06)' }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className="relative overflow-hidden aspect-video">
        <ProjectThumbnail project={project} />
        <div
          className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ backgroundColor: 'rgba(10, 35, 28, 0.85)' }}
        >
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{ backgroundColor: '#3E9484', color: '#F4F4F4' }}
            aria-label={`View ${project.title}`}
          >
            <Eye size={14} /> Preview
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{ border: '1px solid rgba(62,148,132,0.5)', color: '#F4F4F4', backgroundColor: 'transparent' }}
            aria-label={`Open ${project.title}`}
          >
            <ExternalLink size={14} /> Open
          </button>
        </div>
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ backgroundColor: 'rgba(10,35,28,0.85)', color: '#53B3A2', border: '1px solid rgba(62,148,132,0.3)' }}
        >
          {project.category}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3
          className="font-bold text-base mb-3 transition-colors duration-200 group-hover:text-teal-300"
          style={{ color: '#F4F4F4' }}
        >
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{ backgroundColor: 'rgba(62,148,132,0.1)', color: '#8A9A96' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: '#3E9484' }}
      />
    </motion.div>
  )
}

export default function Works() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="works" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      <div
        className="absolute -right-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(62,148,132,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section label — matches reference style */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#3E9484' }}>
            02 — SELECTED WORK
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2
              className="font-extrabold leading-tight"
              style={{ color: '#F4F4F4', fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
            >
              Recent projects
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:opacity-70 whitespace-nowrap self-start sm:self-auto pb-0.5"
              style={{ color: '#3E9484', borderBottom: '1px solid rgba(62,148,132,0.4)' }}
            >
              View all <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
