import { Link } from 'react-router-dom';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Full-Stack Software Developer</p>
        <h1>Adarsh Srivastava</h1>
        <p>
          Node.js, React.js, PostgreSQL and microservices developer building scalable SaaS
          products, real-time systems and payment-enabled platforms.
        </p>
        <div className="hero-meta">
          <span>Lucknow, Uttar Pradesh</span>
          <span>1.5+ years experience</span>
          <span>Remote</span>
        </div>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get In Touch
          </Link>
          <a href="/Adarsh_Srivastava_Resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
