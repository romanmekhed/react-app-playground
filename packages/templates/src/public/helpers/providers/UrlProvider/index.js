import React, { createContext } from 'react';

export const UrlContext = createContext({});

const UrlProvider = ({ value, children }) => {
  return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
};

export default UrlProvider;
