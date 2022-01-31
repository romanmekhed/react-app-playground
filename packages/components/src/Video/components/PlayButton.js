import React from 'react';
import styled, { css } from 'styled-components';

import { Icons } from '../styles';

import PauseIcon from '../icons/Pause';
import PlayIcon from '../icons/Play';

const PlayButton = ({ handleClick, isPlaying, bigButton = false }) => {
  return (
    <Wrapper onClick={handleClick} bigButton={bigButton}>
      {isPlaying ? (
        <PauseIcon width='15' height='15' fill='#fff' />
      ) : (
        <PlayIcon width='15' height='15' fill='#fff' />
      )}
    </Wrapper>
  );
};

const bigButtonStyles = css`
  position: absolute;
  top: calc(50% - 31px);
  left: calc(50% - 31px);
  width: 62px;
  height: 62px;
  background: currentColor;
  z-index: 2;
  opacity: 0.9;
  @media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    &:before {
      box-shadow: 0 0 0 10px;
    }
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    color: inherit;
    border-radius: 100%;
  }
  &:before {
    box-shadow: 0 0 0 22px;
    opacity: 0.3;
    @media screen and (max-width: 767px) {
      box-shadow: 0 0 0 15px;
    }
  }
  &:after {
    box-shadow: 0 0 0 12px;
    opacity: 0.6;
    @media screen and (max-width: 767px) {
      box-shadow: 0 0 0 8px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Wrapper = styled.div`
  ${Icons};
  width: 44px;
  height: 44px;
  background: currentColor;
  border-radius: 100%;
  transition: all 0.3s;
  color: var(--video-main-color);

  ${({ bigButton }) => (bigButton ? bigButtonStyles : null)};

  &:hover {
    ${({ bigButton }) =>
      bigButton
        ? `
          color: var(--video-main-color); 
          background: currentColor;`
        : ``};
  }
`;

export default PlayButton;
