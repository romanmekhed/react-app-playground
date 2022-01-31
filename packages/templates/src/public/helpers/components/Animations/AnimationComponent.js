import React from 'react';
import PropTypes from 'prop-types';
import { useAnimation } from 'hooks';
import AnimationWrapper from './AnimationWrapper';

const AnimationComponent = ({ children, animationType }) => {
  const { animationRef, isVisible } = useAnimation();
  return (
    <AnimationWrapper
      ref={animationRef}
      isVisible={isVisible}
      animationType={animationType}>
      {children}
    </AnimationWrapper>
  );
};

AnimationComponent.propTypes = {
  animationType: PropTypes.string,
};

export default AnimationComponent;
