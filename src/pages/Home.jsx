import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImage = '/assets/home/hero-taxi.jpg';
  const destinations = {
    karnataka: '/assets/explore/karnataka-cover.jpg',
    kerala: '/assets/explore/kerala-cover.jpg',
    tamilNadu: '/assets/explore/tamilnadu-cover.jpg'
  };
  const services = [
    {
      icon: 'fa-crown',
      title: 'Executive Transfers',
      description: 'Quiet cabins, punctual arrivals, and polished chauffeur-grade service for business and special occasions.'
    },
    {
      icon: 'fa-plane-departure',
      title: 'Airport Concierge',
      description: 'Flight-aware pickups, luggage assistance, and smooth terminal transfers without the usual taxi friction.'
    },
    {
      icon: 'fa-route',
      title: 'Curated Road Trips',
      description: 'Intercity and sightseeing journeys planned around comfort stops, scenic routes, and reliable timing.'
    },
    {
      icon: 'fa-briefcase',
      title: 'Corporate Mobility',
      description: 'Dependable transport for teams, visiting clients, and recurring travel schedules across Southern India.'
    }
  ];
  const promises = [
    'On-time pickups with route planning that avoids delays.',
    'Clean vehicles maintained for family, business, and long-distance rides.',
    'Transparent pricing and direct support over call or WhatsApp.',
    'Experienced local drivers who understand intercity travel well.'
  ];
  const testimonials = [
    {
      name: 'Bala',
      route: 'Coimbatore to Mysore',
      quote: 'The car arrived early, the cabin was spotless, and the entire ride felt closer to a private chauffeur service than a standard cab booking.'
    },
    {
      name: 'Ukesh',
      route: 'Airport transfer',
      quote: 'What stood out was the calm experience. No last-minute confusion, no pricing surprises, and the driver handled the airport pickup perfectly.'
    },
    {
      name: 'Priya',
      route: 'Family temple tour',
      quote: 'We used Harshan Cabs for a multi-stop family trip and the planning was excellent. It felt premium, safe, and genuinely well managed.'
    }
  ];

  const heroParallax = Math.min(scrollY * 0.12, 72);
  const noteParallax = Math.min(scrollY * 0.08, 48);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-shell">
          <div className="hero-copy" style={{ transform: `translateY(${heroParallax * -0.08}px)` }}>
            <span className="hero-kicker">Premium taxi and tour service from Coimbatore</span>
            <h1>Move across South India with the feel of a private travel lounge.</h1>
            <p className="subtitle">Luxury-minded road travel for airport transfers, family journeys, temple circuits, and curated destination tours.</p>
            <p className="description">
              Harshan Cabs combines dependable scheduling, polished vehicles, and local route knowledge into a travel experience that feels composed from pickup to arrival.
            </p>
            <div className="hero-buttons">
              <Link to="/book-now" className="btn-primary">Reserve Your Ride</Link>
              <a href="#services" className="btn-secondary">View Signature Services</a>
            </div>
            <div className="hero-metrics">
              <ScrollReveal animation="fade-up" delay={60}>
                <div>
                <strong>24/7</strong>
                <span>Ride availability</span>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={140}>
                <div>
                <strong>3 States</strong>
                <span>Tours and intercity travel</span>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={220}>
                <div>
                <strong>Premium</strong>
                <span>Comfort-first fleet experience</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <div className="hero-visual-card" style={{ transform: `translateY(${heroParallax}px)` }}>
            <div className="hero-image-frame" style={{ transform: `translateY(${heroParallax * -0.22}px)` }}>
              <img src={heroImage} alt="Luxury taxi for city travel" loading="eager" />
            </div>
            <div className="hero-floating-note primary-note" style={{ transform: `translateY(${noteParallax}px)` }}>
              <span>Signature Route</span>
              <strong>Coimbatore to Munnar</strong>
              <p>Hill transfer with comfort stops and scenic pacing.</p>
            </div>
            <div className="hero-floating-note secondary-note" style={{ transform: `translateY(${noteParallax * -1}px)` }}>
              <span>Guest Promise</span>
              <strong>Quiet, clean, punctual</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-strip">
        <div className="experience-card">
          <span>Airport</span>
          <p>Professional pickup and drop coordination.</p>
        </div>
        <div className="experience-card">
          <span>Corporate</span>
          <p>Executive-ready transport for clients and teams.</p>
        </div>
        <div className="experience-card">
          <span>Touring</span>
          <p>Memorable regional travel with reliable timing.</p>
        </div>
        <div className="experience-card">
          <span>Family Travel</span>
          <p>Comfortable, safety-first rides for every generation.</p>
        </div>
      </section>

      <section id="services" className="services">
        <ScrollReveal animation="fade-up">
          <div className="section-heading">
            <span>Signature Services</span>
            <h2>Designed for travellers who care about calm, quality, and timing.</h2>
            <p>Every ride category is shaped around reliability first, then elevated with details that make long and short journeys feel premium.</p>
          </div>
        </ScrollReveal>
        <div className="service-grid">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} animation="fade-up" delay={index * 90}>
              <article className="service-card">
                <div className="service-icon-wrap">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <div className="service-aside">
          <div className="service-aside-panel">
            <span>Why frequent riders stay with us</span>
            <h3>Travel that feels composed, not improvised.</h3>
            <ul>
              {promises.map((promise) => (
                <li key={promise}>{promise}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="explore-destinations">
        <ScrollReveal animation="fade-up">
          <div className="section-heading centered">
            <span>Curated Destinations</span>
            <h2>Explore signature circuits across Karnataka, Kerala, and Tamil Nadu.</h2>
          </div>
        </ScrollReveal>
        <div className="destination-grid">
          <ScrollReveal animation="fade-up" delay={40}>
            <Link to="/karnataka" className="destination-card">
              <img src={destinations.karnataka} alt="Karnataka landscape" loading="lazy" />
              <div className="destination-overlay">
                <h3>Karnataka Tours</h3>
                <p>Royal heritage, misty hills, temple trails, and coastal pauses.</p>
              </div>
            </Link>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={120}>
            <Link to="/kerala" className="destination-card">
              <img src={destinations.kerala} alt="Kerala backwaters" loading="lazy" />
              <div className="destination-overlay">
                <h3>Kerala Tours</h3>
                <p>Backwaters, tea country, wildlife corridors, and sea breeze routes.</p>
              </div>
            </Link>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <Link to="/tamilnadu" className="destination-card">
              <img src={destinations.tamilNadu} alt="Tamil Nadu temple architecture" loading="lazy" />
              <div className="destination-overlay">
                <h3>Tamil Nadu Tours</h3>
                <p>Temple cities, colonial corners, sacred coastlines, and hill escapes.</p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="why-choose-us">
        <ScrollReveal animation="fade-right">
          <div className="why-copy">
            <span className="section-tag">Travel Standard</span>
            <h2>Less noise, better planning, stronger travel confidence.</h2>
            <p>Harshan Cabs is built for guests who want dependable execution without sacrificing atmosphere. The result is a service that feels considered, warm, and well-paced.</p>
          </div>
        </ScrollReveal>
        <div className="features-grid">
          <ScrollReveal animation="fade-up" delay={40}>
            <div className="feature">
              <i className="fas fa-clock"></i>
              <h3>Punctual by design</h3>
              <p>Pickup windows and route choices are planned to reduce unnecessary stress.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={120}>
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <h3>Comfort with safety</h3>
              <p>Clean interiors, responsible driving, and a ride experience suitable for families and professionals.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="feature">
              <i className="fas fa-wallet"></i>
              <h3>Clear pricing</h3>
              <p>Fares stay transparent so the experience feels premium, not confusing.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={280}>
            <div className="feature">
              <i className="fas fa-user-tie"></i>
              <h3>Local expertise</h3>
              <p>Drivers know the roads, timing, and destination rhythms that make regional travel smoother.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="testimonials">
        <ScrollReveal animation="fade-up">
          <div className="section-heading centered">
            <span>Guest Impressions</span>
            <h2>What riders notice most is how easy everything feels.</h2>
          </div>
        </ScrollReveal>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} animation="fade-up" delay={index * 90}>
              <article className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>“{testimonial.quote}”</p>
                <div className="testimonial-meta">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.route}</span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="contact-info">
        <ScrollReveal animation="fade-up">
          <div className="contact-lead">
            <span>Plan Your Ride</span>
            <h2>Book directly, ask about routes, or plan a longer premium tour.</h2>
            <p>Reach out for airport transfers, intercity bookings, one-day travel, and custom temple or hill-station itineraries.</p>
          </div>
        </ScrollReveal>
        <div className="contact-details">
          <ScrollReveal animation="fade-up" delay={40}>
            <div className="contact-item featured">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Base Location</h3>
              <p>3G2A EB COLONY, PATCHAPALAYAM ROAD<br />KURUMBAPALAYAM, Coimbatore - 641107</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={120}>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <h3>Call Us</h3>
              <p>+91 9842274790</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <h3>Availability</h3>
              <p>Open: 06:00 AM - 11:00 PM (Daily)</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Harshan Cabs</h3>
            <p>Premium road travel across Southern India, delivered with dependable timing and a more refined guest experience.</p>
          </div>
          <div className="footer-section">
            <h3>Navigate</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/book-now">Book Now</Link></li>
              <li><Link to="/karnataka">Karnataka</Link></li>
              <li><Link to="/kerala">Kerala</Link></li>
              <li><Link to="/tamilnadu">Tamil Nadu</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/harshancabs" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/harshancabs" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/harshancabs" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Harshan Cabs. Crafted for comfortable travel.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
