import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 10px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  ${({ theme: { mediaDesktop } }) => mediaDesktop`
    padding-inline-end: ${(props) => (props.isSticky ? '440px' : '10px')};
  `};
  ${({ theme: { mediaTablet } }) => mediaTablet`
    max-width: 768px;
    padding: 0 9px;
  `}
  ${({ theme: { mediaMobile } }) => mediaMobile`
    max-width: 360px;
    padding-right: 10px;
  `}
`;

Container.propTypes = {
  isSticky: PropTypes.bool,
};

export default Container;
