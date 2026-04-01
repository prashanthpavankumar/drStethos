import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

function Contact() {
  useEffect(() => {
    const contactContainer = document.querySelector('.contact-container');
    if (contactContainer) {
      anime({
        targets: contactContainer,
        opacity: [0, 1],
        translateY: [100, 0],
        translateZ: [200, 0],
        rotateX: [20, 0],
        duration: 1500,
        easing: 'easeOutQuint'
      });

      anime({
        targets: '.contact-item',
        opacity: [0, 1],
        translateZ: [50, 0],
        duration: 1000,
        delay: anime.stagger(200, {start: 500}),
        easing: 'easeOutQuad'
      });
    }
  }, []);

  return (
    <main>
      <div className="contact-container">
        <div className="section-title" style={{ marginBottom: '2rem' }}>
          <h2>Get In Touch</h2>
          <p>We are here to help you revolutionize your hiring process.</p>
        </div>

        <div className="contact-info-grid">
          {/* Location */}
          <div className="contact-item">
            <h3>📍 Office Location</h3>
            <p style={{ lineHeight: 1.6 }}>
              DRSTETHOS INNOVATIONS LLP<br />
              H NO 7-7-14, GARUVU VEEDI,<br />
              WARD NO-12, ADJ,<br />
              Bhimavaram, West Godavari,<br />
              Andhra Pradesh, 534201
            </p>
          </div>

          {/* Email */}
          <div className="contact-item">
            <h3>✉️ Email Us</h3>
            <p>stethosabisha@gmail.com</p>
            <a href="mailto:stethosabisha@gmail.com" className="btn-primary"
              style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              Send Email
            </a>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <h3>📞 Call Us</h3>
            <p>+91 70753 55969</p>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Available during business hours for immediate assistance.
            </p>
          </div>

          {/* Business Hours */}
          <div className="contact-item">
            <h3>🕒 Business Hours</h3>
            <p>Monday - Friday</p>
            <p style={{ fontWeight: 800, color: 'var(--brand-green)', fontSize: '1.2rem', marginTop: '0.5rem' }}>
              9:00 AM - 6:00 PM EST
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
