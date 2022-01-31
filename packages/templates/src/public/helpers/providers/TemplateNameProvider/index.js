import React, { createContext } from 'react';

export const TemplateNameContext = createContext({});

const TemplateNameProvider = ({ value, children }) => {
  return (
    <TemplateNameContext.Provider value={value}>
      {children}
    </TemplateNameContext.Provider>
  );
};

export default TemplateNameProvider;
