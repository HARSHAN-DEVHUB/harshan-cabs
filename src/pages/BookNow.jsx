import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './BookNow.css';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropLocation: '',
    date: '',
    time: '',
    cabType: 'sedan',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resetTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required';
    }

    if (!formData.dropLocation.trim()) {
      newErrors.dropLocation = 'Drop location is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 5 seconds
      resetTimerRef.current = setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          pickupLocation: '',
          dropLocation: '',
          date: '',
          time: '',
          cabType: 'sedan',
          message: ''
        });
        setSubmitted(false);
      }, 5000);
    } else {
      setErrors(newErrors);
      // Scroll to first error
      const firstErrorField = document.querySelector('.error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const cabTypes = [
    { value: 'sedan', label: 'Sedan', icon: 'fa-car', price: '₹12/km' },
    { value: 'suv', label: 'SUV', icon: 'fa-car-side', price: '₹18/km' },
    { value: 'luxury', label: 'Luxury', icon: 'fa-car-burst', price: '₹25/km' },
    { value: 'mini', label: 'Mini', icon: 'fa-car', price: '₹10/km' }
  ];
  const ridePromises = [
    'Direct confirmation and prompt follow-up after booking.',
    'Comfort-focused travel for airport, business, or family trips.',
    'Transparent fares with easy local coordination.',
    'Drivers familiar with intercity and sightseeing routes.'
  ];

  return (
    <div className="book-now-page">
      <div className="book-now-container">
        <ScrollReveal animation="fade-up">
          <div className="booking-hero">
            <span className="booking-kicker">Reserve premium travel</span>
            <h1><i className="fas fa-taxi"></i> Book Your Ride</h1>
            <p>Tell us where you want to go and Harshan Cabs will coordinate a cleaner, calmer, more premium journey from the first call.</p>
          </div>
        </ScrollReveal>

        <div className="booking-layout">
          <aside className="booking-aside">
            <ScrollReveal animation="fade-right" delay={40}>
              <div className="booking-aside-card intro-card">
                <span>Why guests prefer this service</span>
                <h2>Travel planning that feels polished before the ride even begins.</h2>
                <p>From airport pickups to outstation tours, the booking flow is built to keep things clear and quick.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={120}>
              <div className="booking-aside-card promise-card">
                <h3>Included in the experience</h3>
                <ul>
                  {ridePromises.map((promise) => (
                    <li key={promise}>{promise}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={200}>
              <div className="booking-aside-card contact-card">
                <h3>Need a custom route?</h3>
                <p>Call <strong>+91 9842274790</strong> for temple circuits, family tours, and multi-stop intercity plans.</p>
              </div>
            </ScrollReveal>
          </aside>

          {submitted ? (
            <ScrollReveal animation="fade-left">
              <div className="success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h2>Booking Successful!</h2>
                <p>Thank you for choosing Harshan Cabs.</p>
                <p className="success-detail">We will contact you shortly at <strong>{formData.phone}</strong> to confirm your ride.</p>
                <div className="booking-summary">
                  <h3>Booking Details</h3>
                  <p><i className="fas fa-user"></i> {formData.name}</p>
                  <p><i className="fas fa-map-marker-alt"></i> {formData.pickupLocation} → {formData.dropLocation}</p>
                  <p><i className="fas fa-calendar"></i> {formData.date} at {formData.time}</p>
                  <p><i className="fas fa-car"></i> {formData.cabType.charAt(0).toUpperCase() + formData.cabType.slice(1)}</p>
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal animation="fade-left">
              <div className="booking-panel">
                <div className="panel-head">
                  <span>Select your ride</span>
                  <h2>Choose a cab type and share the journey details.</h2>
                </div>

                <div className="cab-type-selector">
                  {cabTypes.map((cab, index) => (
                    <ScrollReveal key={cab.value} animation="fade-up" delay={index * 80}>
                      <label
                        className={`cab-type-card ${formData.cabType === cab.value ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="cabType"
                          value={cab.value}
                          checked={formData.cabType === cab.value}
                          onChange={handleChange}
                        />
                        <i className={`fas ${cab.icon}`}></i>
                        <h4>{cab.label}</h4>
                        <span className="price">{cab.price}</span>
                      </label>
                    </ScrollReveal>
                  ))}
                </div>

              <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i> Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={errors.name ? 'error-input' : ''}
                  />
                  {errors.name && <span className="error"><i className="fas fa-exclamation-circle"></i> {errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i> Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={errors.email ? 'error-input' : ''}
                  />
                  {errors.email && <span className="error"><i className="fas fa-exclamation-circle"></i> {errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="fas fa-phone"></i> Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={errors.phone ? 'error-input' : ''}
                  />
                  {errors.phone && <span className="error"><i className="fas fa-exclamation-circle"></i> {errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="cabType">
                    <i className="fas fa-car"></i> Cab Type *
                  </label>
                  <select
                    id="cabType"
                    name="cabType"
                    value={formData.cabType}
                    onChange={handleChange}
                  >
                    {cabTypes.map((cab) => (
                      <option key={cab.value} value={cab.value}>
                        {cab.label} - {cab.price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pickupLocation">
                    <i className="fas fa-map-marker-alt"></i> Pickup Location *
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="Enter pickup location"
                    className={errors.pickupLocation ? 'error-input' : ''}
                  />
                  {errors.pickupLocation && <span className="error"><i className="fas fa-exclamation-circle"></i> {errors.pickupLocation}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="dropLocation">
                    <i className="fas fa-location-arrow"></i> Drop Location *
                  </label>
                  <input
                    type="text"
                    id="dropLocation"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    placeholder="Enter drop location"
                    className={errors.dropLocation ? 'error-input' : ''}
                  />
                  {errors.dropLocation && <span className="error"><i className="fas fa-exclamation-circle"></i> {errors.dropLocation}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">
                    <i className="fas fa-calendar"></i> Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={errors.date ? 'error-input' : ''}
                  />
                  {errors.date && <span className="error"><i className="fas fa-exclamation-circle"></i> {errors.date}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="time">
                    <i className="fas fa-clock"></i> Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={errors.time ? 'error-input' : ''}
                  />
                  {errors.time && <span className="error"><i className="fas fa-exclamation-circle"></i> {errors.time}</span>}
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i> Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requirements or instructions"
                  rows="4"
                ></textarea>
              </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Processing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Book Now
                    </>
                  )}
                </button>
              </form>
              </div>
            </ScrollReveal>
          )}
        </div>

        <ScrollReveal animation="fade-up" delay={40}>
          <div className="back-home">
            <Link to="/">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default BookNow;
