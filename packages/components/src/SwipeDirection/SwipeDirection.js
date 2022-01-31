// TODO: make global

import React, { useRef, useEffect } from 'react';
import { handleGesture } from '../helpers';

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const SwipeDirection = ({
  children,
  onSwipeLeft = () => null,
  onSwipeRight = () => null,
  onSwipeUp = () => null,
  onSwipeDown = () => null,
  onTap = () => null,
}) => {
  const ref = useRef(null);

  const handleTouchStart = (event) => {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
  };

  const handleTouchEnd = (event) => {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    const direction = handleGesture(
      touchstartX,
      touchstartY,
      touchendX,
      touchendY
    );

    switch (direction) {
      case 'left':
        onSwipeLeft();
        break;
      case 'right':
        onSwipeRight();
        break;
      case 'up':
        onSwipeUp();
        break;
      case 'down':
        onSwipeDown();
        break;
      case 'tap':
        onTap();
        break;
    }
  };

  useEffect(() => {
    ref?.current?.addEventListener('touchstart', handleTouchStart, false);
    ref?.current?.addEventListener('touchend', handleTouchEnd, false);

    return () => {
      ref?.current?.removeEventListener('touchstart', handleTouchStart, false);
      ref?.current?.removeEventListener('touchend', handleTouchEnd, false);
    };
  }, [ref]);

  return <div ref={ref}>{children}</div>;
};

export default SwipeDirection;
