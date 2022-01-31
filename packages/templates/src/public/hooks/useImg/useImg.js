import React, { useContext } from 'react';
import parse from 'html-react-parser';

import { CmsContext, UrlContext } from 'helpers/providers/contexts';

const useImg = (fileNameWithEx, cmsId) => {
  const { absoluteUrl, version } = useContext(UrlContext);
  const content = useContext(CmsContext);

  return cmsId ? (
    <div data-editable data-name={cmsId}>
      {parse(
        (content && content[cmsId] && content[cmsId].children) ||
          `<img 
            src=${absoluteUrl}/images/${fileNameWithEx}?v=${version} 
            alt=${fileNameWithEx}  
            loading='lazy'
          />`
      )}
    </div>
  ) : (
    <img
      src={`${absoluteUrl}/images/${fileNameWithEx}?v=${version}`}
      loading='lazy'
      alt={fileNameWithEx}
    />
  );
};

export default useImg;
