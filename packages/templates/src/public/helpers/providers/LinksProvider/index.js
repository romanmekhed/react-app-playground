import React, { createContext } from 'react';

export const LinksContext = createContext({});

const LinksProvider = ({ value, children }) => {
  return (
    <LinksContext.Provider value={value}>{children}</LinksContext.Provider>
  );
};

export default LinksProvider;
