import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, GraduationCap, Certificate, FolderGit2, Download, Menu, X } from 'lucide-react'

// === YOUR DETAILS (EDIT ME) ===
const YOUR_NAME = 'Prakhar Pathak'
const TAGLINE = 'Engineer • IoT & Computer Vision • Problem Solver'
const SUMMARY = `I build practical, end‑to‑end systems across embedded, AI, and web — from Raspberry Pi telemetry to real‑time
road‑condition analytics. I love shipping fast and iterating smarter.`

const CONTACT_EMAIL = 'youremail@example.com' // changes the mailto link
const CONTACT_PHONE = '+91-98XXXXXX00' // optional
const CONTACT_LOCATION = 'India' // city, country

const SOCIALS = [
  { label: 'GitHub', icon: <Github size={18} />, href: 'https://github.com/your-username' },
  { label: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/your-handle' },
]

// === EDUCATION (EDIT ME) ===
const education = [
  {
    title: 'Class 10 (CBSE)',
    school: 'Your School Name',
    year: 'YYYY',
    imageUrl: '/images/edu-10th.jpg',
    note: 'Percentage/CGPA: 9.X CGPA',
  },
  {
    title: 'Class 12 (Science)',
    school: 'Your School Name',
    year: 'YYYY',
    imageUrl: '/images/edu-12th.jpg',
    note: 'Percentage: 9X% (PCM)',
  },
  {
    title: 'B.Tech (CSE/ECE/EEE, etc.)',
    school: 'Your College/University',
    year: 'YYYY',
    imageUrl: '/images/edu-grad.jpg',
    note: 'CGPA: X.XX / 10',
  },
]

// === CERTIFICATIONS (EDIT ME) ===
const certifications = [
  { title: 'Google Cloud Digital Leader', org: 'Google Cloud', year: '2025', proofUrl: '#' },
  { title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', year: '2024', proofUrl: '#' },
  { title: 'YOLOv8 Computer Vision', org: 'Ultralytics – Course', year: '2024', proofUrl: '#' },
  { title: 'Raspberry Pi + IoT Fundamentals', org: 'Raspberry Pi Foundation', year: '2023', proofUrl: '#' },
]

// === PROJECTS (EDIT ME) ===
const projects = [
  {
    title: 'IntelliRoad — Smart Road Monitoring',
    blurb:
      'Raspberry Pi + camera + GPS + accelerometer pipeline that detects potholes, road damage, and unsafe driving behaviors; live dashboard on Firebase.',
    imageUrl: '/images/projects/intelliroad.jpg',
    stack: ['Raspberry Pi', 'YOLOv8', 'Firebase', 'Python', 'React'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Pneumonia Prediction',
    blurb:
      'Deep learning classifier on chest X‑rays; data cleaning, augmentation, Grad‑CAM explainability, and a simple web app.',
    imageUrl: '/images/projects/pneumonia.jpg',
    stack: ['PyTorch', 'FastAPI', 'React'],
    links: [
      { label: 'Paper', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Smart Evaluate',
    blurb:
      'Auto‑grading and rubric alignment using NLP; exports analytics for instructors.',
    imageUrl: '/images/projects/smartevaluate.jpg',
    stack: ['Python', 'spaCy', 'Streamlit'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
]

// === UTILITIES ===
const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
)

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const Badge = ({ children }) => (
  <span className='inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium'>
    {children}
  </span>
)

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border shadow-sm bg-white/70 dark:bg-zinc-900/70 backdrop-blur ${className}`}>{children}</div>
)

const CardMedia = ({ src, alt }) => (
  <div className='relative aspect-video w-full overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-zinc-800'>
    <img src={src} alt={alt} className='h-full w-full object-cover' />
  </div>
)

const NavLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className='rounded-xl px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800'
  >
    {label}
  </a>
)

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false)
  useMemo(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
      const shouldDark = stored ? stored === 'dark' : prefers
      document.documentElement.classList.toggle('dark', shouldDark)
      setIsDark(shouldDark)
    }
  }, [])
  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
    }
  }
  return { isDark, toggle }
}

export default function App() {
  const { isDark, toggle } = useDarkMode()
  const [navOpen, setNavOpen] = useState(false)

  const handleMail = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Portfolio inquiry')
    const body = encodeURIComponent('Hi Prakhar,\n\nI saw your portfolio and would like to connect about ...\n\nThanks,\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100'>
      {/* Header */}
      <header className='sticky top-0 z-40 border-b bg-white/70 backdrop-blur dark:bg-zinc-950/60'>
        <Container className='flex items-center justify-between py-3'>
          <div className='flex items-center gap-3'>
            <div className='h-9 w-9 rounded-2xl bg-zinc-900 dark:bg-white' />
            <div className='flex flex-col leading-tight'>
              <span className='text-sm text-zinc-500 dark:text-zinc-400'>Portfolio</span>
              <span className='font-semibold'>{YOUR_NAME}</span>
            </div>
          </div>
          {/* Desktop nav */}
          <nav className='hidden items-center gap-1 md:flex'>
            {navItems.map((n) => (
              <NavLink key={n.href} href={n.href} label={n.label} />
            ))}
            <button
              onClick={toggle}
              className='ml-2 rounded-xl border px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800'
              aria-label='Toggle theme'
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
          </nav>

          {/* Mobile */}
          <div className='md:hidden flex items-center gap-2'>
            <button
              onClick={toggle}
              className='rounded-xl border p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              aria-label='Toggle theme'
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setNavOpen((v) => !v)}
              className='rounded-xl border p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              aria-label='Open navigation'
            >
              {navOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>
        {navOpen && (
          <div className='border-b bg-white/80 backdrop-blur dark:bg-zinc-950/70 md:hidden'>
            <Container className='flex flex-col gap-1 py-2'>
              {navItems.map((n) => (
                <NavLink key={n.href} href={n.href} label={n.label} onClick={() => setNavOpen(false)} />
              ))}
            </Container>
          </div>
        )}
      </header>

      {/* Hero / About */}
      <Section id='about' className='py-14 sm:py-20'>
        <Container>
          <div className='grid grid-cols-1 items-center gap-10 md:grid-cols-5'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='md:col-span-3'
            >
              <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                Hi, I'm {YOUR_NAME}
              </h1>
              <p className='mt-2 text-lg text-zinc-600 dark:text-zinc-300'>{TAGLINE}</p>
              <p className='mt-4 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300'>{SUMMARY}</p>
              <div className='mt-6 flex flex-wrap items-center gap-3'>
                <a
                  href='#projects'
                  className='inline-flex items-center gap-2 rounded-2xl border px-4 py-2 font-medium hover:shadow'
                >
                  <FolderGit2 size={16} /> View Projects
                </a>
                <a
                  href='/Prakhar-Resume.pdf'
                  className='inline-flex items-center gap-2 rounded-2xl border px-4 py-2 font-medium hover:shadow'
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
              <div className='mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300'>
                <div className='inline-flex items-center gap-2'><Mail size={16} /> {CONTACT_EMAIL}</div>
                {CONTACT_PHONE && (
                  <div className='inline-flex items-center gap-2'><Phone size={16} /> {CONTACT_PHONE}</div>
                )}
                <div className='inline-flex items-center gap-2'><MapPin size={16} /> {CONTACT_LOCATION}</div>
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target='_blank' className='inline-flex items-center gap-2 hover:underline' rel='noreferrer'>
                    {s.icon} <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='md:col-span-2'
            >
              <Card>
                <div className='relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 p-2'>
                  <div className='flex h-full w-full items-center justify-center rounded-xl border'>
                    <span className='text-sm text-zinc-500'>Your Photo</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Education */}
      <Section id='education' className='py-10 sm:py-16'>
        <Container>
          <div className='mb-6 flex items-center gap-3'>
            <GraduationCap />
            <h2 className='text-2xl font-semibold'>Education</h2>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {education.map((e, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className='overflow-hidden'>
                  <CardMedia src={e.imageUrl} alt={`${e.title} proof`} />
                  <div className='p-4'>
                    <h3 className='text-lg font-semibold'>{e.title}</h3>
                    <p className='mt-1 text-sm text-zinc-600 dark:text-zinc-300'>{e.school}</p>
                    <div className='mt-2 flex items-center justify-between text-sm'>
                      <Badge>{e.year}</Badge>
                      <span className='text-zinc-500'>{e.note}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section id='certifications' className='py-10 sm:py-16'>
        <Container>
          <div className='mb-6 flex items-center gap-3'>
            <Certificate />
            <h2 className='text-2xl font-semibold'>Certifications</h2>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {certifications.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className='p-5'>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <h3 className='font-semibold'>{c.title}</h3>
                      <p className='mt-1 text-sm text-zinc-600 dark:text-zinc-300'>{c.org}</p>
                    </div>
                    <Badge>{c.year}</Badge>
                  </div>
                  <div className='mt-4'>
                    <a href={c.proofUrl} target='_blank' className='inline-flex items-center gap-2 text-sm font-medium hover:underline' rel='noreferrer'>
                      View Credential <ExternalLink size={14} />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects */}
      <Section id='projects' className='py-10 sm:py-16'>
        <Container>
          <div className='mb-6 flex items-center gap-3'>
            <FolderGit2 />
            <h2 className='text-2xl font-semibold'>Projects</h2>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {projects.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className='overflow-hidden'>
                  <CardMedia src={p.imageUrl} alt={`${p.title} preview`} />
                  <div className='p-4'>
                    <h3 className='text-lg font-semibold'>{p.title}</h3>
                    <p className='mt-2 text-sm text-zinc-700 dark:text-zinc-300'>{p.blurb}</p>
                    <div className='mt-3 flex flex-wrap gap-2'>
                      {p.stack.map((s, i) => (
                        <Badge key={i}>{s}</Badge>
                      ))}
                    </div>
                    <div className='mt-4 flex items-center gap-4'>
                      {p.links.map((l, i) => (
                        <a key={i} href={l.href} target='_blank' className='inline-flex items-center gap-2 text-sm font-medium hover:underline' rel='noreferrer'>
                          {l.label} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section id='contact' className='py-10 sm:py-16'>
        <Container>
          <div className='mb-6 flex items-center gap-3'>
            <Mail />
            <h2 className='text-2xl font-semibold'>Contact</h2>
          </div>
          <Card className='p-6'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div>
                <p className='text-zinc-700 dark:text-zinc-300'>
                  Want to collaborate or discuss an opportunity? Reach out directly or drop a message using the quick form.
                </p>
                <div className='mt-4 space-y-2 text-sm'>
                  <div className='inline-flex items-center gap-2'><Mail size={16} /> {CONTACT_EMAIL}</div>
                  {CONTACT_PHONE && (
                    <div className='inline-flex items-center gap-2'><Phone size={16} /> {CONTACT_PHONE}</div>
                  )}
                  <div className='inline-flex items-center gap-2'><MapPin size={16} /> {CONTACT_LOCATION}</div>
                </div>
              </div>
              <form onSubmit={handleMail} className='space-y-3'>
                <div>
                  <label className='mb-1 block text-sm font-medium'>Your Name</label>
                  <input className='w-full rounded-xl border px-3 py-2 outline-none focus:ring' placeholder='Enter your name' />
                </div>
                <div>
                  <label className='mb-1 block text-sm font-medium'>Email</label>
                  <input type='email' className='w-full rounded-xl border px-3 py-2 outline-none focus:ring' placeholder='Enter your email' />
                </div>
                <div>
                  <label className='mb-1 block text-sm font-medium'>Message</label>
                  <textarea rows={4} className='w-full rounded-xl border px-3 py-2 outline-none focus:ring' placeholder='Write your message' />
                </div>
                <button type='submit' className='w-full rounded-2xl border px-4 py-2 font-medium hover:shadow'>
                  Send Message
                </button>
              </form>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Footer */}
      <footer className='border-t py-8'>
        <Container className='flex flex-col items-center justify-between gap-3 text-sm md:flex-row'>
          <p>© {new Date().getFullYear()} {YOUR_NAME}. All rights reserved.</p>
          <div className='flex items-center gap-4'>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target='_blank' className='inline-flex items-center gap-2 hover:underline' rel='noreferrer'>
                {s.icon} <span>{s.label}</span>
              </a>
            ))}
          </div>
        </Container>
      </footer>
    </div>
  )
}
