import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { BackgroundVideo } from '@nfs-react/components';
import { VideoContext } from 'helpers/providers/contexts';

const VideoComponent = ({ srcSet = [] }) => {
  const { video_slug: sources } = useContext(VideoContext);

  return <BackgroundVideo srcSet={srcSet} sources={sources} />;
};

VideoComponent.propTypes = {
  srcSet: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VideoComponent;
