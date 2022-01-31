import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = ({ srcSet, sources }) => {
  const videoRef = useRef(null);
  const [activeSrc, setActiveSrc] = useState('');
  const previousUrl = useRef(activeSrc);

  useEffect(() => {
    if (previousUrl.current === activeSrc) return;

    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = activeSrc;
  }, [activeSrc]);

  useEffect(() => {
    srcSet.map(({ media, slug }) => {
      const mediaQueryList = window.matchMedia(media);

      if (mediaQueryList.matches) {
        setActiveSrc(sources[slug]);
      }

      mediaQueryList.addEventListener('change', (event) => {
        if (event.matches) {
          setActiveSrc(sources[slug]);
        }
      });
    });
  }, []);

  return (
    <Wrapper>
      <VideoPlayer ref={videoRef} autoPlay muted loop playsInline>
        <source src={activeSrc} type='video/mp4' />
      </VideoPlayer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const VideoPlayer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  object-fit: cover;
  object-position: center;
`;

Video.propTypes = {
  srcSet: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
    })
  ).isRequired,
  sources: PropTypes.object,
};

export default Video;
