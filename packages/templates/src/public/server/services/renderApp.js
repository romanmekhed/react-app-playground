import React from 'react';
import path from 'path';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';

import App from 'app';
import { getRandomInt, getTranslatesByLang, isDevelopment } from 'helpers';
import globalTranslations from 'hooks/useTextGlobal/globalTranslations';

import mockPageProps from 'helpers/mock-page-props/mock-page-props.json';

const renderApp = async (req, logMeta, next) => {
  const {
    params: { pathname },
    query: queryParams,
  } = req;
  const isHomePage = pathname === undefined;

  let responseData = {
    data: mockPageProps,
  };

  responseData.data.template.funnel_template = pathname;
  responseData.data.template.funnel_slug = pathname;
  responseData.data.template.funnel_uri = `/${pathname}`;

  const {
    data,
    data: {
      template: {
        funnel_template,
        funnel_language,
        funnel_seo_title,
        funnel_seo_desc,
        domain,
        brand_slug: brandSlug,
        funnel_slug: funnelSlug,
        funnel_atts: funnelAtts,
      },
    },
  } = responseData;

  if (isHomePage || pathname === funnelSlug) {
    const host = req.get('host');
    const webStats = path.resolve(__dirname, 'public/loadable-stats.json');
    const absoluteUrl = `${isDevelopment ? 'http' : 'https'}://${host}`;
    const webExtractor = new ChunkExtractor({
      statsFile: webStats,
    });
    const version = getRandomInt(10000);
    const sheet = new ServerStyleSheet();
    const helmetContext = {};
    const routerContext = {};
    const { default: translates } = await import(
      `../../pages/${funnel_template}/translations.js`
    ).catch((e) =>
      next({
        e,
        ...logMeta,
        message: 'Error translation.js not found',
        errorType: 'ERROR_TRANSLATION_NOT_FOUND',
        brandSlug,
        funnelSlug,
      })
    );

    const translatesByLang = getTranslatesByLang(translates, funnel_language);
    const globalTranslatesByLang = getTranslatesByLang(
      globalTranslations,
      funnel_language
    );

    const useWebp = req?.header('Accept')?.includes('image/webp');

    let jsx;
    try {
      jsx = renderToString(
        sheet.collectStyles(
          webExtractor.collectChunks(
            <HelmetProvider context={helmetContext}>
              <StaticRouter location={req.url} context={routerContext}>
                <App
                  data={data}
                  absoluteUrl={absoluteUrl}
                  version={version}
                  queryParams={queryParams}
                  translatesByLang={translatesByLang}
                  globalTranslatesByLang={globalTranslatesByLang}
                  useWebp={useWebp}
                  isHomePage={isHomePage}
                />
              </StaticRouter>
            </HelmetProvider>
          )
        )
      );
    } catch (e) {
      return next({
        e,
        ...logMeta,
        message: 'Error app rendering',
        errorType: 'ERROR_APP_RENDERING',
        brandSlug,
        funnelSlug,
      });
    }

    const styles = sheet.getStyleTags();
    const scriptTags = webExtractor.getScriptTags({ defer: '' });
    const { helmet } = helmetContext;

    return `
      <!DOCTYPE html>
      <html lang=${funnel_language === 'ea' ? 'es' : funnel_language} ${
      funnel_language === 'ar' && "dir='rtl'"
    } data-locale=${funnel_language}>
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          ${
            !funnelAtts.includes('remove_noindex')
              ? '<meta name="robots" content="noindex,nofollow">'
              : ''
          }
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
          <meta name="description" content="${funnel_seo_desc}">
          <title>${funnel_seo_title}</title>
          <link rel='shortcut icon' type='image/x-icon' href='${
            data.favicon_path
          }' />
          ${helmet.script.toString()}
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${styles}
        </head>
        <body>
          <div id="root">${jsx}</div>
          ${scriptTags}
         <script>
            window.__INITIAL__DATA__ = ${JSON.stringify({
              data,
              absoluteUrl,
              version,
              queryParams,
              translatesByLang,
              globalTranslatesByLang,
              useWebp,
              isHomePage,
            })}
        </script>
        </body>
      </html>
        `;
  }

  return null;
};

export default renderApp;
