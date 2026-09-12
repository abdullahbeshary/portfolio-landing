import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  const inputBase = {
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(62,148,132,0.2)',
    color: '#F4F4F4',
    borderRadius: '12px',
    padding: '14px 16px',
    fontSize: '14px',
    width: '100%',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  const contactInfo = [
    { icon: Mail,  label: 'Email',         value: 'hello@abdullahbeshary.design' },
    { icon: MapPin, label: 'Location',     value: 'Cairo, Egypt' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 sm:px-8 lg:px-24 relative overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(62,148,132,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#3E9484' }}>
            04 — CONTACT
          </p>
          <h2
            className="font-extrabold mb-4 leading-tight"
            style={{ color: '#F4F4F4', fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
          >
            Let&apos;s create something<br className="hidden sm:block" /> remarkable
          </h2>
          <p className="text-sm sm:text-base max-w-xl leading-relaxed" style={{ color: '#8A9A96' }}>
            Have a project in mind? Send me a message and let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: '#121212', border: '1px solid rgba(62,148,132,0.12)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(62,148,132,0.15)' }}
                >
                  <Icon size={18} style={{ color: '#3E9484' }} />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5 tracking-wider uppercase" style={{ color: '#8A9A96' }}>
                    {label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: '#F4F4F4' }}>{value}</div>
                </div>
              </div>
            ))}

            <div
              className="p-5 rounded-2xl"
              style={{ backgroundColor: 'rgba(62,148,132,0.08)', border: '1px solid rgba(62,148,132,0.25)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold" style={{ color: '#53B3A2' }}>
                  Available for Projects
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#8A9A96' }}>
                Currently taking on new freelance projects for Q4 2026. Let&apos;s chat!
              </p>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div
              className="p-6 sm:p-8 rounded-2xl"
              style={{
                backgroundColor: '#121212',
                border: '1px solid rgba(62,148,132,0.15)',
                boxShadow: '0 0 50px rgba(62,148,132,0.06)',
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(62,148,132,0.15)' }}
                  >
                    <CheckCircle size={32} style={{ color: '#3E9484' }} />
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: '#F4F4F4' }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: '#8A9A96' }}>
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 text-sm font-medium"
                    style={{ color: '#3E9484' }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold mb-2 tracking-wider uppercase" style={{ color: '#8A9A96' }}>
                        Your Name
                      </label>
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange}
                        placeholder="Alex Johnson" required style={inputBase} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold mb-2 tracking-wider uppercase" style={{ color: '#8A9A96' }}>
                        Email Address
                      </label>
                      <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="hello@yourcompany.com" required style={inputBase} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold mb-2 tracking-wider uppercase" style={{ color: '#8A9A96' }}>
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange}
                      placeholder="Brand Identity Project" required style={inputBase} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold mb-2 tracking-wider uppercase" style={{ color: '#8A9A96' }}>
                      Message
                    </label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and goals..."
                      required rows={5}
                      style={{ ...inputBase, resize: 'vertical', minHeight: '130px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-85 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#3E9484', color: '#F4F4F4' }}
                  >
                    {loading ? (
                      <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
