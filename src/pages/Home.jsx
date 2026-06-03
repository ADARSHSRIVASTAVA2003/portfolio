import '../styles/skills.css';

export default function Home() {
  return (
    <main className="profile-section">
      <div className="section-container">
        <section className="intro-panel">
          <div>
            <p className="section-kicker">Professional Summary</p>
            <h2>Production-minded full-stack developer focused on SaaS architecture.</h2>
          </div>
          <p>
            Results-driven Full-Stack Developer with 1.5+ years of professional experience
            building scalable, production-ready applications. Specialized in Node.js
            microservices, React.js frontends, and PostgreSQL/MongoDB database design, with
            hands-on delivery across multi-tenancy, real-time systems, payment integrations,
            and containerized deployments.
          </p>
        </section>

        <section className="timeline-section">
          <p className="section-kicker">Work Experience</p>
          <div className="timeline-card">
            <div className="timeline-header">
              <div>
                <h3>Full-Stack Developer</h3>
                <p>Sprinix Technolabs - Lucknow</p>
              </div>
              <span>Jan 2024 - Present</span>
            </div>
            <h4>Sprinix - Enterprise SaaS Marketplace Platform</h4>
            <ul className="impact-list">
              <li>Designed and built a multi-tenant SaaS marketplace with 11 independent services including auth, billing, tenant, marketplace, API gateway, analytics, audit, notifications, admin, user, and product.</li>
              <li>Implemented per-product subscription billing with Braintree, including Drop-in UI checkout, payment method vaulting, webhook handlers, and auto-renewal jobs.</li>
              <li>Built a dynamic plugin-style module system where products ship with independent frontend, backend, pricing, and config manifests.</li>
              <li>Enforced tenant-level data isolation through Prisma scoped queries and JWT tenant context propagated through the API gateway.</li>
              <li>Containerized the stack with Docker Compose and configured Nginx reverse proxy routing for independently scalable services.</li>
              <li>Built React.js Admin Panel and Tenant Portal UIs with lazy-loaded product modules using Vite and import.meta.glob.</li>
            </ul>
          </div>
        </section>

        <section className="detail-grid">
          <div className="detail-card">
            <p className="section-kicker">Education</p>
            <h3>Bachelor of Computer Applications</h3>
            <p>Babasaheb Bhimrao Ambedkar University (Central University)</p>
            <span>2022 - Present</span>
            <h3>Intermediate - Science with Mathematics</h3>
            <p>Central Board of Secondary Education</p>
            <span>2022</span>
            <h3>High School</h3>
            <p>Central Board of Secondary Education</p>
            <span>2020</span>
          </div>

          <div className="detail-card">
            <p className="section-kicker">Certifications</p>
            <ul className="compact-list">
              <li>Backend Development Course - Physics Wallah, December 2024</li>
              <li>Python for Beginners - Physics Wallah, November 2024</li>
              <li>Core Java Certification - Physics Wallah</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
