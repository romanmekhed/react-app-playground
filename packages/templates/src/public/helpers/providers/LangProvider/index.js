import React, { createContext } from 'react';

export const LangContext = createContext({});

const LangProvider = ({ value, children }) => {
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export default LangProvider;
