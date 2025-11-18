import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, Mail, ArrowRight, CheckCircle2, TrendingUp, Code2, Palette, PlayCircle } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
          <span className="font-semibold tracking-tight text-white text-lg">zhurme</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#work" className="hover:text-white transition">Case Studies</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-white text-black hover:bg-white/90 transition">
          <Mail className="h-4 w-4" /> Start a project
        </a>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black via-black to-[#0a0a0a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 pt-28 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-white max-w-3xl"
        >
          Digital marketing that makes noise — and converts.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl"
        >
          Zhurme is a playful, performance-obsessed studio crafting interactive stories and measurable growth for modern brands.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black hover:bg-white/90">
            <Sparkles className="h-5 w-5" /> Get a proposal
          </a>
          <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10">
            <PlayCircle className="h-5 w-5" /> See our work
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Services({ services }) {
  const icons = {
    'trending-up': TrendingUp,
    'code-2': Code2,
    'sparkles': Sparkles,
    'palette': Palette,
  }
  return (
    <section id="services" className="relative bg-[#0a0a0a] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">Full-stack growth services</h2>
            <p className="mt-4 text-white/60 max-w-xl">Strategy, creative, and engineering under one roof. We obsess over the craft and the conversion.</p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = icons[s.icon] || Sparkles
            return (
              <motion.div key={idx} whileHover={{ y: -6 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white text-black grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                </div>
                <p className="mt-4 text-white/70">{s.description}</p>
                <ul className="mt-5 space-y-2 text-white/70">
                  {s.highlights?.map((h, i) => (
                    <li className="flex items-center gap-2" key={i}><CheckCircle2 className="h-4 w-4 text-white/60" /> <span>{h}</span></li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CaseStudies({ studies }) {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(192,132,252,0.1),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">Selected case studies</h2>
            <p className="mt-4 text-white/60 max-w-xl">Interactive stories backed by numbers. Here are a few of our favorite builds.</p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((c, idx) => (
            <motion.a
              key={idx}
              href={c.url || '#'}
              whileHover={{ y: -6 }}
              className="group rounded-xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-fuchsia-400/20 to-cyan-400/20" />
              <div className="p-6">
                <div className="text-sm text-white/60">{c.client}</div>
                <h3 className="mt-1 text-xl font-semibold text-white group-hover:underline underline-offset-4">{c.title}</h3>
                <p className="mt-2 text-white/70">{c.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.impact?.map((i, k) => (
                    <span key={k} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/70">{i}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArtisticSections() {
  return (
    <section className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ rotate: -1, y: -6 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10 p-8">
            <h3 className="text-white text-2xl font-semibold">Playful by design</h3>
            <p className="mt-3 text-white/70">Micro-interactions, motion, and texture that invite exploration without slowing performance.</p>
          </motion.div>
          <motion.div whileHover={{ rotate: 1, y: -6 }} className="rounded-2xl border border-white/10 bg-gradient-to-tl from-emerald-400/10 to-blue-400/10 p-8">
            <h3 className="text-white text-2xl font-semibold">Engineered for speed</h3>
            <p className="mt-3 text-white/70">Accessibility-first, SEO-smart, and analytics-obsessed. Beauty with backbone.</p>
          </motion.div>
          <motion.div whileHover={{ rotate: -1, y: -6 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400/10 to-rose-400/10 p-8">
            <h3 className="text-white text-2xl font-semibold">Performance that compounds</h3>
            <p className="mt-3 text-white/70">Clear goals, ruthless testing, and continuous iteration to turn attention into revenue.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [status, setStatus] = useState({ type: '', text: '' })
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', text: '' })
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus({ type: 'success', text: data.message })
      setForm({ name: '', email: '', company: '', budget: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', text: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">Let's build something that moves people</h2>
        <p className="mt-4 text-white/70 text-center">Tell us a bit about your goals. We'll get back within one business day.</p>
        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" required className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="company" value={form.company} onChange={onChange} placeholder="Company (optional)" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input name="budget" value={form.budget} onChange={onChange} placeholder="Budget range" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
          </div>
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Project details" required rows="5" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <button disabled={loading} className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white text-black hover:bg-white/90 disabled:opacity-60">
            {loading ? 'Sending…' : 'Send message'} <ArrowRight className="h-4 w-4" />
          </button>
          {status.text && (
            <div className={`mt-2 text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>{status.text}</div>
          )}
        </form>
      </div>
    </section>
  )
}

export default function App() {
  const [services, setServices] = useState([])
  const [studies, setStudies] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const s = await fetch(`${API_BASE}/services`).then(r => r.json())
        const c = await fetch(`${API_BASE}/case-studies`).then(r => r.json())
        setServices(s)
        setStudies(c)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services services={services} />
      <CaseStudies studies={studies} />
      <ArtisticSections />
      <Contact />
      <footer className="py-12 border-t border-white/10 bg-black/60 text-center text-white/50">© {new Date().getFullYear()} zhurme — Built with love and caffeine.</footer>
    </div>
  )
}
