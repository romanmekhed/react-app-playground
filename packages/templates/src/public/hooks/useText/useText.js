import React, { useContext } from 'react';
import parse from 'html-react-parser';

import { CmsContext, TranslatesContext } from 'helpers/providers/contexts';

const useText = (id, isCms) => {
  const content = useContext(CmsContext);
  const translates = useContext(TranslatesContext);

  return isCms ? (
    <div data-editable data-name={id}>
      {parse(
        (content && content[id] && content[id].children) ||
          translates[id] ||
          `<p>${id}</p>`
      )}
    </div>
  ) : (
    parse(translates[id] || `${id}`)
  );
};

export default useText;
