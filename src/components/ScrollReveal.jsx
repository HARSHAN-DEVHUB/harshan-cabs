import { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

const ScrollReveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.2,
  rootMargin = '0px 0px -8% 0px'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${animation} ${isVisible ? 'visible' : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
