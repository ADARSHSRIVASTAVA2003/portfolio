import '../styles/skills.css';

export default function Skills() {
  const skillsData = [
    {
      category: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'Microservices',
        'WebSocket & Socket.io',
        'RabbitMQ',
        'JWT',
        'OAuth 2.0'
      ]
    },
    {
      category: 'Frontend',
      skills: [
        'React.js (Vite)',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Axios',
        'Dynamic Module Federation'
      ]
    },
    {
      category: 'Databases & ORM',
      skills: [
        'PostgreSQL',
        'Prisma ORM',
        'MongoDB',
        'Mongoose',
        'MySQL',
        'Database Design'
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        'Docker',
        'Docker Compose',
        'Nginx',
        'Git & GitHub',
        'Linux CLI',
        'Postman'
      ]
    },
    {
      category: 'Payments & Integrations',
      skills: [
        'Braintree',
        'Razorpay',
        'PayPal',
        'Subscription Billing',
        'Webhooks',
        'Twilio',
        'Google OAuth'
      ]
    },
    {
      category: 'Architecture',
      skills: [
        'Multi-tenancy',
        'API Gateway',
        'SSO',
        'Role Based Access',
        'Clean Architecture',
        'SaaS Platforms'
      ]
    }
  ];

  return (
    <section className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
