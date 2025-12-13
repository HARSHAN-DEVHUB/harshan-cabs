import { Link } from 'react-router-dom';
import './TourPage.css';

const Karnataka = () => {
  return (
    <div className="tour-page">
      <div className="tour-hero" style={{ backgroundImage: 'url(/assets/karnataka/mysore-palace.jpg)' }}>
        <div className="tour-hero-overlay">
          <h1>Explore Karnataka</h1>
          <p>Discover the rich heritage and natural beauty of Karnataka</p>
        </div>
      </div>

      <div className="tour-content">
        <section className="tour-intro">
          <h2>Welcome to Karnataka Tours</h2>
          <p>
            Karnataka, a state in southwest India, is known for its rich cultural heritage, 
            magnificent palaces, ancient temples, and diverse landscapes. From the tech hub 
            of Bangalore to the historical ruins of Hampi, Karnataka offers a perfect blend 
            of modernity and tradition.
          </p>
        </section>

        <section className="popular-destinations">
          <h2>Popular Destinations</h2>
          <div className="destination-cards">
            <div className="dest-card">
              <img src="/assets/karnataka/mysore.jpg" alt="Mysore" />
              <h3>Mysore</h3>
              <p>Visit the magnificent Mysore Palace and experience the royal heritage</p>
            </div>
            <div className="dest-card">
              <img src="/assets/karnataka/hampi.jpg" alt="Hampi" />
              <h3>Hampi</h3>
              <p>Explore the UNESCO World Heritage Site with ancient ruins and temples</p>
            </div>
            <div className="dest-card">
              <img src="/assets/karnataka/coorg.jpg" alt="Coorg" />
              <h3>Coorg</h3>
              <p>Enjoy the coffee plantations and misty hills of Scotland of India</p>
            </div>
            <div className="dest-card">
              <img src="/assets/karnataka/bangalore.jpg" alt="Bangalore" />
              <h3>Bangalore</h3>
              <p>Experience the vibrant IT capital with gardens and modern attractions</p>
            </div>
            <div className="dest-card">
              <img src="/assets/karnataka/gokarna.jpg" alt="Gokarna" />
              <h3>Gokarna</h3>
              <p>Relax on pristine beaches and visit ancient temples</p>
            </div>
            <div className="dest-card">
              <img src="/assets/karnataka/belur.jpg" alt="Belur-Halebidu" />
              <h3>Belur & Halebidu</h3>
              <p>Marvel at the intricate Hoysala architecture</p>
            </div>
          </div>
        </section>

        <section className="tour-packages">
          <h2>Tour Packages</h2>
          <div className="package-grid">
            <div className="package-card">
              <h3>Mysore-Coorg Package</h3>
              <p className="duration">3 Days / 2 Nights</p>
              <ul>
                <li>Mysore Palace</li>
                <li>Chamundi Hills</li>
                <li>Coffee Plantations</li>
                <li>Abbey Falls</li>
              </ul>
              <Link to="/book-now" className="book-btn">Book Now</Link>
            </div>
            <div className="package-card">
              <h3>Heritage Tour</h3>
              <p className="duration">4 Days / 3 Nights</p>
              <ul>
                <li>Hampi Ruins</li>
                <li>Badami Caves</li>
                <li>Pattadakal Temples</li>
                <li>Aihole Monuments</li>
              </ul>
              <Link to="/book-now" className="book-btn">Book Now</Link>
            </div>
            <div className="package-card">
              <h3>Beach & Temple Tour</h3>
              <p className="duration">2 Days / 1 Night</p>
              <ul>
                <li>Gokarna Beaches</li>
                <li>Mahabaleshwar Temple</li>
                <li>Om Beach</li>
                <li>Paradise Beach</li>
              </ul>
              <Link to="/book-now" className="book-btn">Book Now</Link>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Explore Karnataka?</h2>
          <p>Book your Karnataka tour with Harshan Cabs for a comfortable and memorable journey</p>
          <Link to="/book-now" className="cta-button">Book Your Tour Now</Link>
        </section>
      </div>
    </div>
  );
};

export default Karnataka;
