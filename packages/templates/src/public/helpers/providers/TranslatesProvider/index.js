import React, { createContext } from 'react';

export const TranslatesContext = createContext({});

const TranslatesProvider = ({ value, children }) => {
  return (
    <TranslatesContext.Provider value={value}>
      {children}
    </TranslatesContext.Provider>
  );
};

export default TranslatesProvider;
