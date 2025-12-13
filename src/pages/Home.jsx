import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Harshan Cabs</h1>
          <p className="subtitle">The Future of Comfort and Mobility</p>
          <p className="description">
            Experience premium taxi services with AI-powered rides, luxury vehicles, 
            and eco-friendly transport across Southern India.
          </p>
          <div className="hero-buttons">
            <Link to="/book-now" className="btn-primary">Book Your Ride</Link>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/intro/car1.jpg" alt="Luxury Car" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <i className="fas fa-car"></i>
            <h3>Luxury Cabs</h3>
            <p>Premium vehicles for a comfortable journey</p>
          </div>
          <div className="service-card">
            <i className="fas fa-leaf"></i>
            <h3>Eco-Friendly Rides</h3>
            <p>Green transportation for a sustainable future</p>
          </div>
          <div className="service-card">
            <i className="fas fa-robot"></i>
            <h3>AI-Powered</h3>
            <p>Smart routing and efficient travel solutions</p>
          </div>
          <div className="service-card">
            <i className="fas fa-plane"></i>
            <h3>Airport Transfers</h3>
            <p>Reliable pickup and drop services</p>
          </div>
          <div className="service-card">
            <i className="fas fa-briefcase"></i>
            <h3>Corporate Services</h3>
            <p>Professional transportation for businesses</p>
          </div>
          <div className="service-card">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Outstation Cabs</h3>
            <p>Long-distance travel made comfortable</p>
          </div>
        </div>
      </section>

      {/* Explore Destinations Section */}
      <section className="explore-destinations">
        <h2>Explore Popular Destinations</h2>
        <div className="destination-grid">
          <Link to="/karnataka" className="destination-card">
            <img src="/assets/Explore/karnataka.jpg" alt="Karnataka" />
            <div className="destination-overlay">
              <h3>Karnataka Tours</h3>
              <p>Discover the beauty of Karnataka</p>
            </div>
          </Link>
          <Link to="/kerala" className="destination-card">
            <img src="/assets/Explore/kerala.jpg" alt="Kerala" />
            <div className="destination-overlay">
              <h3>Kerala Tours</h3>
              <p>Experience God's Own Country</p>
            </div>
          </Link>
          <Link to="/tamilnadu" className="destination-card">
            <img src="/assets/Explore/tamilnadu.jpg" alt="Tamil Nadu" />
            <div className="destination-overlay">
              <h3>Tamil Nadu Tours</h3>
              <p>Explore the land of temples</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Harshan Cabs?</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-clock"></i>
            <h3>24/7 Service</h3>
            <p>Available round the clock for your convenience</p>
          </div>
          <div className="feature">
            <i className="fas fa-shield-alt"></i>
            <h3>Safe & Secure</h3>
            <p>Your safety is our top priority</p>
          </div>
          <div className="feature">
            <i className="fas fa-dollar-sign"></i>
            <h3>Affordable Rates</h3>
            <p>Competitive pricing without hidden charges</p>
          </div>
          <div className="feature">
            <i className="fas fa-user-tie"></i>
            <h3>Professional Drivers</h3>
            <p>Experienced and courteous drivers</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Excellent service! The ride was comfortable and the driver was very professional."</p>
            <h4>- Bala</h4>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"The best cab experience I've had in Tamil Nadu. Highly recommended!"</p>
            <h4>- Ukesh</h4>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★☆</div>
            <p>"Great service and very reliable. Will definitely use again."</p>
            <h4>- Priya</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>3G2A EB COLONY, PATCHAPALAYAM ROAD<br />KURUMBAPALAYAM, Coimbatore - 641107</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>+91 9842274790</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <p>Open: 06:00 AM - 11:00 PM (Daily)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Harshan Cabs</h3>
            <p>Your reliable partner for comfortable and safe journeys across Southern India.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/book-now">Book Now</Link></li>
              <li><Link to="/karnataka">Karnataka</Link></li>
              <li><Link to="/kerala">Kerala</Link></li>
              <li><Link to="/tamilnadu">Tamil Nadu</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
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
          <p>&copy; 2025 Harshan Cabs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
