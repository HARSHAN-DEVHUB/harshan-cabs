import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll reactions for immersive header behavior.
  useEffect(() => {
    let lastY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const maxScrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScrollable > 0 ? Math.min((currentY / maxScrollable) * 100, 100) : 0;

        setIsScrolled(currentY > 24);
        setIsHidden(currentY > lastY && currentY > 140 && !isMenuOpen);
        setScrollProgress(progress);

        lastY = currentY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const linkClassName = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${isHidden ? 'header-hidden' : ''}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>
      <nav className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <i className="fas fa-taxi logo-icon" aria-hidden="true"></i>
            <span>Harshan Cabs</span>
          </Link>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" className={linkClassName} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/karnataka" className={linkClassName} onClick={closeMenu}>Karnataka Tours</NavLink></li>
          <li><NavLink to="/kerala" className={linkClassName} onClick={closeMenu}>Kerala Tours</NavLink></li>
          <li><NavLink to="/tamilnadu" className={linkClassName} onClick={closeMenu}>Tamil Nadu Tours</NavLink></li>
          <li><Link to="/book-now" className="cta-button" onClick={closeMenu}>Book Now</Link></li>
        </ul>
        <button
          type="button"
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
