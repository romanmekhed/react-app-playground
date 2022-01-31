export const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const fullNameReg = /^([^|&;$%#!*?"~\\\/<>()^№:@._=[\]{}\+0-9]*\s)[^|&;$%#!*?"~\\\/<>()^№:@._=[\]{}\+0-9]+$/;
export const nameReg = /[|&;$%#!*?"~\\\/<>()^№:@._=[\]{}\+0-9]|\s{2,}/;
export const phoneReg = /^[0-9]*$/;

export const getCoefficientByAmount = (value, minDeposit) => {
  let coefficient = 0;

  if (value === minDeposit) {
    coefficient = 2;
  } else if (value > minDeposit && value < minDeposit * 2) {
    coefficient = 2.5;
  } else if (value >= minDeposit * 2 && value < minDeposit * 4) {
    coefficient = 3.5;
  } else if (value >= minDeposit * 4 && value < minDeposit * 20) {
    coefficient = 5;
  } else if (value >= minDeposit * 20) {
    coefficient = 5.5;
  }

  return coefficient;
};

export const formatNumber = (number, cutZeros, isMobile, funnel_language) => {
  const numberFormat = Intl.NumberFormat('en-US').format(number);

  if (isMobile && cutZeros && number >= 1000) {
    return Math.round(number / 100) / 10 + 'k';
  }

  if (!isMobile && funnel_language === 'it') {
    if (number >= 10000) {
      return Intl.NumberFormat('it-IT').format(number);
    }

    return String(number).replace(/[.]/g, ',');
  }

  if (!isMobile && number >= 10000) {
    return numberFormat;
  }

  return number;
};

export const roundToDecimal = (value) => value / 100;

export const formulaCalc = (number) => {
  const result = 5.13 * number + 24;
  return result % 1 === 0 ? result : result.toFixed(2);
};

export const getPercentFromNumber = (base, part) =>
  ((100 * part) / base).toFixed(2);

export const isTouchDevice = () => {
  try {
    let prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

    let mq = function (query) {
      return window.matchMedia(query).matches;
    };

    if (
      'ontouchstart' in window ||
      (typeof window.DocumentTouch !== 'undefined' &&
        document instanceof window.DocumentTouch)
    ) {
      return true;
    }

    return mq(['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(''));
  } catch (e) {
    console.error('(Touch detect failed)', e);
    return false;
  }
};

export const handleGesture = (
  touchstartX,
  touchstartY,
  touchendX,
  touchendY
) => {
  const delx = touchendX - touchstartX;
  const dely = touchendY - touchstartY;
  if (Math.abs(delx) > Math.abs(dely)) {
    if (delx > 0) return 'right';
    else return 'left';
  } else if (Math.abs(delx) < Math.abs(dely)) {
    if (dely > 0) return 'down';
    else return 'up';
  } else return 'tap';
};

export const loadScript = (d, s, id, jsSrc, cb, onError) => {
  const element = d.getElementsByTagName(s)[0];
  const fjs = element;
  let js = element;
  js = d.createElement(s);
  js.id = id;
  js.src = jsSrc;
  if (fjs && fjs.parentNode) {
    fjs.parentNode.insertBefore(js, fjs);
  } else {
    d.head.appendChild(js);
  }
  js.onerror = onError;
  js.onload = cb;
};

// TODO: make scalabale object for different type of formatting
export const formatValue = (value, multiplier) =>
  new Intl.NumberFormat('en-US').format((value * multiplier) / 100);
