import { Link } from 'react-router-dom';
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
        <div className="tour-hero-overlay">
          <h1>Explore Tamil Nadu</h1>
          <p>Discover the Land of Temples and Rich Cultural Heritage</p>
        </div>
      </div>

      <div className="tour-content">
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

        <section className="popular-destinations">
          <h2>Popular Destinations</h2>
          <div className="destination-cards">
            <div className="dest-card">
              <img src={destinationImages.madurai} alt="Madurai temple" loading="lazy" />
              <h3>Madurai</h3>
              <p>Visit the iconic Meenakshi Amman Temple and ancient city</p>
            </div>
            <div className="dest-card">
              <img src={destinationImages.ooty} alt="Ooty hills" loading="lazy" />
              <h3>Ooty</h3>
              <p>Experience the Queen of Hill Stations with scenic beauty</p>
            </div>
            <div className="dest-card">
              <img src={destinationImages.rameswaram} alt="Rameswaram coast" loading="lazy" />
              <h3>Rameswaram</h3>
              <p>Explore the sacred island and Ramanathaswamy Temple</p>
            </div>
            <div className="dest-card">
              <img src={destinationImages.kodaikanal} alt="Kodaikanal lake" loading="lazy" />
              <h3>Kodaikanal</h3>
              <p>Enjoy the Princess of Hill Stations and beautiful lakes</p>
            </div>
            <div className="dest-card">
              <img src={destinationImages.mahabalipuram} alt="Mahabalipuram shore temple" loading="lazy" />
              <h3>Mahabalipuram</h3>
              <p>Marvel at UNESCO World Heritage rock-cut temples</p>
            </div>
            <div className="dest-card">
              <img src={destinationImages.pondicherry} alt="Pondicherry French quarter" loading="lazy" />
              <h3>Pondicherry</h3>
              <p>Experience French colonial charm and Auroville</p>
            </div>
          </div>
        </section>

        <section className="tour-packages">
          <h2>Tour Packages</h2>
          <div className="package-grid">
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
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Explore Tamil Nadu?</h2>
          <p>Book your Tamil Nadu tour with Harshan Cabs for a journey through history and culture</p>
          <Link to="/book-now" className="tour-cta-button">Book Your Tour Now</Link>
        </section>
      </div>
    </div>
  );
};

export default TamilNadu;
