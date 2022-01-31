import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PopupPortal from '../../PopupPortal/PopupPortal';

const Wrapper = ({ children, isInPortal }) => {
  return isInPortal ? (
    <PopupPortal>
      {/* portal used for devices where fullscreen for dom el is not supported (e.g. safari) */}
      <Inner isInPortal>{children}</Inner>
    </PopupPortal>
  ) : (
    <Inner>{children}</Inner>
  );
};

const Inner = styled.div`
  position: relative;
  ${({ isInPortal }) =>
    isInPortal
      ? css`
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: #000;
          z-index: 9999999;
          width: auto;
          display: flex;
        `
      : ''}
`;

export default Wrapper;
