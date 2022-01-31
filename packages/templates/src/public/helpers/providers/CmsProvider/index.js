import React, { createContext } from 'react';

export const CmsContext = createContext({});

const CmsProvider = ({ value, children }) => (
  <CmsContext.Provider value={value}>{children}</CmsContext.Provider>
);

export default CmsProvider;
