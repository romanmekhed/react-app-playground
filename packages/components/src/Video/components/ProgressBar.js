import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getPercentFromNumber } from '../../helpers/index';

const ProgressBar = ({
  currentTime,
  duration,
  videoRef,
  handleSetCurrentTime,
  handlePlay,
  handlePause,
  isPlaying,
}) => {
  const [percentageValue, setPercentageValue] = useState(0);

  useEffect(() => {
    setPercentageValue(getPercentFromNumber(duration, currentTime));
  }, [duration, currentTime]);

  return (
    <Wrapper>
      <Progress>
        <ProgressInput
          value={currentTime}
          type='range'
          min='0'
          max={duration}
          step='0.01'
          autocomplete='off'
          onChange={(e) => {
            const { value } = e.target;

            handlePause();
            videoRef.current.currentTime = value;
            handleSetCurrentTime(value);

            isPlaying && handlePlay();
          }}
          style={{
            background: `linear-gradient(
            to right,
            var(--video-main-color) 0%,
            var(--video-main-color) ${percentageValue}%,
            #fff0 ${percentageValue}%,
            #fff0 100%)`,
          }}
        />
        <ProgressValue min='0' max={duration} value={currentTime} />
      </Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Progress = styled.div`
  width: 100%;
  position: relative;
  margin-left: 5px;
`;

const ProgressInput = styled.input`
  position: relative;
  z-index: 2;
  appearance: none;
  border: 0;
  background: 0 0;
  border-radius: 5px;
  display: block;
  height: 3px;
  margin: 0;
  min-width: 0;
  padding: 0;
  transition: box-shadow 0.3s ease;
  width: 100%;
  will-change: auto;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    border: 0;
    border-radius: 5px;
    height: 5px;
    transition: box-shadow 0.3s ease;
    user-select: none;
    background-image: linear-gradient(
      to right,
      var(--video-main-color) 0,
      transparent 0
    );
  }

  &::-webkit-slider-thumb {
    background: var(--video-main-color);
    border: 0;
    border-radius: 100%;
    box-shadow: 0 1px 1px rgba(35, 40, 47, 0.15),
      0 0 0 1px rgba(35, 40, 47, 0.2);
    height: 8px;
    position: relative;
    transition: all 0.2s ease;
    width: 8px;
    appearance: none;
    margin-top: -1.5px;
  }

  &::-moz-range-track {
    background: 0 0;
    border: 0;
    border-radius: calc(5px / 2);
    height: 5px;
    transition: box-shadow 0.3s ease;
    user-select: none;
  }

  &::-moz-range-thumb {
    background: var(--video-main-color);
    border: 0;
    border-radius: 100%;
    box-shadow: 0 1px 1px rgba(35, 40, 47, 0.15),
      0 0 0 1px rgba(35, 40, 47, 0.2);
    height: 13px;
    position: relative;
    transition: all 0.2s ease;
    width: 13px;
  }

  &::-moz-range-progress {
    background: var(--video-main-color);
    border-radius: calc(5px / 2);
    height: 5px;
  }

  &::-ms-track {
    background: 0 0;
    border: 0;
    border-radius: calc(5px / 2);
    height: 5px;
    transition: box-shadow 0.3s ease;
    user-select: none;
    color: transparent;
  }

  &::-ms-fill-upper {
    background: 0 0;
    border: 0;
    border-radius: calc(5px / 2);
    height: 5px;
    transition: box-shadow 0.3s ease;
    user-select: none;
  }

  &::-ms-fill-lower {
    background: 0 0;
    border: 0;
    border-radius: calc(5px / 2);
    height: 5px;
    transition: box-shadow 0.3s ease;
    user-select: none;
    background: currentColor;
  }

  &::-ms-thumb {
    background: var(--video-main-color);
    border: 0;
    border-radius: 100%;
    box-shadow: 0 1px 1px rgba(35, 40, 47, 0.15),
      0 0 0 1px rgba(35, 40, 47, 0.2);
    height: 13px;
    position: relative;
    transition: all 0.2s ease;
    width: 13px;
    margin-top: 0;
  }

  &::-ms-tooltip {
    display: none;
  }

  &:focus {
    outline: 0;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &:active::-webkit-slider-thumb {
    box-shadow: 0 1px 1px rgba(35, 40, 47, 0.15),
      0 0 0 1px rgba(35, 40, 47, 0.2), 0 0 0 3px rgba(255, 255, 255, 0.5);
  }

  &:active::-moz-range-thumb {
    box-shadow: 0 1px 1px rgba(35, 40, 47, 0.15),
      0 0 0 1px rgba(35, 40, 47, 0.2), 0 0 0 3px rgba(255, 255, 255, 0.5);
  }

  &:active::-ms-thumb {
    box-shadow: 0 1px 1px rgba(35, 40, 47, 0.15),
      0 0 0 1px rgba(35, 40, 47, 0.2), 0 0 0 3px rgba(255, 255, 255, 0.5);
  }
`;

const ProgressValue = styled.progress`
  width: 100%;
  background: 0 0;
  border: 0;
  border-radius: 5px;
  height: 3px;
  left: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  color: hsla(0, 0%, 100%, 0.25);
  margin: -1.5px 0;
  appearance: none;

  &::-webkit-progress-value {
    border-radius: 5px;
    background: hsla(0, 0%, 100%, 0.25);
  }
  &::-moz-progress-bar {
    border-radius: 5px;
    background: hsla(0, 0%, 100%, 0.25);
  }
  &::-webkit-progress-bar {
    border-radius: 5px;
    background: hsla(0, 0%, 100%, 0.25);
  }
`;

export default ProgressBar;
