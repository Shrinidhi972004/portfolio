import { GitBranch, AlertTriangle, CheckCircle, Trophy } from 'lucide-react'

const imsHighlights = [
  'Go + Fiber backend handling 10,000 signals/sec with 20 goroutine worker pool',
  'Bounded channel queue (50k cap) with non-blocking TryEnqueue and backpressure at 3 levels',
  'Debounce: 100 signals → 1 WorkItem using sync.Map + Redis within a 10s window',
  'State machine: OPEN → INVESTIGATING → RESOLVED → CLOSED (RCA mandatory)',
  'Strategy pattern alerting: P0 → PagerDuty, P1 → Slack, P2 → Email',
  '4 databases: PostgreSQL (source of truth), MongoDB (audit log), Redis (cache), TimescaleDB (timeseries)',
  'Full EKS deployment: Terraform + Helm + ArgoCD GitOps + kube-prometheus-stack',
  '7 custom Prometheus metrics, Grafana dashboards, Slack alerting via Alertmanager',
  '18 unit tests passing with -race flag',
]

const srePhases = [
  {
    phase: 'Phase 1',
    title: 'Helm Chart Engineering',
    desc: 'Custom Helm chart for all 10 microservices with range-loop patterns, security contexts, HPA, and PodDisruptionBudgets.',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
  },
  {
    phase: 'Phase 2',
    title: 'GitOps with ArgoCD',
    desc: 'ArgoCD with automated sync, selfHeal, and prune policies. Full GitOps — git push triggers deployment.',
    color: 'text-accent2',
    bg: 'bg-accent2/10 border-accent2/20',
  },
  {
    phase: 'Phase 3',
    title: 'Terraform Infrastructure',
    desc: 'Modular Terraform: VPC, EKS, ECR modules. S3 + DynamoDB remote state backend with locking.',
    color: 'text-accent3',
    bg: 'bg-accent3/10 border-accent3/20',
  },
  {
    phase: 'Phase 4',
    title: 'Observability Stack',
    desc: 'kube-prometheus-stack with Prometheus, Grafana dashboards, Alertmanager, and kube-state-metrics.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10 border-pink-400/20',
  },
]

const incidents = [
  {
    title: 'CrashLoopBackOff — Missing Env Var',
    desc: 'Frontend service kept crashing. Root cause: missing SHOPPING_ASSISTANT_SERVICE_ADDR env var in Helm values. Fixed by tracing logs and patching the chart.',
  },
  {
    title: 'kube-state-metrics Liveness Probe Failure',
    desc: 'Port mismatch in v2.18.0 caused liveness probe to fail repeatedly. Identified as a regression bug, fixed by pinning to v2.13.0.',
  },
  {
    title: '674MB Terraform Binary Committed to Git',
    desc: 'Accidentally pushed the Terraform binary into the repo, bloating history. Cleaned up using git filter-branch and force pushed.',
  },
]

const otherProjects = [
  {
    title: 'Construction Site Safety AI',
    badge: 'DevHost 2025 Winner',
    badgeIcon: true,
    desc: 'Real-time PPE detection system using YOLOv8. Automated Twilio emergency calling, Flutter mobile sensor app, live Kubernetes deployment with SSL, Prometheus + Grafana observability.',
    stack: ['Python', 'YOLOv8', 'FastAPI', 'React', 'Flutter', 'Docker', 'Kubernetes', 'Prometheus', 'Twilio'],
    github: 'https://github.com/Shrinidhi972004/DevHost-2025-CodeMartials.git',
    live: 'https://codemartians.shrinidhi.space',
    highlights: [
      'YOLOv8 real-time PPE detection — helmets and safety vests',
      'Twilio automated emergency calling for P0 incidents',
      'Flutter mobile app for accelerometer and gyroscope sensor data',
      'Production live on Kubernetes with Let\'s Encrypt SSL + HPA',
      'Prometheus + Grafana monitoring stack deployed',
    ],
    color: 'text-accent3',
    bg: 'bg-accent3/10 border-accent3/20',
  },
  {
    title: 'Passwordless Authentication System',
    badge: 'Security + DevOps',
    badgeIcon: false,
    desc: 'A secure diary app eliminating passwords entirely using FIDO2/WebAuthn. Supports biometrics, YubiKey, Windows Hello, and Touch ID. Containerized with Docker, deployed on Kubernetes with HPA.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'FIDO2/WebAuthn', 'Docker', 'Kubernetes', 'HPA'],
    github: 'https://github.com/Shrinidhi972004/passwordless-password-authentication-system',
    live: null,
    highlights: [
      'Complete elimination of password-based vulnerabilities via FIDO2',
      'Multi-stage Docker build + Docker Compose for local dev',
      'Kubernetes deployment with namespace isolation, PVCs, and HPA',
      'Automated deploy scripts for AWS, GCP, Azure, and custom VPS',
    ],
    color: 'text-accent2',
    bg: 'bg-accent2/10 border-accent2/20',
  },
  {
    title: 'Cloud Image & Video Gallery',
    badge: 'Cloud + Fullstack',
    badgeIcon: false,
    desc: 'MERN stack media gallery storing photos and videos on AWS S3 with per-user IAM permissions. Full CI/CD pipeline with Jenkins, Docker, Kubernetes manifests, and Terraform.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AWS S3', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    github: 'https://github.com/Shrinidhi972004/Image-and-video-gallery-using-aws-s3-.git',
    live: null,
    highlights: [
      'AWS S3 as media storage backend with scoped IAM user permissions',
      'Full MERN stack with user auth and per-user data isolation',
      'Jenkinsfile for CI/CD pipeline with automated builds',
      'Kubernetes manifests + Terraform for infra provisioning',
    ],
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <p className="font-mono text-accent text-sm mb-3">03. projects</p>
      <h2 className="section-title mb-2">
        Stuff I've <span className="gradient-text">actually built</span>
      </h2>
      <p className="text-muted font-mono text-sm mb-12">Not just tutorials. Real infra. Real incidents.</p>

      {/* Featured — IMS */}
      <div className="card p-8 mb-6 glow">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <span className="tag mb-3 inline-block">Featured Project · Zeotap SRE Assignment</span>
            <h3 className="text-2xl font-bold">IMS — Incident Management System</h3>
            <p className="text-muted text-sm font-mono mt-1">
              Go · Fiber · PostgreSQL · MongoDB · Redis · TimescaleDB · AWS EKS · ArgoCD · Terraform
            </p>
          </div>
          <a
            href="https://github.com/Shrinidhi972004/ims.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 text-muted hover:border-accent hover:text-accent rounded-lg transition-all text-sm font-mono"
          >
            <GitBranch size={16} />
            GitHub
          </a>
        </div>

        <p className="text-muted leading-relaxed mb-6">
          A production-grade Incident Management System that monitors distributed stacks — APIs, MCP Hosts, Distributed Caches, Async Queues, RDBMS, and NoSQL stores. Ingests high-volume signals, debounces intelligently, processes asynchronously, alerts the right responders, and tracks every incident from OPEN to CLOSED with mandatory RCA.
        </p>

        <ul className="grid md:grid-cols-2 gap-2 mb-6">
          {imsHighlights.map(h => (
            <li key={h} className="flex items-start gap-2 text-muted text-xs leading-relaxed">
              <CheckCircle size={13} className="text-accent shrink-0 mt-0.5" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {['Go', 'Fiber v2', 'PostgreSQL', 'TimescaleDB', 'MongoDB', 'Redis', 'React', 'AWS EKS', 'Terraform', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana', 'Docker'].map(tech => (
            <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full bg-bg3 border border-white/5 text-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Second — Microservices SRE */}
      <div className="card p-8 mb-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <span className="tag mb-3 inline-block">Infrastructure Project</span>
            <h3 className="text-2xl font-bold">Microservices DevOps & SRE Platform</h3>
            <p className="text-muted text-sm font-mono mt-1">
              Google Online Boutique · AWS EKS · Helm · ArgoCD · Terraform · Prometheus
            </p>
          </div>
          <a
            href="https://github.com/Shrinidhi972004/microservices-devops-sre-project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white/10 text-muted hover:border-accent hover:text-accent rounded-lg transition-all text-sm font-mono"
          >
            <GitBranch size={16} />
            GitHub
          </a>
        </div>

        <p className="text-muted leading-relaxed mb-6">
          Production-grade DevOps/SRE project built from scratch on AWS. Uses Google's Online Boutique — a 10-service microservices e-commerce app — as the workload layer. Built incrementally across 4 phases with real debugging and real incident documentation.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {srePhases.map(p => (
            <div key={p.phase} className={`rounded-xl border p-4 ${p.bg}`}>
              <p className={`font-mono text-xs mb-1 ${p.color}`}>{p.phase}</p>
              <p className="font-bold text-sm mb-2">{p.title}</p>
              <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="font-mono text-sm text-muted mb-4 flex items-center gap-2">
            <AlertTriangle size={14} className="text-accent3" />
            Real Incidents Documented & Resolved
          </p>
          <div className="flex flex-col gap-3">
            {incidents.map(inc => (
              <div key={inc.title} className="bg-bg3 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={14} className="text-accent shrink-0" />
                  <p className="font-mono text-sm font-bold">{inc.title}</p>
                </div>
                <p className="text-muted text-xs leading-relaxed pl-5">{inc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other 3 projects */}
      <div className="grid md:grid-cols-3 gap-6">
        {otherProjects.map(proj => (
          <div key={proj.title} className="card p-6 flex flex-col">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${proj.bg} ${proj.color} flex items-center gap-1.5`}>
                  {proj.badgeIcon && <Trophy size={11} />}
                  {proj.badge}
                </span>
              </div>
              <h3 className="text-base font-bold mb-1">{proj.title}</h3>
            </div>

            <p className="text-muted text-xs leading-relaxed mb-4 flex-1">{proj.desc}</p>

            <ul className="flex flex-col gap-1.5 mb-4">
              {proj.highlights.map(h => (
                <li key={h} className="flex items-start gap-2 text-muted text-xs">
                  <span className={`mt-1 shrink-0 font-mono text-xs ${proj.color}`}>▸</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {proj.stack.map(tech => (
                <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded-full bg-bg3 border border-white/5 text-muted">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-auto">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 text-muted hover:border-accent hover:text-accent rounded-lg transition-all text-xs font-mono"
              >
                <GitBranch size={13} />
                GitHub
              </a>
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg transition-all text-xs font-mono ${proj.bg} ${proj.color} border-current`}
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}