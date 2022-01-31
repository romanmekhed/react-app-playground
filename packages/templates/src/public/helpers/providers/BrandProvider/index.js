import React, { createContext } from 'react';

export const BrandContext = createContext({});

const BrandProvider = ({ value, children }) => {
  return (
    <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
  );
};

export default BrandProvider;
