import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';

import App from 'app';

const bootstrap = () => {
  const root = document.getElementById('root');

  if (!root) {
    return;
  }

  ReactDOM.hydrate(
    <BrowserRouter>
      <App
        data={window.__INITIAL__DATA__.data}
        absoluteUrl={window.__INITIAL__DATA__.absoluteUrl}
        version={window.__INITIAL__DATA__.version}
        queryParams={window.__INITIAL__DATA__.queryParams}
        translatesByLang={window.__INITIAL__DATA__.translatesByLang}
        globalTranslatesByLang={window.__INITIAL__DATA__.globalTranslatesByLang}
        useColorForPopup={window.__INITIAL__DATA__.useColorForPopup}
        useWebp={window.__INITIAL__DATA__.useWebp}
        isHomePage={window.__INITIAL__DATA__.isHomePage}
      />
    </BrowserRouter>,
    root
  );
};

loadableReady(() => bootstrap());
