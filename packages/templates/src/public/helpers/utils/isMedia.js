import {
  MOBILE,
  TABLET,
  FROM_TABLET,
  DESKTOP,
  TO_DESKTOP,
} from '../styles/media';

const media = {
  mobile: () => window.matchMedia(MOBILE),
  tablet: () => window.matchMedia(TABLET),
  fromTablet: () => window.matchMedia(FROM_TABLET),
  desktop: () => window.matchMedia(DESKTOP),
  toDesktop: () => window.matchMedia(TO_DESKTOP),
};

const isMedia = (mqValue) => {
  if (mqValue in media) {
    return media[mqValue]().matches;
  } else {
    console.error(`${mqValue} key is not exists`);
  }
};

isMedia.custom = (mq) => window.matchMedia(mq).matches;
isMedia.max = (mqMax) => window.matchMedia(`(max-width: ${mqMax})`).matches;
isMedia.min = (mqMin) => window.matchMedia(`(min-width: ${mqMin})`).matches;
isMedia.between = (mqMin, mqMax) =>
  window.matchMedia(`(min-width: ${mqMin}) and (max-width: ${mqMax})`).matches;

// example:
//  isMedia('tablet');
//  isMedia.custom('(min-width: 300px) and (max-width: 599px)');
//  isMedia.max('900px');
//  isMedia.min('400px');
//  isMedia.between('200px', '700px');

export default isMedia;
