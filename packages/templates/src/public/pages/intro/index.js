import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled, { createGlobalStyle } from 'styled-components';

import {
  IntroToRemove,
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
} from './components';

const App = () => {
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
        <IntroToRemove />
        <Question1 />
        <Question2 />
        <Question3 />
        <Question4 />
        <Question5 />
        <Question6 />
        <Question7 />
        <Question8 />
        <Question9 />
      </Wrapper>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 400;
    color: #222222;
    background: #fff;
    margin: 0;    
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
`;

export default App;
