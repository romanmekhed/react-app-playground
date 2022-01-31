import React, { useContext } from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

import { useTextGlobal } from 'hooks';
import { UrlContext } from 'helpers/providers/contexts';

export const parseScriptFromResponse = ({
  data,
  queryParams = '',
  isRegistration,
}) => {
  const evaluateScripts = ({ pixel_event: pixelEvent, code }) => {
    const parsedCode = Array.isArray(parse(code)) ? parse(code) : [parse(code)];
    const { cpid = '' } = queryParams;

    const placeByPixelEvent = () => {
      if (pixelEvent === 'Impression') {
        return 'body';
      } else {
        return 'head';
      }
    };

    parsedCode.map(({ props, type }) => {
      if (props?.children) {
        const scriptTag = document.createElement(type || 'noscript');
        const childrenElement = document.createElement(props?.children?.type);

        scriptTag.dataset.pixel = 'react';

        for (const [key, value] of Object.entries(props?.children?.props)) {
          if (key === 'style') {
            for (const [keyStyles, valueStyles] of Object.entries(value)) {
              childrenElement.style[keyStyles] = valueStyles;
            }
          } else if (value) {
            childrenElement.setAttribute(key, value);
          }
        }

        scriptTag.appendChild(childrenElement);

        return document[placeByPixelEvent()].appendChild(scriptTag);
      } else if (props?.dangerouslySetInnerHTML) {
        const scriptTag = document.createElement(type || 'script');
        const script = props?.dangerouslySetInnerHTML?.__html;

        scriptTag.innerHTML = script.replace('%CPID%', cpid);
        scriptTag.dataset.pixel = 'react';
        scriptTag.defer = true;

        return document[placeByPixelEvent()].appendChild(scriptTag);
      } else if (props?.src) {
        const scriptTag = document.createElement(type || 'script');

        scriptTag.src = props?.src;
        scriptTag.dataset.pixel = 'react';
        scriptTag.defer = true;

        return document[placeByPixelEvent()].appendChild(scriptTag);
      }
    });
  };

  data?.map((item) => {
    !isRegistration
      ? item?.pixel?.pixel_event !== 'Registration' &&
        evaluateScripts(item.pixel)
      : evaluateScripts({ pixel_event: isRegistration, code: item });
  });
};

export const preload = (component) => {
  component.preload && component.preload();
};

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const getTranslatesByLang = (translates, funnel_language) =>
  translates.find((obj) => obj.funnel_language === funnel_language);

export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

export const imgUrl = (nameWithExtension, global, webpFallback = true) => {
  const { absoluteUrl, globalAssetsUrl, version, useWebp } = useContext(
    UrlContext
  );
  const [name, extension] = nameWithExtension.split('.');

  return `url(${global ? globalAssetsUrl : absoluteUrl}/images/${name}.${
    webpFallback && useWebp ? 'webp' : extension
  }?v=${version})`;
};

export const getImgUrl = (nameWithExtension, global, webpFallback = true) => {
  const { absoluteUrl, globalAssetsUrl, version, useWebp } = useContext(
    UrlContext
  );
  const [name, extension] = nameWithExtension.split('.');

  return `${global ? globalAssetsUrl : absoluteUrl}/images/${name}.${
    webpFallback && useWebp ? 'webp' : extension
  }?v=${version}`;
};

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return isDevelopment ? (
    <ErrorFallbackDev>
      <ErrorFallbackMessage>{error.message}</ErrorFallbackMessage>
      <pre>{error.stack}</pre>
    </ErrorFallbackDev>
  ) : (
    <ErrorFallbackWrap>
      <ErrorFallbackContent>
        <h1>{useTextGlobal('popup__technicalError')}</h1>
        <Button onClick={resetErrorBoundary}>
          {useTextGlobal('popup__button')}
        </Button>
      </ErrorFallbackContent>
    </ErrorFallbackWrap>
  );
};

const ErrorFallbackDev = styled.div`
  margin: 100px auto;
  width: 50%;
  overflow: hidden;
`;

const ErrorFallbackMessage = styled.div`
  color: red;
  font-size: 28px;
  text-align: center;
`;

const ErrorFallbackWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`;

const ErrorFallbackContent = styled.div`
  width: 50%;
`;

const Button = styled.button`
  height: 50px;
  width: 100%;
  background: #0094d9;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const combineProviders = (providers) => {
  return ({ children }) => {
    return providers.reduce((tree, ProviderOrWithValue) => {
      if (Array.isArray(ProviderOrWithValue)) {
        const [Provider, value] = ProviderOrWithValue;
        return <Provider {...value}>{tree}</Provider>;
      } else {
        return <ProviderOrWithValue>{tree}</ProviderOrWithValue>;
      }
    }, children);
  };
};

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const redirectWithSleep = async (url, toggleLoader) => {
  toggleLoader(true);
  await sleep(500);
  toggleLoader(false);

  return window.location.replace(url);
};

export const getQueryStringFromObject = (queryParams) => {
  const queryKeys = Object.keys(queryParams);

  return queryKeys.length !== 0
    ? `/?${queryKeys.map((key) => key + '=' + queryParams[key]).join('&')}`
    : '';
};
