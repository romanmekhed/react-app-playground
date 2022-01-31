import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useObserver = (ref, options, triggerOnce = false) => {
  const [isIntersected, setIntersect] = useState(true);

  const handleIntersection = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIntersect(true);
      triggerOnce && observer.disconnect();
    } else {
      setIntersect(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    ref.current && observer.observe(ref.current);
    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return isIntersected;
};

useObserver.propTypes = {
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]).isRequired,
  options: PropTypes.object.isRequired,
  triggerOnce: PropTypes.bool,
};

export default useObserver;
