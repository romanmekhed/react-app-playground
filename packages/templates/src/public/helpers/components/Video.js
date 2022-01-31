// TODO: add ability to set custom video src and through video_slug

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Video } from '@nfs-react/components';
import { useTextGlobal } from 'hooks';
import { VideoContext } from 'helpers/providers/contexts';

const VideoComponent = ({
  _src,
  width,
  height,
  poster,
  muted,
  autoPlay = true,
  controls = true,
  theme = {},
  separateMuteButton = false,
  muteButtonText = {
    mute: useTextGlobal('mute'),
    unmute: useTextGlobal('unmute'),
  },
}) => {
  const { video_url: videoSrc } = useContext(VideoContext);

  return (
    <Video
      src={videoSrc}
      width={width}
      height={height}
      poster={poster}
      muted={muted}
      autoPlay={autoPlay}
      controls={controls}
      theme={theme}
      separateMuteButton={separateMuteButton}
      muteButtonText={muteButtonText}
    />
  );
};

VideoComponent.propTypes = {
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

export default VideoComponent;
