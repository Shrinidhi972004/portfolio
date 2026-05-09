import { useEffect, useState } from 'react'
import { ArrowDown, GitBranch, ExternalLink, Mail } from 'lucide-react'

const roles = [
  'DevOps Engineer',
  'SRE Enthusiast',
  'Cloud Infrastructure Engineer',
  'Kubernetes Wrangler',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24">
      <div className="max-w-3xl">
        <p className="font-mono text-accent text-sm mb-6">
          ~/portfolio $ whoami
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Shrinidhi
          <br />
          <span className="gradient-text">Upadhyaya</span>
        </h1>

        <div className="font-mono text-xl md:text-2xl text-muted mb-6">
          <span className="text-accent2">&gt; </span>
          <span>{displayed}</span>
          <span className="animate-blink text-accent">|</span>
        </div>

        <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
          I build resilient infrastructure, automate everything that moves, and keep systems alive at 3am so you don't have to.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-bg font-bold rounded-lg hover:bg-accent/90 transition-all duration-200 text-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/10 text-muted hover:border-accent hover:text-accent rounded-lg transition-all duration-200 text-sm font-mono"
          >
            Get in Touch
          </a>

          <div className="flex items-center gap-4 ml-2">
            <a href="https://github.com/Shrinidhi972004" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <GitBranch size={20} />
            </a>
            <a href="https://linkedin.com/in/shrinidhi-kulkarni" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <ExternalLink size={20} />
            </a>
            <a href="mailto:shrinidhi@example.com" className="text-muted hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          {[
            { label: 'Projects Shipped', value: '5' },
            { label: 'Real Incidents Resolved', value: '3+' },
            { label: 'AWS Services Used', value: '10+' },
            { label: 'Hackathons Won', value: '1' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-accent">{stat.value}</p>
              <p className="text-muted text-xs font-mono mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 flex justify-start">
        <a href="#about" className="text-muted hover:text-accent transition-colors animate-bounce">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  )
}