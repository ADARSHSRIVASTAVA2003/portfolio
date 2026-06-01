import '../styles/skills.css';

export default function Contact() {
  return (
    <section className="skills">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form
            className="contact-card"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:adarshsrivastavakv@gmail.com';
            }}
          >
            <div className="form-field">
              <label>Name</label>
              <input type="text" required />
            </div>

            <div className="form-field">
              <label>Email</label>
              <input type="email" required />
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea required rows="5" />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Email Adarsh
            </button>
          </form>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h3 className="contact-heading">Contact Details</h3>
            <div className="contact-links">
              <a href="mailto:adarshsrivastavakv@gmail.com">
                adarshsrivastavakv@gmail.com
              </a>
              <a href="tel:+919569435796">
                +91 95694 35796
              </a>
            </div>
            <p className="contact-location">Lucknow, Uttar Pradesh</p>
          </div>
        </div>
      </div>
    </section>
  );
}
