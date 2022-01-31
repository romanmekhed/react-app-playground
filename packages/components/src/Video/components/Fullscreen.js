import React from 'react';
import styled from 'styled-components';
import { Icons } from '../styles';

import OpenFullScreenIcon from '../icons/OpenFullScreen';
import CloseFullScreenIcon from '../icons/CloseFullScreen';

const Fullscreen = ({ isFullscreen, handleClick }) => {
  return (
    <Wrapper onClick={handleClick}>
      {isFullscreen ? (
        <CloseFullScreenIcon width='18' height='18' fill='#fff' />
      ) : (
        <OpenFullScreenIcon width='18' height='18' fill='#fff' />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Icons};
`;

export default Fullscreen;
