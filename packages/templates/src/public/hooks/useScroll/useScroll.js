import React, { useRef } from 'react';

const useScroll = () => {
  const elRef = useRef(null);
  const executeScroll = () =>
    elRef.current.scrollIntoView({ behavior: 'smooth' });

  return [executeScroll, elRef];
};

export default useScroll;
