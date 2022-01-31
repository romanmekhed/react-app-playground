import React, { useState, useEffect } from 'react';

const useFullScreen = (elRef) => {
  const initialState = !process.env.__isBrowser__
    ? false
    : isFullScreenElement(elRef);
  const [fullScreen, setFullScreen] = useState(false);
  const [fullscreenEnabled, setFullscreenEnabled] = useState(false);

  const openFullScreen = () => {
    const el = (elRef && elRef.current) || document.documentElement;

    if (el.requestFullscreen) return el.requestFullscreen();
    if (el.enterFullscreen) return el.enterFullscreen();
    if (el.mozRequestFullScreen) return el.mozRequestFullScreen();
    if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
    if (el.webkitEnterFullscreen) return el.webkitEnterFullscreen();
    if (el.msRequestFullscreen) return el.msRequestFullscreen();
  };

  function closeFullScreen() {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
  }

  useEffect(() => {
    const handleChange = () => {
      setFullScreen(isFullScreenElement(elRef));
    };

    setFullscreenEnabled(isFullScreenElement());

    document.addEventListener('webkitfullscreenchange', handleChange, false);
    document.addEventListener('mozfullscreenchange', handleChange, false);
    document.addEventListener('msfullscreenchange', handleChange, false);
    document.addEventListener('MSFullscreenChange', handleChange, false); // IE11
    document.addEventListener('fullscreenchange', handleChange, false);
    return () => {
      document.removeEventListener('webkitfullscreenchange', handleChange);
      document.removeEventListener('mozfullscreenchange', handleChange);
      document.removeEventListener('msfullscreenchange', handleChange);
      document.removeEventListener('MSFullscreenChange', handleChange);
      document.removeEventListener('fullscreenchange', handleChange);
    };
  }, [elRef]);

  return {
    fullScreen,
    open: openFullScreen,
    close: closeFullScreen,
    toggle: fullScreen ? closeFullScreen : openFullScreen,
    fullscreenEnabled,
  };
};

const isFullScreenElement = (el) => {
  if (el && el.current) {
    return Boolean(
      document.fullscreenElement === el.current ||
        document.mozFullScreenElement === el.current ||
        document.webkitFullscreenElement === el.current ||
        document.msFullscreenElement === el.current
    );
  }

  return Boolean(
    document.fullscreenEnabled ||
      document.mozFullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.msFullscreenEnabled
  );
};

export default useFullScreen;
