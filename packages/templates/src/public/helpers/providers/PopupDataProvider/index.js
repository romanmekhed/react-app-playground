import React, { createContext } from 'react';

export const PopupDataContext = createContext({});

const PopupDataProvider = ({ value, children }) => {
  return (
    <PopupDataContext.Provider value={value}>
      {children}
    </PopupDataContext.Provider>
  );
};

export default PopupDataProvider;
