import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-accent font-bold text-lg tracking-tight">
          &lt; Shrinidhi Upadhyaya /&gt;
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-muted hover:text-accent transition-colors duration-200 text-sm font-mono"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-accent text-accent text-sm font-mono rounded-lg hover:bg-accent hover:text-bg transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-muted hover:text-accent" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg2 border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-accent transition-colors font-mono text-sm"
            >
              {link}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-mono text-sm border border-accent px-4 py-2 rounded-lg text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}