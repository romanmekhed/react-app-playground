import React, { createContext } from 'react';

export const HomePagesContext = createContext({});

const HomePagesProvider = ({ value, children }) => {
  return (
    <HomePagesContext.Provider value={value}>
      {children}
    </HomePagesContext.Provider>
  );
};

export default HomePagesProvider;
