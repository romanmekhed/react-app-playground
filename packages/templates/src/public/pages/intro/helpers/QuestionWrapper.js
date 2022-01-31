import React from 'react';
import styled from 'styled-components';

import { TO_DESKTOP } from 'helpers/styles/media';

const QuestionWrapper = styled.div`
  border-top: 1px dashed #000000;
  padding: 30px 0;

  @media ${TO_DESKTOP} {
    padding: 20px 0;
  }
`;

export default QuestionWrapper;
