import React, { createContext } from 'react';

export const VideoContext = createContext({});

const VideoProvider = ({ value, children }) => {
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

export default VideoProvider;
