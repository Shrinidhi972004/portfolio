import { Mail, GitBranch, ExternalLink, MapPin, Send } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shrinidhiupadhyaya00@gmail.com',
    href: 'mailto:shrinidhiupadhyaya00@gmail.com',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20 hover:border-accent/50',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/Shrinidhi972004',
    href: 'https://github.com/Shrinidhi972004',
    color: 'text-accent2',
    bg: 'bg-accent2/10 border-accent2/20 hover:border-accent2/50',
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shrinidhi upadhyaya',
    href: 'https://www.linkedin.com/in/shrinidhi-upadhyaya-82114a26a/',
    color: 'text-accent3',
    bg: 'bg-accent3/10 border-accent3/20 hover:border-accent3/50',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto">
      <p className="font-mono text-accent text-sm mb-3">06. contact</p>
      <h2 className="section-title mb-2">
        Let's <span className="gradient-text">work together</span>
      </h2>
      <p className="text-muted font-mono text-sm mb-12">
        Open to DevOps / SRE roles — remote or Bengaluru-based.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Left — CTA */}
        <div>
          <p className="text-muted leading-relaxed mb-6">
            I'm actively looking for Cloud DevOps and SRE internships or full-time roles. If you're building reliable infrastructure and need someone who ships fast and debugs faster — let's talk.
          </p>

          <div className="flex items-center gap-2 text-muted text-sm font-mono mb-8">
            <MapPin size={14} className="text-accent" />
            Mangaluru, Karnataka · Open to Remote & Bengaluru
          </div>

          {/* Status */}
          <div className="card p-5 border-accent/20 bg-accent/5 inline-flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
            <div>
              <p className="text-accent font-mono text-sm font-bold">Available for Opportunities</p>
              <p className="text-muted text-xs font-mono mt-0.5">Usually responds within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Right — links */}
        <div className="flex flex-col gap-4">
          {links.map(({ icon: Icon, label, value, href, color, bg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card p-5 border flex items-center gap-4 transition-all duration-200 ${bg}`}
            >
              <div className="w-10 h-10 rounded-lg bg-bg3 flex items-center justify-center shrink-0">
                <Icon size={18} className={color} />
              </div>
              <div className="min-w-0">
                <p className={`font-mono text-xs mb-0.5 ${color}`}>{label}</p>
                <p className="text-sm font-semibold truncate">{value}</p>
              </div>
              <Send size={14} className="text-muted ml-auto shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-muted text-xs">
          &lt;built by shrinidhi /&gt; · 2025
        </p>
        <p className="font-mono text-muted text-xs">
          React · Vite · Tailwind · Framer Motion
        </p>
      </div>
    </section>
  )
}