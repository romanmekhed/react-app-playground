import React, { useRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { deafultTheme } from './styles';
import { useFullScreen } from '../helpers/hooks';

import Wrapper from './components/Wrapper';
import ProgressBar from './components/ProgressBar';
import Volume from './components/Volume';
import Fullscreen from './components/Fullscreen';
import PlayButton from './components/PlayButton';
import Error from './components/Error';

const Video = ({
  src,
  width,
  height,
  poster,
  muted,
  autoPlay,
  controls = true,
  theme,
  separateMuteButton = false,
  muteButtonText,
}) => {
  const playerTheme = Object.assign(deafultTheme, theme);

  const videoRef = useRef();
  const wrapRef = useRef();
  const { toggle: toggleFullScreen, fullscreenEnabled } = useFullScreen(
    wrapRef
  );
  const [isFullscreen, setFullscreen] = useState(false);
  const [isPlaying, togglePlay] = useState(autoPlay || false);
  const [isMuted, setMuted] = useState(autoPlay ? true : muted);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const play = useCallback(() => {
    videoRef.current.play();
    togglePlay(true);
  }, []);

  const pause = useCallback(() => {
    videoRef.current.pause();
    togglePlay(false);
  }, []);

  const handlePlay = useCallback(() => {
    isPlaying ? pause() : play();
    togglePlay(!isPlaying);
  }, [isPlaying]);

  const handleTimeUpdate = ({ target: { currentTime } }) => {
    const percentageProgress = ((currentTime / duration) * 100).toFixed(2);
    if (percentageProgress >= 100) {
      pause();
      videoRef.current.currentTime = 0;
    }

    setCurrentTime(currentTime);
  };

  const handleFullscreen = () => {
    fullscreenEnabled && toggleFullScreen();
    setFullscreen(!isFullscreen);
  };

  useEffect(() => {
    videoRef.current.currentTime = currentTime;
    if (!fullscreenEnabled && isFullscreen) {
      // prevent scrolling of page when popup is active
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [!fullscreenEnabled && isFullscreen]);

  return (
    <Wrapper isInPortal={!fullscreenEnabled && isFullscreen}>
      <Wrap
        $width={width}
        $height={height}
        ref={wrapRef}
        $vars={playerTheme}
        isInPortal={!fullscreenEnabled && isFullscreen}>
        {src === '' && <Error message='Video Url is not defined' />}
        <VideoWrap>
          <StyledVideo
            ref={videoRef}
            playsInline
            src={src}
            poster={poster}
            muted={isMuted}
            autoPlay={autoPlay}
            volume={1}
            tabIndex='0'
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={({ target }) => setDuration(target.duration)}
          />
        </VideoWrap>

        <Cover onClick={handlePlay} />

        {!isPlaying && (
          <PlayButton
            handleClick={handlePlay}
            isPlaying={isPlaying}
            bigButton={true}
          />
        )}

        {separateMuteButton && (
          <Volume
            isMute={isMuted}
            handleMute={setMuted}
            isPlaying={isPlaying}
            videoRef={videoRef}
            styledWrap={Wrap}
            separate
            position={playerTheme.muteButtonPosition}
            type={playerTheme.muteButtonType}
            text={muteButtonText}
          />
        )}

        {controls && (
          <Controls isPlaying={isPlaying} onClick={(e) => e.stopPropagation()}>
            <PlayButton handleClick={handlePlay} isPlaying={isPlaying} />

            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              videoRef={videoRef}
              handleSetCurrentTime={setCurrentTime}
              handlePlay={play}
              handlePause={pause}
              isPlaying={isPlaying}
            />

            {!separateMuteButton && (
              <Volume
                isMute={isMuted}
                handleMute={setMuted}
                videoRef={videoRef}
                text={muteButtonText}
              />
            )}

            <Fullscreen
              isFullscreen={isFullscreen}
              handleClick={handleFullscreen}
            />
          </Controls>
        )}
      </Wrap>
    </Wrapper>
  );
};

const Wrap = styled.div`
  width: ${({ $width }) => $width && `${$width}px`};
  height: ${({ $height }) => $height && `${$height}px`};
  align-items: center;
  direction: ltr;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-constiant-numeric: tabular-nums;
  font-weight: 400;
  line-height: 1.7;
  max-width: 100%;
  min-width: 200px;
  position: relative;
  text-shadow: none;
  transition: box-shadow 0.3s ease;
  z-index: 0;
  background: #000;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  ${({
    $vars: {
      mainColor,
      hoverColor,
      muteButtonColor,
      muteButtonHoverColor,
      zoomOnHover,
    },
  }) =>
    `
      --video-main-color: ${mainColor};
      --video-hover-color: ${hoverColor};
      --video-mute-button-color: ${muteButtonColor};
      --video-mute-button-hover-color: ${muteButtonHoverColor};
      --video-zoom-on-hover: ${zoomOnHover ? '1.2' : '1'};
    `}
  ${({ isInPortal }) =>
    isInPortal
      ? css`
          height: 100%;
        `
      : ''};
`;

const VideoWrap = styled.div`
  background: #000;
  height: 100%;
  margin: auto;
  position: relative;
  width: 100%;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  ${Wrap}:hover & {
    display: block;
  }
`;

const StyledVideo = styled.video`
  display: block;
  height: 100%;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 10px;
  transition: opacity 0.4s ease-in-out, transform 0.3s ease-in-out;
  z-index: 3;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  text-align: center;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
  ${({ isPlaying }) => (isPlaying ? 'transform: translateY(100%);' : '')};
  ${Wrap}:hover & {
    transform: translateY(0);
  }
`;

Video.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  poster: PropTypes.string,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  theme: PropTypes.shape({
    mainColor: PropTypes.string,
    hoverColor: PropTypes.string,
    muteButtonPosition: PropTypes.string,
    muteButtonType: PropTypes.string,
    muteButtonColor: PropTypes.string,
    muteButtonHoverColor: PropTypes.string,
    zoomOnHover: PropTypes.bool,
  }),
  separateMuteButton: PropTypes.bool,
  muteButtonText: PropTypes.shape({
    mute: PropTypes.string,
    unmute: PropTypes.string,
  }),
};

export default Video;
