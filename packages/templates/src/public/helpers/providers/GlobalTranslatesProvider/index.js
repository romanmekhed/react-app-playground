import React, { createContext } from 'react';

export const GlobalTranslatesContext = createContext({});

const GlobalTranslatesProvider = ({ value, children }) => {
  return (
    <GlobalTranslatesContext.Provider value={value}>
      {children}
    </GlobalTranslatesContext.Provider>
  );
};

export default GlobalTranslatesProvider;
