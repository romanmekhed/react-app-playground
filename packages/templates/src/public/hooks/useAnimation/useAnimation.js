import React, { useEffect, useRef, useState } from 'react';

const useAnimation = () => {
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      // hack to wait until element appears at dom with styles
      setTimeout(() => setIsVisible(true), 0);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    animationRef.current && observer.observe(animationRef.current);

    return () => {
      animationRef.current && observer.unobserve(animationRef.current);
    };
  }, [animationRef, options]);

  return { isVisible, animationRef };
};

export default useAnimation;
