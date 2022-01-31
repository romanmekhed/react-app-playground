import React, { createContext } from 'react';

export const GdprContext = createContext({});

const GdprProvider = ({ value, children }) => {
  return <GdprContext.Provider value={value}>{children}</GdprContext.Provider>;
};

export default GdprProvider;
