import React from 'react';
import { createGlobalStyle } from 'styled-components';

import {
  MOBILE,
  TABLET,
  FROM_TABLET,
  DESKTOP,
  TO_DESKTOP,
} from 'helpers/styles/media';

const GlobalStyle = createGlobalStyle`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
    .modal-transition-enter {
      transition: transform 300ms;
      transform: scale(0);
    }
    .modal-transition-enter-active {
      transition: transform 300ms;
      transform: scale(1);
    }
    .modal-transition-exit {
      transition: transform 300ms;
      transform: scale(0);
    }
    
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  select,
  input {
    overflow: visible;
    outline: none;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  body {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  p,
  ul,
  ol {
    margin: 0;
  }

  .root-portal {
    position: fixed;
    z-index: 1001;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  * {
    box-sizing: border-box;
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  .desktop-only {
    @media ${TO_DESKTOP} {
      display: none !important;
    }
  }

  .to-desktop {
    @media ${DESKTOP} {
      display: none !important;
    }
  }

  .tablet-only {
    @media ${DESKTOP} {
      display: none !important;
    }
    @media ${MOBILE} {
      display: none !important;
    }
  }

  .from-tablet {
    @media ${MOBILE} {
      display: none !important;
    }
  }

  .no-tablet {
    @media ${TABLET} {
      display: none !important;
    }
  }

  .mobile-only {
    @media ${FROM_TABLET} {
      display: none !important;
    }
  }
`;

export default GlobalStyle;
