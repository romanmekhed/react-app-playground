import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import {
  GlobalHeader,
  GlobalFooter,
  Disclaimer,
  CookiePopUp,
} from '@nfs-react/components';
import LazyHydrate from 'react-lazy-hydration';
import { ErrorBoundary } from 'react-error-boundary';

import GlobalStyle from '../globalstyle/globalStyle';
import {
  ErrorFallback,
  parseScriptFromResponse,
  preload,
  imgUrl,
  combineProviders,
} from 'helpers';

import {
  mediaMobile,
  mediaTablet,
  mediaFromTablet,
  mediaDesktop,
  mediaToDesktop,
  dirLtr,
  dirRtl,
} from 'helpers/styles/mixins';
import variables from 'helpers/styles/variables';
import {
  PageFormProvider,
  CmsProvider,
  FeaturesProvider,
  VideoProvider,
  UrlProvider,
  LangProvider,
  AllowedCountryProvider,
  TemplateNameProvider,
  TranslatesProvider,
  GlobalTranslatesProvider,
  GdprProvider,
  PopupDataProvider,
  BrandProvider,
  LinksProvider,
  HomePagesProvider,
} from 'helpers/providers';

const App = ({
  data: {
    template: {
      funnel_template,
      content,
      funnel_atts,
      funnel_language,
      back_button_uri,
      funnel_uri,
      brand_slug: brandSlug,
      links,
      funnel_logo: funnelLogo,
      funnel_background_color: funnelBackgroundColor,
      funnel_background_image: funnelBackgroundImage,
    },
    video_url,
    video_slug,
    allowed_country,
    footer,
    header,
    gdpr,
    thank_you_popup,
    cookie_policy_popup,
    misrepresentation,
  },
  absoluteUrl,
  version,
  queryParams,
  translatesByLang,
  globalTranslatesByLang,
  useWebp,
  isHomePage,
}) => {
  const fallback = <div>loading....</div>;
  const Component = loadable(() => import(`./${funnel_template}/index.js`), {
    fallback,
  });
  const [reset, setReset] = useState(false);

  const routes = [
    {
      path: funnel_uri,
      Component,
    },
  ];

  const urlProviderConfigs = {
    value: {
      absoluteUrl: `${absoluteUrl}/static/resources/${funnel_template}`,
      globalAssetsUrl: `${absoluteUrl}/static/resources/globalAssets`,
      version,
      useWebp,
    },
  };

  const themeConfigs = {
    mediaMobile,
    mediaTablet,
    mediaFromTablet,
    mediaDesktop,
    mediaToDesktop,
    dirLtr,
    dirRtl,
    imgUrl,
    brandSlug,
    hasGdpr: gdpr?.enabled,
    lang: funnel_language,
    ...variables,
  };

  const GlobalProviders = combineProviders([
    [UrlProvider, urlProviderConfigs],
    [CmsProvider, { value: content?.step1 }],
    [GlobalTranslatesProvider, { value: globalTranslatesByLang }],
    [PopupDataProvider, { value: thank_you_popup }],
    [BrandProvider, { value: brandSlug }],
    [ThemeProvider, { theme: themeConfigs }],
    [LinksProvider, { value: { links, queryParams } }],
  ]);

  const FormSpecificProviders = combineProviders([
    [AllowedCountryProvider, { value: allowed_country }],
    [GdprProvider, { value: gdpr && gdpr?.consentData?.length !== 0 && gdpr }],
    PageFormProvider,
  ]);

  const PageSpecificProviders = combineProviders([
    [FeaturesProvider, { value: funnel_atts }],
    [LangProvider, { value: { funnel_language } }],
    [VideoProvider, { value: { video_url, video_slug } }],
    [TemplateNameProvider, { value: funnel_template }],
    [TranslatesProvider, { value: translatesByLang }],
    [
      HomePagesProvider,
      { value: { funnelLogo, funnelBackgroundImage, funnelBackgroundColor } },
    ],
    HelmetProvider,
  ]);

  return (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          render={(props) => (
            <GlobalProviders>
              <FormSpecificProviders>
                <PageSpecificProviders>
                  <GlobalStyle />
                  <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => setReset(false)}
                    resetKeys={[reset]}>
                    {!reset && (
                      <>
                        {!isHomePage && header && (
                          <GlobalHeader
                            data={header}
                            globalAssetsUrl={`${absoluteUrl}/static/resources/globalAssets`}
                          />
                        )}
                        <route.Component {...props} />
                        {!isHomePage && misrepresentation?.enabled && (
                          <LazyHydrate ssrOnly>
                            <Disclaimer text={misrepresentation?.data} />
                          </LazyHydrate>
                        )}
                        {!isHomePage && cookie_policy_popup?.enabled && (
                          <LazyHydrate whenVisible>
                            <CookiePopUp text={cookie_policy_popup?.data} />
                          </LazyHydrate>
                        )}
                        {!isHomePage && footer && footer?.length !== 0 && (
                          <LazyHydrate ssrOnly>
                            <GlobalFooter data={footer} />
                          </LazyHydrate>
                        )}
                      </>
                    )}
                  </ErrorBoundary>
                </PageSpecificProviders>
              </FormSpecificProviders>
            </GlobalProviders>
          )}
        />
      ))}
    </Switch>
  );
};

App.propTypes = {
  data: PropTypes.shape({
    template: PropTypes.shape(
      {
        funnel_uri: PropTypes.string,
        funnel_template: PropTypes.string,
        content: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        funnel_atts: PropTypes.array,
        funnel_language: PropTypes.string,
        back_button_uri: PropTypes.oneOfType([
          PropTypes.array,
          PropTypes.object,
        ]),
      },
      {
        video_url: PropTypes.array,
        video_slug: PropTypes.array,
        allowed_country: PropTypes.object,
        footer: PropTypes.object,
        header: PropTypes.object,
        gdpr: PropTypes.object,
      }
    ).isRequired,
  }),
  absoluteUrl: PropTypes.string.isRequired,
  version: PropTypes.number.isRequired,
  queryParams: PropTypes.object.isRequired,
  translatesByLang: PropTypes.object.isRequired,
  globalTranslatesByLang: PropTypes.object.isRequired,
  useWebp: PropTypes.bool.isRequired,
};

export default App;
