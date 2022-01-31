import { useScroll } from 'hooks';

import React, { createContext } from 'react';

export const PageFormContext = createContext(null);

export const PageFormProvider = ({ children }) => {
  const [scrollToPageForm, pageFormRef] = useScroll();

  return (
    <PageFormContext.Provider value={{ pageFormRef, scrollToPageForm }}>
      {children}
    </PageFormContext.Provider>
  );
};

export default PageFormProvider;
