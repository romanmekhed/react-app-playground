import React from 'react';

const CloseFullScreen = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox='0 0 18 18'>
      <path d='M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z' />
    </svg>
  );
};

export default CloseFullScreen;
