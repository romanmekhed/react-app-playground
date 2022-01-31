import React from 'react';
import styled from 'styled-components';

import { TO_DESKTOP } from 'helpers/styles/media';

const QuestionTitle = styled.div`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 15px;

  @media ${TO_DESKTOP} {
    font-size: 17px;
  }
`;

export default QuestionTitle;
