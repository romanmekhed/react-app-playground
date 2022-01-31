import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

import { Icons } from '../styles';
import VolumeIcon from '../icons/Volume';
import MuteIcon from '../icons/Mute';

const Volume = ({
  separate,
  position,
  type = 'small',
  isMute,
  handleMute,
  videoRef,
  styledWrap,
  isPlaying,
  text = { mute: 'Mute', unmute: 'Unmute' },
}) => {
  const toggleMute = useCallback(
    (e) => {
      e.stopPropagation();
      handleMute(!isMute);
      videoRef.current.muted = !videoRef.current.muted;
    },
    [isMute]
  );

  return (
    <Wrapper
      onClick={toggleMute}
      $vars={{ separate, position, type }}
      styledWrap={styledWrap}
      isMute={isMute}
      isPlaying={isPlaying}>
      {isMute ? (
        <>
          <MuteIcon width='18' height='18' fill='#fff' />
          {type === 'big' && <span>{text.unmute}</span>}
        </>
      ) : (
        <>
          <VolumeIcon width='18' height='18' fill='#fff' />
          {type === 'big' && <span>{text.mute}</span>}
        </>
      )}
    </Wrapper>
  );
};

const separatePositions = {
  'top-left': css`
    top: 23px;
    left: 23px;
    @media screen and (max-width: 767px) {
      top: 10px;
      left: 10px;
    }
  `,
  'top-right': css`
    top: 23px;
    right: 23px;
    @media screen and (max-width: 767px) {
      top: 10px;
      right: 10px;
    }
  `,
  'bottom-left': css`
    bottom: 23px;
    left: 23px;
    @media screen and (max-width: 767px) {
      bottom: 10px;
      left: 10px;
    }
  `,
  'bottom-right': css`
    bottom: 23px;
    right: 23px;
    @media screen and (max-width: 767px) {
      bottom: 10px;
      right: 10px;
    }
  `,
};

const separateTypesCss = {
  big: css`
    width: auto;
    min-height: 57px;
    min-width: 177px;
    padding: 5px 10px;
    border-radius: 5px;
    background: var(--video-mute-button-color);
    color: #000;
    font-size: 20px;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: var(--video-mute-button-hover-color);
      }
    }

    &:active {
      background: var(--video-mute-button-hover-color);
    }

    @media screen and (max-width: 767px) {
      min-height: 30px;
      min-width: 110px;
      font-size: 16px;
    }
    svg {
      fill: currentColor;
    }
  `,
  small: css`
    min-width: 70px;
    min-height: 70px;
    background: var(--video-main-color);
    @media screen and (max-width: 767px) {
      min-height: 44px;
      min-width: 44px;
      svg {
        width: 20px;
      }
    }
  `,
};

const Wrapper = styled.div`
  ${Icons};
  border-radius: 100%;
  ${({ $vars: { separate, position, type }, styledWrap, isMute, isPlaying }) =>
    separate
      ? `
    position: absolute;  
    ${position in separatePositions ? separatePositions[position] : ''}
    ${type in separateTypesCss ? separateTypesCss[type] : ''}
    ${!isMute ? 'opacity: 0;' : ''}
    ${styledWrap}:hover & {
      opacity: 1;
    }
    ${!isPlaying ? 'opacity: 1;' : ''}
    svg {
      width: 26px;
      height: 26px;
      @media screen and (max-width: 767px) {
        width: 18px;
        height: 18px;
      }
    }
  `
      : null};
  span {
    margin-left: 10px;
    font-weight: 600;
    font-family: system-ui;
  }
`;

export default Volume;
