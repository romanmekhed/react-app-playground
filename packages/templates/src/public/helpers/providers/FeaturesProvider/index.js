import React, { createContext } from 'react';

export const FeaturesContext = createContext({});

const FeaturesProvider = ({ value, children }) => {
  return (
    <FeaturesContext.Provider value={value}>
      {children}
    </FeaturesContext.Provider>
  );
};

export default FeaturesProvider;
