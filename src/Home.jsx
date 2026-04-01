import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Zap, Award, Building2 } from 'lucide-react';
import anime from 'animejs/lib/anime.es.js';

function Home() {
  const navigate = useNavigate();
  const [pricingTab, setPricingTab] = useState('hospitals');

  useEffect(() => {
    /* 4. Hero Section Heavy Animations */
    anime({
      targets: '.modern-cube .cube',
      rotateX: [ -20, 340 ],
      rotateY: [ 45, 405 ],
      duration: 16000,
      loop: true,
      easing: 'linear'
    });

    // Sphere Ring Animations (applies to footer sphere)
    anime({
      targets: '.ring-1',
      rotateZ: [0, 360],
      duration: 12000,
      loop: true,
      easing: 'linear'
    });
    anime({
      targets: '.ring-2',
      rotateZ: [360, 0],
      duration: 18000,
      loop: true,
      easing: 'linear'
    });
    anime({
      targets: '.ring-3',
      rotateZ: [0, 360],
      rotateX: [20, 20],
      duration: 24000,
      loop: true,
      easing: 'linear'
    });

    // Heavy "How It Works" step animations
    anime({
      targets: '.how-step',
      translateX: [-60, 0],
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 1800,
      delay: anime.stagger(250, { start: 400 }),
      easing: 'easeOutElastic(1, 0.6)'
    });

    // Subtle continuous pulse on step numbers
    anime({
      targets: '.step-num',
      scale: [1, 1.15, 1],
      duration: 3000,
      delay: anime.stagger(400),
      loop: true,
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.f-card',
      translateZ: () => anime.random(50, 150),
      translateY: () => anime.random(-30, 30),
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(200)
    });

    /* 5. Initial Page Load Animation Staggering */
    const introTimeline = anime.timeline({
      easing: 'easeOutExpo'
    });

    introTimeline.add({
      targets: '.navbar',
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1000
    })
    .add({
      targets: '.badge, .hero-title, .hero-subtitle, .hero-buttons',
      opacity: [0, 1],
      translateZ: [100, 0],
      duration: 1200,
      delay: anime.stagger(150)
    }, '-=800')
    .add({
      targets: '.stat-item',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: anime.stagger(100)
    }, '-=800')
    .add({
      targets: '.cube-wrapper, .floating-cards',
      opacity: [0, 1],
      scale: [0.5, 1],
      rotateX: [90, 0],
      duration: 1500
    }, '-=1000');

    /* 6. Scroll Animations */
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting && !entry.target.classList.contains('animated-already')) {
          const targetCards = entry.target.querySelectorAll('.about-card, .feature-card, .how-box, .price-card');
          if(targetCards.length > 0) {
            anime({
              targets: targetCards,
              opacity: [0, 1],
              translateY: [150, 0],
              translateZ: [300, 0],
              rotateX: [45, 0],
              duration: 1500,
              delay: anime.stagger(250),
              easing: 'easeOutElastic(1, .8)'
            });
          }
          entry.target.classList.add('animated-already');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section:not(.hero)').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content 3d-target">
          <div className="badge">DrStethos Medical Platform</div>
          <h1 className="hero-title">Smart Hiring for <br /><span>Hospitals and Doctors</span></h1>
          <p className="hero-subtitle">
            DrStethos is your solution for professional, safe, and rapid medical services,
            connecting doctors with hospitals seamlessly across India.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started Now</button>
            <button className="btn-secondary" onClick={() => navigate('/contact')}>Contact Us</button>
          </div>
          <div className="stats">
            <div className="stat-item">
              <h2>1000+</h2>
              <p>Hospitals</p>
            </div>
            <div className="stat-item">
              <h2>5000+</h2>
              <p>Doctors</p>
            </div>
            <div className="stat-item">
              <h2>24/7</h2>
              <p>Support</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          {/* Clean Glass Cube (Based on Image 3) */}
          <div className="cube-wrapper modern-cube">
            <div className="cube">
              <div className="face front"><span>Trust</span></div>
              <div className="face back"><span>Connect</span></div>
              <div className="face right"><span>Care</span></div>
              <div className="face left"><span>Heal</span></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
            </div>
          </div>
          <div className="floating-cards modern-tags">
            <div className="f-card fc-1">Doctor Verified</div>
            <div className="f-card fc-2">Shift Matched</div>
            <div className="f-card fc-3">Hospital Hiring</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about visible-item" id="about">
        <div className="section-title">
          <h2>About DrStethos</h2>
          <p>Bridging the gap between hospitals and healthcare professionals</p>
        </div>
        <div className="about-content 3d-target">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              DrStethos is a dedicated medical recruitment platform designed to bridge the gap between
              hospitals and healthcare professionals. Our mission is to make hiring in the healthcare sector
              faster, simpler, and more reliable by bringing everything into one seamless digital experience.
            </p>
          </div>
          <div className="about-card">
            <h3>For Hospitals</h3>
            <p>
              We provide hospitals with powerful tools to post jobs, manage applications, shortlist candidates,
              and schedule in-app interviews, ensuring a smooth and transparent hiring workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features visible-item" id="features">
        <div className="section-title">
          <h2>Why Choose DrStethos?</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card dark-theme">
            <div className="icon-wrapper" style={{ borderColor: 'rgba(52, 211, 153, 0.4)' }}><ShieldCheck size={24} color="#34d399" /></div>
            <h3>Safe & Secure</h3>
            <span className="overview-label">OVERVIEW</span>
            <p>Your data and privacy are our top priority.<br/>We use industry-standard encryption to keep your information safe.</p>
          </div>
          <div className="feature-card dark-theme">
            <div className="icon-wrapper" style={{ borderColor: 'rgba(250, 204, 21, 0.4)' }}><Zap size={24} color="#facc15" /></div>
            <h3>Rapid Deployment</h3>
            <span className="overview-label">OVERVIEW</span>
            <p>Need someone urgently? Our platform allows for quick job posting and candidate responses.</p>
          </div>
          <div className="feature-card dark-theme">
            <div className="icon-wrapper" style={{ borderColor: 'rgba(96, 165, 250, 0.4)' }}><Award size={24} color="#60a5fa" /></div>
            <h3>Quality Care</h3>
            <span className="overview-label">OVERVIEW</span>
            <p>We vet all healthcare professionals to ensure the highest quality of care and professionalism.</p>
          </div>
          <div className="feature-card dark-theme">
            <div className="icon-wrapper" style={{ borderColor: 'rgba(248, 113, 113, 0.4)' }}><Building2 size={24} color="#f87171" /></div>
            <h3>Verified Hospitals</h3>
            <span className="overview-label">OVERVIEW</span>
            <p>Access a wide network of verified hospitals and clinics for reliable work opportunities.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how visible-item" id="how">
        <div className="section-title">
          <h2>How It Works</h2>
        </div>
        <div className="how-container">
          <div className="how-box">
            <h3>For Medical Professionals</h3>
            <p>Find your next career move with ease. Create profiles, apply to top-tier hospitals, and manage your shifts—all in one place.</p>
            <div className="steps-list">
              <div className="how-step">
                <span className="step-num">1</span>
                <span className="step-text">Profile Creation</span>
              </div>
              <div className="how-step">
                <span className="step-num">2</span>
                <span className="step-text">Job Search</span>
              </div>
              <div className="how-step">
                <span className="step-num">3</span>
                <span className="step-text">Manage Shifts</span>
              </div>
            </div>
          </div>
          <div className="how-box">
            <h3>For Hospitals (Staffing)</h3>
            <p>From emergency shift coverage to permanent hires—connect with qualified medical professionals instantly.</p>
            <div className="steps-list">
              <div className="how-step">
                <span className="step-num">1</span>
                <span className="step-text">Rapid Recruitment</span>
              </div>
              <div className="how-step">
                <span className="step-num">2</span>
                <span className="step-text">Verified Talent</span>
              </div>
              <div className="how-step">
                <span className="step-num">3</span>
                <span className="step-text">Scheduling Tools</span>
              </div>
              <div className="how-step">
                <span className="step-num">4</span>
                <span className="step-text">Shift Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing visible-item" id="pricing">
        <div className="section-title">
          <h2>Plans & Pricing</h2>
        </div>
        <div className="pricing-toggle">
          <button className={`toggle-btn ${pricingTab === 'hospitals' ? 'active' : ''}`} onClick={() => setPricingTab('hospitals')}>For Hospitals</button>
          <button className={`toggle-btn ${pricingTab === 'doctors' ? 'active' : ''}`} onClick={() => setPricingTab('doctors')}>For Doctors</button>
        </div>

        {/* Hospitals Pricing wrapper */}
        {pricingTab === 'hospitals' && (
          <div id="pricing-hospitals" className="pricing-wrapper active">
            <p className="pricing-desc">Maximize your recruitment reach.</p>
            <div className="pricing-grid">
              <div className="price-card 3d-target 3d-rotate-card">
                <div className="plan-type">Silver</div>
                <div className="price">₹3,000<span>/mo</span></div>
                <p className="yearly-price">or ₹25,000/year (Save more!)</p>
                <p className="plan-desc">Small hospitals/clinics with basic hiring requirements</p>
                <ul>
                  <li>Doctor Profile Views: 75/month</li>
                  <li>Job Postings: 2/month</li>
                  <li>Access to Doctor Preferences: Yes</li>
                  <li>In-App Contact: Chat to shortlist</li>
                  <li>Support: Email</li>
                </ul>
                <button className="btn-primary outline">Select Silver</button>
              </div>
              <div className="price-card popular 3d-target 3d-rotate-card">
                <div className="badge-popular">Most Popular</div>
                <div className="plan-type">Gold</div>
                <div className="price">₹7,500<span>/mo</span></div>
                <p className="yearly-price">or ₹60,000/year (Save more!)</p>
                <p className="plan-desc">Medium hospitals seeking more visibility and data insights</p>
                <ul>
                  <li>Doctor Profile Views: 250/month</li>
                  <li>Job Postings: 5/month</li>
                  <li>Priority Job Listing: Yes</li>
                  <li>In-App Contact: Video + Chat</li>
                  <li>Support: Chat + Email</li>
                </ul>
                <button className="btn-primary">Select Gold</button>
              </div>
              <div className="price-card 3d-target 3d-rotate-card">
                <div className="plan-type">Platinum</div>
                <div className="price">₹15,000<span>/mo</span></div>
                <p className="yearly-price">or ₹1,25,000/year (Save more!)</p>
                <p className="plan-desc">Large hospitals or hospital chains requiring full-service access</p>
                <ul>
                   <li>Doctor Profile Views: Unlimited</li>
                   <li>Priority Job Listing: Featured + Priority</li>
                   <li>In-App Contact: Video + Chat</li>
                   <li>API Access/Integration: Yes</li>
                   <li>Custom Branding: Yes</li>
                </ul>
                <button className="btn-primary outline">Select Platinum</button>
              </div>
            </div>
          </div>
        )}

        {/* Doctors Pricing wrapper */}
        {pricingTab === 'doctors' && (
          <div id="pricing-doctors" className="pricing-wrapper active">
            <p className="pricing-desc">Accelerate your medical career effortlessly.</p>
            <div className="pricing-grid doctors-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
              <div className="price-card 3d-target 3d-rotate-card">
                <div className="plan-type">Basic</div>
                <div className="price">₹499<span>/mo</span></div>
                <p className="yearly-price">or ₹2,999/year (Best Value!)</p>
                <p className="plan-desc">Perfect for doctors starting their job search</p>
                <ul>
                  <li>Access to Hospital Profiles: Up to 20/month</li>
                  <li>Job Applications: 5/month</li>
                  <li>Direct Messaging: No</li>
                  <li>Customer Support: Email</li>
                </ul>
                <button className="btn-primary outline">Select Basic</button>
              </div>
              <div className="price-card popular 3d-target 3d-rotate-card">
                <div className="badge-popular">Recommended</div>
                <div className="plan-type">Premium</div>
                <div className="price">₹999<span>/mo</span></div>
                <p className="yearly-price">or ₹4,999/year (Best Value!)</p>
                <p className="plan-desc">Best for active job seekers and career advancement</p>
                <ul>
                  <li>Access to Hospital Profiles: Unlimited</li>
                  <li>Job Applications: Unlimited</li>
                  <li>Direct Messaging: Yes</li>
                  <li>Resume Highlighting: Yes</li>
                  <li>Customer Support: Priority Chat/Email</li>
                </ul>
                <button className="btn-primary">Select Premium</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
