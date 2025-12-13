import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="taxi-animation">
          <i className="fas fa-taxi"></i>
        </div>
        <h2>Harshan Cabs</h2>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p>Loading your journey...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
