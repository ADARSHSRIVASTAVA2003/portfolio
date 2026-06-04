import '../styles/skills.css';

const projectsData = [
  {
    id: 1,
    title: 'Sprinix Enterprise SaaS Marketplace',
    description: 'A multi-tenant marketplace platform built from scratch with 11 microservices, tenant isolation, admin tooling and independently deployable product modules.',
    tags: ['Node.js', 'React', 'PostgreSQL', 'Prisma', 'Microservices', 'Docker'],
    link: '#'
  },
  {
    id: 2,
    title: 'Subscription Billing System',
    description: 'Per-product billing flow with Braintree Drop-in UI checkout, payment method vaulting, webhook handlers and auto-renewal background jobs.',
    tags: ['Braintree', 'Webhooks', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 3,
    title: 'Dynamic Product Module System',
    description: 'Plugin-inspired platform where each product registers frontend, backend, pricing and configuration through runtime manifest files.',
    tags: ['Vite', 'React', 'import.meta.glob', 'API Gateway'],
    link: '#'
  },
  {
    id: 4,
    title: 'Admin Panel & Tenant Portal',
    description: 'React.js interfaces for marketplace administration and tenant self-service, including lazy-loaded product UIs and role-based access patterns.',
    tags: ['React', 'Vite', 'JWT', 'RBAC'],
    link: '#'
  },
  {
    id: 5,
    title: 'Microservices API Gateway',
    description: 'Central gateway layer for JWT authentication, tenant context propagation, SSO flows and routing across independent backend services.',
    tags: ['Express.js', 'JWT', 'SSO', 'Nginx'],
    link: '#'
  },
  {
    id: 6,
    title: 'Containerized Deployment Stack',
    description: 'Docker Compose and Nginx setup for running multiple services with reverse proxy routing and independently scalable components.',
    tags: ['Docker', 'Docker Compose', 'Nginx', 'Linux'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section className="skills">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <div className="skills-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="skill-card">
              <h3 className="skill-card-title">{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>
              <div className="tag-list">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
