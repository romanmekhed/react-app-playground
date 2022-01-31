import React, { useEffect, useState } from 'react';

const useExitPopupHandler = () => {
  const [exitPopupVisible, setExitPopupState] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (e.clientY <= 0 && window.innerWidth >= 1200) {
        document.removeEventListener('mouseout', handleMouseOut);
        setExitPopupState(true);
      }
    };

    document.addEventListener('mouseout', handleMouseOut);

    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, []);

  return { exitPopupVisible, setExitPopupState };
};

export default useExitPopupHandler;
