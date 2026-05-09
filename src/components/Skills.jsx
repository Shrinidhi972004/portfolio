const skillGroups = [
  {
    category: 'Cloud',
    color: 'text-accent2',
    bg: 'bg-accent2/10 border-accent2/20',
    skills: ['AWS EC2', 'AWS S3', 'AWS VPC', 'AWS EKS', 'AWS ECR', 'AWS IAM', 'AWS ALB', 'Auto Scaling Groups'],
  },
  {
    category: 'Containers & Orchestration',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
    skills: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'HPA', 'PodDisruptionBudgets'],
  },
  {
    category: 'Infrastructure as Code',
    color: 'text-accent3',
    bg: 'bg-accent3/10 border-accent3/20',
    skills: ['Terraform', 'Modular IaC', 'S3 Remote State', 'DynamoDB State Lock', 'VPC Module', 'EKS Module', 'ECR Module'],
  },
  {
    category: 'CI/CD',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10 border-pink-400/20',
    skills: ['Jenkins', 'GitHub Actions', 'Trivy', 'SonarQube', 'GitOps'],
  },
  {
    category: 'Observability',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10 border-orange-400/20',
    skills: ['Prometheus', 'Grafana', 'kube-prometheus-stack', 'kube-state-metrics', 'Alertmanager'],
  },
  {
    category: 'Languages & Tools',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
    skills: ['Bash', 'Python', 'Git', 'Linux', 'YAML', 'Markdown'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <p className="font-mono text-accent text-sm mb-3">02. skills_&_stack</p>
      <h2 className="section-title mb-2">
        Tools I <span className="gradient-text">actually use</span>
      </h2>
      <p className="text-muted font-mono text-sm mb-12">
        Not just buzzwords on a resume.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map(group => (
          <div key={group.category} className="card p-6">
            <h3 className={`font-mono text-sm font-bold mb-4 ${group.color}`}>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className={`text-xs font-mono px-3 py-1 rounded-full border ${group.bg} ${group.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}