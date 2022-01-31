import React, { useContext } from 'react';
import parse from 'html-react-parser';

import { GlobalTranslatesContext } from 'helpers/providers/contexts';

const useTextGlobal = (id) => {
  const globalTranslations = useContext(GlobalTranslatesContext);

  return parse(globalTranslations[id] || `${id}`);
};

export default useTextGlobal;
