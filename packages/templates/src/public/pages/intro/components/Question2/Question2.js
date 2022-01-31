import React from 'react';
import styled from 'styled-components';

import { Container } from '@nfs-react/components';

import { QuestionWrapper, QuestionTitle, QuestionLinks } from '../../helpers';

const Question2 = () => {
  return (
    <QuestionWrapper>
      <Container>
        <QuestionTitle>2) Принципы работы с контейнерами в CSS</QuestionTitle>
        <QuestionLinks
          links={[
            {
              label: 'Контейнеры CSS',
              link:
                'https://webformyself.com/opredelenie-stilej-kontejnera-maketov-v-css/',
            },
          ]}
        />
      </Container>
    </QuestionWrapper>
  );
};

export default Question2;
