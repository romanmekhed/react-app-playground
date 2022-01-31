import React from 'react';
import { Helmet } from 'react-helmet-async';
import LazyHydrate from 'react-lazy-hydration';
import styled, { createGlobalStyle } from 'styled-components';

import { useWindowSize } from 'hooks';

import { TABLET } from 'helpers/styles/media';

import { Top, Form, Access, Article } from './components';

const App = () => {
  const { width } = useWindowSize();

  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
          crossOrigin
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <GlobalStyles />

      <Wrapper>
        <LazyHydrate whenVisible>
          <Top />
        </LazyHydrate>
        <LazyHydrate whenIdle>
          <Form />
        </LazyHydrate>
        <LazyHydrate ssrOnly>
          <Access />
        </LazyHydrate>
        <Article />
      </Wrapper>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.FF_MONTSERRAT};
    font-size: 16px;
    line-height: 1.26;
    font-weight: 400;
    color: #000;
    background: #fff;
    margin: 0;    

    @media ${TABLET} {
      background: #f1f1f1;
      padding-bottom: 20px;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
`;

export default App;
