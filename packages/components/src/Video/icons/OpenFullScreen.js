import React from 'react';

const OpenFullScreen = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox='0 0 18 18'>
      <path d='M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z' />
    </svg>
  );
};

export default OpenFullScreen;
