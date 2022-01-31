import React, { createContext } from 'react';

export const AllowedCountryContext = createContext({});

const AllowedCountryProvider = ({ value, children }) => {
  return (
    <AllowedCountryContext.Provider value={value}>
      {children}
    </AllowedCountryContext.Provider>
  );
};

export default AllowedCountryProvider;
