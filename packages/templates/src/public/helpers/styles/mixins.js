import { css } from 'styled-components';

export const mediaMobile = (...args) => {
  return css`
    @media screen and (max-width: 767px) {
      ${css(...args)};
    }
  `;
};

export const mediaTablet = (...args) => {
  return css`
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      ${css(...args)};
    }
  `;
};

export const mediaFromTablet = (...args) => {
  return css`
    @media screen and (min-width: 768px) {
      ${css(...args)};
    }
  `;
};

export const mediaDesktop = (...args) => {
  return css`
    @media screen and (min-width: 1200px) {
      ${css(...args)};
    }
  `;
};

export const mediaToDesktop = (...args) => {
  return css`
    @media screen and (max-width: 1199px) {
      ${css(...args)};
    }
  `;
};

export const dirLtr = (...args) => {
  return css`
    html:not([dir='rtl']) & {
      ${css(...args)};
    }
  `;
};

export const dirRtl = (...args) => {
  return css`
    html[dir='rtl'] & {
      ${css(...args)};
    }
  `;
};
