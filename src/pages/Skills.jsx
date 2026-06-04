import { useState } from 'react';
import '../styles/skills.css';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js',      color: '#61DAFB', icon: '⚛' },
      { name: 'JavaScript',    color: '#F7DF1E', icon: 'JS' },
      { name: 'HTML5',         color: '#E34F26', icon: 'H5' },
      { name: 'CSS3',          color: '#1572B6', icon: 'C3' },
      { name: 'Vite',          color: '#646CFF', icon: 'V'  },
      { name: 'Bootstrap',     color: '#7952B3', icon: 'B'  },
      { name: 'Axios',         color: '#5A29E4', icon: 'Ax' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js',       color: '#339933', icon: 'N'  },
      { name: 'Express.js',    color: '#aaaaaa', icon: 'Ex' },
      { name: 'REST APIs',     color: '#FF6B6B', icon: 'AP' },
      { name: 'Socket.io',     color: '#888888', icon: 'So' },
      { name: 'RabbitMQ',      color: '#FF6600', icon: 'RQ' },
      { name: 'JWT',           color: '#D63AFF', icon: 'JW' },
      { name: 'OAuth 2.0',     color: '#4285F4', icon: 'OA' },
    ],
  },
  {
    category: 'Database & ORM',
    skills: [
      { name: 'PostgreSQL',    color: '#336791', icon: 'PG' },
      { name: 'MongoDB',       color: '#47A248', icon: 'Mg' },
      { name: 'MySQL',         color: '#4479A1', icon: 'My' },
      { name: 'Prisma ORM',    color: '#A78BFA', icon: 'Pr' },
      { name: 'Mongoose',      color: '#AA0000', icon: 'Mo' },
      { name: 'Redis',         color: '#DC382D', icon: 'Re' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker',        color: '#2496ED', icon: 'Dk' },
      { name: 'Docker Compose',color: '#2496ED', icon: 'DC' },
      { name: 'Nginx',         color: '#009639', icon: 'Nx' },
      { name: 'Git & GitHub',  color: '#F05032', icon: 'Gt' },
      { name: 'Linux CLI',     color: '#FCC624', icon: 'Lx' },
      { name: 'Postman',       color: '#FF6C37', icon: 'Pm' },
    ],
  },
  {
    category: 'Payments',
    skills: [
      { name: 'Braintree',     color: '#009CDE', icon: 'Bt' },
      { name: 'Razorpay',      color: '#2D9CDB', icon: 'Rp' },
      { name: 'PayPal',        color: '#003087', icon: 'PP' },
      { name: 'Twilio',        color: '#F22F46', icon: 'Tw' },
      { name: 'Webhooks',      color: '#6366F1', icon: 'Wh' },
    ],
  },
  {
    category: 'E-Commerce',
    skills: [
      { name: 'Magento 2',        color: '#EE672F', icon: 'M2' },
      { name: 'REST / GraphQL',   color: '#E10098', icon: 'GQ' },
      { name: 'Product Catalog',  color: '#F59E0B', icon: 'PC' },
      { name: 'Order Management', color: '#10B981', icon: 'OM' },
      { name: 'Payment Gateway',  color: '#3B82F6', icon: 'PG' },
      { name: 'Cart & Checkout',  color: '#EF4444', icon: 'CC' },
    ],
  },
  {
    category: 'Architecture',
    skills: [
      { name: 'Microservices', color: '#7C3AED', icon: 'Ms' },
      { name: 'Multi-tenancy', color: '#0EA5E9', icon: 'Mt' },
      { name: 'API Gateway',   color: '#10B981', icon: 'AG' },
      { name: 'SSO',           color: '#F59E0B', icon: 'SS' },
      { name: 'Role-Based Access', color: '#EF4444', icon: 'RB' },
      { name: 'SaaS Platforms',color: '#8B5CF6', icon: 'Sa' },
    ],
  },
];

export default function Skills() {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? skillsData
        .map(group => ({
          ...group,
          skills: group.skills.filter(s =>
            s.name.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter(group => group.skills.length > 0)
    : skillsData;

  return (
    <section className="skills">
      <div className="section-container">

        <div className="skills-header">
          <h2 className="skills-title">Technical Expertise</h2>
          <p className="skills-subtitle">
            A comprehensive overview of the technologies I use to build scalable applications.
          </p>
        </div>

        <div className="skills-search-wrap">
          <div className="skills-search">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              className="skills-input"
              placeholder="Search technologies (e.g., React, Docker...)"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear">✕</button>
            )}
          </div>
        </div>

        {filtered.length === 0 && (
          <p className="skills-empty">No technologies found for "{query}"</p>
        )}

        <div className="skills-grid">
          {filtered.map((group, i) => (
            <div key={i} className="skill-card">
              <h3 className="skill-card-title">{group.category}</h3>
              <div className="skill-pills">
                {group.skills.map((skill, j) => (
                  <span key={j} className="skill-pill">
                    <span
                      className="skill-pill-icon"
                      style={{
                        background: skill.color + '22',
                        color: skill.color,
                        border: `1px solid ${skill.color}55`,
                      }}
                    >
                      {skill.icon}
                    </span>
                    {skill.name}
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
