import React from 'react';
import { ThemeProvider } from 'styled-components';

const PageThemeProvider = ({ pageTheme, children }) => (
  <ThemeProvider
    theme={{
      pageTheme,
    }}>
    {children}
  </ThemeProvider>
);

export default PageThemeProvider;
