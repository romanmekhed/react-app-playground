import React, { useContext } from 'react';

import { LangContext, UrlContext } from 'helpers/providers/contexts';

const Source = ({ path, fileType, mediaData }) => {
  return (
    <source
      srcSet={path}
      type={`image/${fileType === 'jpg' ? 'jpeg' : fileType}`}
      {...(mediaData ? { media: mediaData } : {})}
    />
  );
};

const usePicture = (fileNamesWithEx, multiLang = '') => {
  const { absoluteUrl, version } = useContext(UrlContext);
  const { funnel_language: lang } = useContext(LangContext);

  fileNamesWithEx = Array.isArray(fileNamesWithEx)
    ? fileNamesWithEx
    : [fileNamesWithEx];

  const mediaQueries = [
    '(max-width: 767px)',
    '(min-width: 768px) and (max-width: 1199px)',
    '(min-width: 1200px)',
  ];
  const getName = (fileNameWithEx) => fileNameWithEx.split('.')[0];
  const getEx = (fileNameWithEx) => fileNameWithEx.split('.')[1];
  const getMediaData = (fileNamesArr, currentIdx) => {
    return fileNamesArr.length > 1 ? mediaQueries[currentIdx] : false;
  };
  const mainFile = fileNamesWithEx[fileNamesWithEx.length - 1];

  return (
    <picture>
      {fileNamesWithEx.map((fileNameWithEx, i, arr) => {
        return (
          <React.Fragment key={i}>
            <Source
              path={`${absoluteUrl}/images/${multiLang && `${lang}/`}${getName(
                fileNameWithEx
              )}.webp?v=${version}`}
              fileType='webp'
              mediaData={getMediaData(arr, i)}
            />
            <Source
              path={`${absoluteUrl}/images/${multiLang && `${lang}/`}${getName(
                fileNameWithEx
              )}.${getEx(fileNameWithEx)}?v=${version}`}
              fileType={getEx(fileNameWithEx)}
              mediaData={getMediaData(arr, i)}
            />
          </React.Fragment>
        );
      })}
      <img
        src={`${absoluteUrl}/images/${
          multiLang && `${lang}/`
        }${mainFile}?v=${version}`}
        loading='lazy'
        alt=''
      />
    </picture>
  );
};

export default usePicture;
