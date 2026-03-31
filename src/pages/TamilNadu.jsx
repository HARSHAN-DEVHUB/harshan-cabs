import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './TourPage.css';

const TamilNadu = () => {
  const heroImage = '/assets/tamilnadu/hero.jpg';
  const destinationImages = {
    madurai: '/assets/tamilnadu/madurai.jpg',
    ooty: '/assets/tamilnadu/ooty.jpg',
    rameswaram: '/assets/tamilnadu/rameswaram.jpg',
    kodaikanal: '/assets/tamilnadu/kodaikanal.jpg',
    mahabalipuram: '/assets/tamilnadu/mahabalipuram.jpg',
    pondicherry: '/assets/tamilnadu/pondicherry.jpg'
  };

  return (
    <div className="tour-page">
      <div className="tour-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <ScrollReveal animation="fade-up">
          <div className="tour-hero-overlay">
            <h1>Explore Tamil Nadu</h1>
            <p>Discover the Land of Temples and Rich Cultural Heritage</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="tour-content">
        <ScrollReveal animation="fade-up">
          <section className="tour-intro">
            <h2>Welcome to Tamil Nadu Tours</h2>
            <p>
              Tamil Nadu, the land of Tamils, is a state steeped in history and culture. Home to
              magnificent Dravidian temples, pristine beaches, and verdant hill stations, Tamil Nadu
              offers diverse experiences. From the ancient temples of Madurai and Thanjavur to the
              colonial charm of Pondicherry and the serene hills of Ooty, discover the timeless
              beauty of South India.
            </p>
          </section>
        </ScrollReveal>

        <section className="popular-destinations">
          <ScrollReveal animation="fade-up">
            <h2>Popular Destinations</h2>
          </ScrollReveal>
          <div className="destination-cards">
            <ScrollReveal animation="fade-up" delay={40}>
              <div className="dest-card">
                <img src={destinationImages.madurai} alt="Madurai temple" loading="lazy" />
                <h3>Madurai</h3>
                <p>Visit the iconic Meenakshi Amman Temple and ancient city</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="dest-card">
                <img src={destinationImages.ooty} alt="Ooty hills" loading="lazy" />
                <h3>Ooty</h3>
                <p>Experience the Queen of Hill Stations with scenic beauty</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={160}>
              <div className="dest-card">
                <img src={destinationImages.rameswaram} alt="Rameswaram coast" loading="lazy" />
                <h3>Rameswaram</h3>
                <p>Explore the sacred island and Ramanathaswamy Temple</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={220}>
              <div className="dest-card">
                <img src={destinationImages.kodaikanal} alt="Kodaikanal lake" loading="lazy" />
                <h3>Kodaikanal</h3>
                <p>Enjoy the Princess of Hill Stations and beautiful lakes</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={280}>
              <div className="dest-card">
                <img src={destinationImages.mahabalipuram} alt="Mahabalipuram shore temple" loading="lazy" />
                <h3>Mahabalipuram</h3>
                <p>Marvel at UNESCO World Heritage rock-cut temples</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={340}>
              <div className="dest-card">
                <img src={destinationImages.pondicherry} alt="Pondicherry French quarter" loading="lazy" />
                <h3>Pondicherry</h3>
                <p>Experience French colonial charm and Auroville</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="tour-packages">
          <ScrollReveal animation="fade-up">
            <h2>Tour Packages</h2>
          </ScrollReveal>
          <div className="package-grid">
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="package-card">
                <h3>Temple Circuit</h3>
                <p className="duration">4 Days / 3 Nights</p>
                <ul>
                  <li>Madurai Meenakshi Temple</li>
                  <li>Thanjavur Big Temple</li>
                  <li>Trichy Rock Fort</li>
                  <li>Chidambaram Temple</li>
                </ul>
                <Link to="/book-now" className="book-btn">Book Now</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={120}>
              <div className="package-card">
                <h3>Hill Station Escape</h3>
                <p className="duration">3 Days / 2 Nights</p>
                <ul>
                  <li>Ooty Botanical Gardens</li>
                  <li>Toy Train Ride</li>
                  <li>Doddabetta Peak</li>
                  <li>Tea Factory Visit</li>
                </ul>
                <Link to="/book-now" className="book-btn">Book Now</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={190}>
              <div className="package-card">
                <h3>Coastal Heritage</h3>
                <p className="duration">5 Days / 4 Nights</p>
                <ul>
                  <li>Mahabalipuram Temples</li>
                  <li>Pondicherry French Quarter</li>
                  <li>Auroville</li>
                  <li>Marina Beach</li>
                </ul>
                <Link to="/book-now" className="book-btn">Book Now</Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <ScrollReveal animation="fade-up">
          <section className="cta-section">
            <h2>Ready to Explore Tamil Nadu?</h2>
            <p>Book your Tamil Nadu tour with Harshan Cabs for a journey through history and culture</p>
            <Link to="/book-now" className="tour-cta-button">Book Your Tour Now</Link>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default TamilNadu;
