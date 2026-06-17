import '../styles/skills.css';
import '../styles/projects.css';

const liveProjects = [
  {
    id: 1,
    title: 'Luxe Salon',
    description: 'A premium salon booking and showcase platform featuring elegant UI design, service listings, appointment scheduling, and a smooth customer experience built for modern salons.',
    tags: ['React', 'Vercel', 'CSS3', 'Responsive Design'],
    link: 'https://adarsh-luxe-salon.vercel.app/'
  },
  {
    id: 2,
    title: 'Spark',
    description: 'A sleek and modern web application with dynamic interfaces, smooth animations, and an intuitive user experience designed to spark creativity and engagement.',
    tags: ['React', 'Vercel', 'JavaScript', 'Modern UI'],
    link: 'https://spark-beta-seven.vercel.app'
  }
];

const sprinixHighlights = [
  {
    icon: '{}',
    title: '11 Microservices Architecture',
    desc: 'Independently deployable services handling auth, billing, products, tenants, notifications and more — each with its own database schema and API surface.'
  },
  {
    icon: '$',
    title: 'Subscription Billing Engine',
    desc: 'Per-product billing flow powered by Braintree Drop-in UI with payment method vaulting, webhook-driven lifecycle events, and automated renewal background jobs.'
  },
  {
    icon: '#',
    title: 'Dynamic Product Module System',
    desc: 'Plugin-inspired architecture where each product registers its frontend, backend, pricing, and configuration through runtime manifest files using Vite import.meta.glob.'
  },
  {
    icon: '>',
    title: 'Admin Panel & Tenant Portal',
    desc: 'Full-featured React.js dashboards for marketplace administration and tenant self-service, with lazy-loaded product UIs and granular role-based access control (RBAC).'
  },
  {
    icon: '~',
    title: 'API Gateway & SSO Layer',
    desc: 'Central gateway handling JWT authentication, tenant context propagation, Single Sign-On flows, and intelligent routing across all independent backend services.'
  },
  {
    icon: '@',
    title: 'Containerized Deployment',
    desc: 'Production-grade Docker Compose and Nginx setup with reverse proxy routing, service isolation, and independently scalable components on Linux servers.'
  }
];

const sprinixTags = [
  'Node.js', 'React', 'PostgreSQL', 'Prisma', 'Docker',
  'Nginx', 'Braintree', 'JWT', 'SSO', 'RBAC', 'Vite', 'Express.js'
];

export default function Projects() {
  return (
    <section className="skills">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>

        {/* Live Projects */}
        <div className="skills-grid" style={{ marginBottom: '3rem' }}>
          {liveProjects.map((project) => (
            <div key={project.id} className="skill-card project-card project-live">
              <div className="project-card-header">
                <h3 className="skill-card-title">{project.title}</h3>
                <span className="live-badge">
                  <span className="live-dot" />
                  Live
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-live-link"
              >
                Visit Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Sprinix Enterprise SaaS — Full-width showcase */}
        <div className="sprinix-showcase">
          <div className="sprinix-header">
            <span className="sprinix-kicker">Enterprise Platform</span>
            <h3 className="sprinix-title">Sprinix Enterprise SaaS Marketplace</h3>
            <p className="sprinix-subtitle">
              A production-grade, multi-tenant marketplace platform engineered from the ground up — featuring 11 microservices, complete tenant isolation, a plug-and-play product module system, integrated subscription billing, and a full admin/tenant portal ecosystem. Designed for scale, security, and independent deployability.
            </p>
          </div>

          <div className="sprinix-grid">
            {sprinixHighlights.map((item, idx) => (
              <div key={idx} className="sprinix-feature">
                <span className="sprinix-feature-icon">{item.icon}</span>
                <div>
                  <h4 className="sprinix-feature-title">{item.title}</h4>
                  <p className="sprinix-feature-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="tag-list sprinix-tags">
            {sprinixTags.map((tag, idx) => (
              <span key={idx} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
