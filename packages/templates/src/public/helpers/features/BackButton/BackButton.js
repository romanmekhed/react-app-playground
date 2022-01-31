export const initializeBackButton = (url) => {
  history.replaceState(null, document.title, `${location.pathname}#!/back`);
  history.pushState(null, document.title, location.pathname);

  window.addEventListener(
    'popstate',
    () => {
      if (location.hash === '#!/back') {
        history.replaceState(null, document.title, location.pathname);
        location.replace(url);
      }
    },
    false
  );
};
