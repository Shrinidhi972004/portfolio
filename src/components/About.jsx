import { MapPin, GraduationCap, Briefcase, Terminal } from 'lucide-react'

const facts = [
  { icon: MapPin, label: 'Location', value: 'Mangaluru, Karnataka' },
  { icon: GraduationCap, label: 'Degree', value: 'B.E. Information Science, 2025' },
  { icon: Briefcase, label: 'Previous Work Role', value: 'DevOps Engineer Intern @ OrbitIQ Labs' },
  { icon: Terminal, label: 'Focus', value: 'Cloud Infrastructure, SRE, GitOps' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left — text */}
        <div>
          <p className="font-mono text-accent text-sm mb-3">01. about_me</p>
          <h2 className="section-title mb-6">
            I break things in <span className="gradient-text">staging</span>,<br />
            so prod stays alive.
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I'm a final-year Information Science student from Mangaluru, Karnataka, currently interning as a DevOps Engineer at OrbitIQ Labs. I'm obsessed with building infrastructure that is resilient, observable, and fully automated.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I built a production-grade DevOps/SRE portfolio project from scratch on AWS — running Google's Online Boutique microservices app across a full GitOps pipeline with Helm, ArgoCD, Terraform, and kube-prometheus-stack. Real incidents. Real fixes. Real learning.
          </p>
          <p className="text-muted leading-relaxed">
            I'm actively looking for Cloud DevOps and SRE roles — remote or Bengaluru-based. If you want someone who has debugged a CrashLoopBackOff at midnight, I'm your guy.
          </p>
        </div>

        {/* Right — fact cards */}
        <div className="grid grid-cols-1 gap-4">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-muted text-xs font-mono mb-0.5">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            </div>
          ))}

          {/* Open to work badge */}
          <div className="card p-5 border-accent/30 bg-accent/5">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
              <p className="text-accent font-mono text-sm font-bold">Open to Work</p>
            </div>
            <p className="text-muted text-xs mt-2 font-mono">
              Actively seeking DevOps / SRE internships & full-time roles
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}