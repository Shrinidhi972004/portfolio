import { Briefcase, Calendar, MapPin, FlaskConical } from 'lucide-react'

const experiences = [
  {
    role: 'Trainee Software Engineer Intern',
    company: 'Sahynex Techsolutions Pvt Ltd',
    sub: 'Supporting OrbitIQ Labs (R&D startup backed by Sahynex)',
    duration: 'Jan 2026 — Apr 2026',
    location: 'Remote',
    type: 'Internship',
    color: 'border-accent2',
    badge: 'bg-accent2/10 text-accent2 border-accent2/20',
    points: [
      'Worked on MLOps pipelines — managing the lifecycle of LLM-based models from experimentation to deployment.',
      'Involved in data preprocessing, model versioning, and building reproducible ML workflows.',
      'Contributed to OrbitIQ Labs — an R&D startup backed by Sahynex — focusing on DevOps and cloud infrastructure work.',
      'Built and maintained AWS S3 data pipelines for automated ingestion and processing workflows.',
      'Configured Application Load Balancer (ALB) with Auto Scaling Groups for high availability deployments on AWS.',
    ],
    stack: ['Python', 'LLMs', 'MLOps', 'AWS S3', 'ALB', 'Auto Scaling', 'EC2', 'IAM'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-6xl mx-auto">
      <p className="font-mono text-accent text-sm mb-3">04. experience</p>
      <h2 className="section-title mb-2">
        Where I've <span className="gradient-text">shipped things</span>
      </h2>
      <p className="text-muted font-mono text-sm mb-12">Real work. Real impact.</p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 ml-5 hidden md:block" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="md:pl-16 relative">
              <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-bg2 border border-accent2/30 items-center justify-center hidden md:flex">
                <Briefcase size={16} className="text-accent2" />
              </div>

              <div className={`card p-6 border-l-2 ${exp.color}`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-accent2 font-mono text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${exp.badge}`}>
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-3 text-muted text-xs font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <FlaskConical size={13} className="text-accent shrink-0" />
                  <p className="text-accent text-xs font-mono">{exp.sub}</p>
                </div>

                <ul className="flex flex-col gap-2 mb-5">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-muted text-sm leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0 font-mono text-xs">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-bg3 border border-white/5 text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}