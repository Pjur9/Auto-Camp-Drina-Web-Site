import React, { useState, useEffect, useRef } from 'react';

export const CountUp = ({ value, className = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  
  const number = parseInt(value, 10) || 0;
  const suffix = value.toString().replace(number.toString(), '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const duration = 2000;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            const currentCount = Math.floor(easeOut * number);
            setCount(currentCount);

            if (progress < 1) {
              animationRef.current = window.requestAnimationFrame(step);
            }
          };
          
          animationRef.current = window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } 
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [number]);

  return (
    <span ref={elementRef} className={className}>
      {count}{suffix}
    </span>
  );
};