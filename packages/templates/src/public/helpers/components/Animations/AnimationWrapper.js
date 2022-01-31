import styled, { css } from 'styled-components';
import animations from './animations';

const AnimationWrapper = styled.div`
  opacity: 0;
  ${({ isVisible, animationType = 'fadeIn' }) =>
    isVisible ? animations[animationType] : ''};
`;

export default AnimationWrapper;
