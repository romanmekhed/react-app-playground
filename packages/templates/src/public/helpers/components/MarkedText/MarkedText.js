import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { useObserver } from 'hooks';

/*Make sure that you have <span> element inside your text node. Animation will be applied only to <span>*/

const MarkedText = ({ color, children }) => {
  const ref = useRef(null);
  const isIntersected = useObserver(ref, { root: null, margin: '50px' });
  const [isAnimationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    setAnimationTriggered(isIntersected);
  }, []);

  return (
    <CSSTransition
      classNames={'marked'}
      timeout={{ enter: 1000, exit: 1000 }}
      in={isAnimationTriggered}>
      <MarkedWrapper markerColor={color} ref={ref}>
        {children}
      </MarkedWrapper>
    </CSSTransition>
  );
};

const MarkedWrapper = styled.div`
  span {
    transition: background-position 1.5s ease-out;
  }
  &.marked-enter-done {
    span {
      background-size: 200% auto;
      background-image: ${({ markerColor }) =>
        `linear-gradient(to right, rgba(255, 255, 255, 0) 50%, ${markerColor} 50%);`};
      background-position: -100% 0;
    }
  }
`;

MarkedText.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MarkedText;
