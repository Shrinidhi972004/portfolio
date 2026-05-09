import { Trophy, Award, Star } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'DevHost 2025 Winner',
    org: 'DevHost Hackathon',
    year: '2025',
    desc: 'Won DevHost 2025 — a competitive hackathon challenging participants to build and ship real technical solutions under time pressure.',
    color: 'text-accent3',
    bg: 'bg-accent3/10 border-accent3/20',
    iconBg: 'bg-accent3/10',
  },
  {
    icon: Award,
    title: 'B.E. Information Science',
    org: 'Graduating 2025',
    year: '2021 — 2025',
    desc: 'Final-year engineering student with a focus on cloud computing, DevOps, and distributed systems throughout the degree.',
    color: 'text-accent2',
    bg: 'bg-accent2/10 border-accent2/20',
    iconBg: 'bg-accent2/10',
  },
  {
    icon: Star,
    title: 'Production-Grade Portfolio',
    org: 'Self-Initiated',
    year: '2025',
    desc: 'Built a full 4-phase DevOps/SRE project on AWS from scratch — Helm, ArgoCD, Terraform, Prometheus — with real incident documentation.',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
    iconBg: 'bg-accent/10',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 max-w-6xl mx-auto">
      <p className="font-mono text-accent text-sm mb-3">05. achievements</p>
      <h2 className="section-title mb-2">
        Things I'm <span className="gradient-text">proud of</span>
      </h2>
      <p className="text-muted font-mono text-sm mb-12">Outside of keeping infra alive.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map(({ icon: Icon, title, org, year, desc, color, bg, iconBg }) => (
          <div key={title} className={`card p-6 border ${bg} flex flex-col gap-4`}>
            <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>
              <Icon size={22} className={color} />
            </div>
            <div>
              <p className={`font-mono text-xs mb-1 ${color}`}>{org} · {year}</p>
              <h3 className="font-bold text-base mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}