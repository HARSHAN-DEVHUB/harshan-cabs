import { Link } from 'react-router-dom';
import './TourPage.css';

const Kerala = () => {
  const heroImage = '/assets/kerala/hero.jpg';
  const destinationImages = {
    alleppey: '/assets/kerala/alleppey.jpg',
    munnar: '/assets/kerala/munnar.jpg',
    kochi: '/assets/kerala/kochi.jpg',
    thekkady: '/assets/kerala/thekkady.jpg',
    kovalam: '/assets/kerala/kovalam.jpg',
    wayanad: '/assets/kerala/wayanad.jpg'
  };

  return (
    <div className="tour-page">
      <div className="tour-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="tour-hero-overlay">
          <h1>Explore Kerala</h1>
          <p>Discover God's Own Country - Where Nature Meets Serenity</p>
        </div>
      </div>

      <div className="tour-content">
        <section className="tour-intro">
          <h2>Welcome to Kerala Tours</h2>
          <p>
            Kerala, known as "God's Own Country," is a tropical paradise on India's southwest coast. 
            Famous for its palm-lined beaches, backwaters, hill stations, and Ayurvedic treatments, 
            Kerala offers a unique blend of natural beauty and cultural richness. Experience the 
            tranquil houseboats, lush tea plantations, and vibrant wildlife.
          </p>
        </section>

        <section className="popular-destinations">
          <h2>Popular Destinations</h2>
          <div className="destination-cards">
            <div className="dest-card">
              <img src={destinationImages.alleppey} alt="Alleppey backwaters" loading="lazy" />
              <h3>Alleppey</h3>
              <p>Experience the magical backwaters on a traditional houseboat</p>
            </div>
            <div className="dest-card">
              <img src={destinationImages.munnar} alt="Munnar tea gardens" loading="lazy" />
              <h3>Munnar</h3>
              <p>Explore sprawling tea plantations and misty mountains</p>
            </div>
            <div className="dest-card">
              <img src={destinationImages.kochi} alt="Kochi waterfront" loading="lazy" />
              <h3>Kochi</h3>
              <p>Discover the historic port city with colonial architecture</p>
            </div>
            <div className="dest-card">
              <img src={destinationImages.thekkady} alt="Thekkady forest trails" loading="lazy" />
              <h3>Thekkady</h3>
              <p>Witness wildlife and spice plantations in Periyar</p>
            </div>
            <div className="dest-card">
              <img src={destinationImages.kovalam} alt="Kovalam beach" loading="lazy" />
              <h3>Kovalam</h3>
              <p>Relax on pristine beaches and enjoy Ayurvedic treatments</p>
            </div>
            <div className="dest-card">
              <img src={destinationImages.wayanad} alt="Wayanad hills and forests" loading="lazy" />
              <h3>Wayanad</h3>
              <p>Trek through lush forests and ancient caves</p>
            </div>
          </div>
        </section>

        <section className="tour-packages">
          <h2>Tour Packages</h2>
          <div className="package-grid">
            <div className="package-card">
              <h3>Backwaters Special</h3>
              <p className="duration">3 Days / 2 Nights</p>
              <ul>
                <li>Alleppey Houseboat</li>
                <li>Kumarakom Bird Sanctuary</li>
                <li>Village Tour</li>
                <li>Sunset Cruise</li>
              </ul>
              <Link to="/book-now" className="book-btn">Book Now</Link>
            </div>
            <div className="package-card">
              <h3>Hill Station Delight</h3>
              <p className="duration">4 Days / 3 Nights</p>
              <ul>
                <li>Munnar Tea Gardens</li>
                <li>Eravikulam National Park</li>
                <li>Mattupetty Dam</li>
                <li>Tea Museum Visit</li>
              </ul>
              <Link to="/book-now" className="book-btn">Book Now</Link>
            </div>
            <div className="package-card">
              <h3>Complete Kerala</h3>
              <p className="duration">7 Days / 6 Nights</p>
              <ul>
                <li>Kochi Heritage</li>
                <li>Munnar Hills</li>
                <li>Thekkady Wildlife</li>
                <li>Alleppey Backwaters</li>
              </ul>
              <Link to="/book-now" className="book-btn">Book Now</Link>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Experience God's Own Country?</h2>
          <p>Book your Kerala tour with Harshan Cabs for an unforgettable journey</p>
          <Link to="/book-now" className="tour-cta-button">Book Your Tour Now</Link>
        </section>
      </div>
    </div>
  );
};

export default Kerala;
