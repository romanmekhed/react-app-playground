import React from 'react';
import styled from 'styled-components';

import { Container } from '@nfs-react/components';

import { QuestionWrapper, QuestionTitle, QuestionLinks } from '../../helpers';

const Question1 = () => {
  return (
    <QuestionWrapper>
      <Container>
        <QuestionTitle>
          1) Что такое специфичность (вес) селекторов CSS и как она работает?
        </QuestionTitle>
        <QuestionLinks
          links={[
            {
              label: 'Специфичность',
              link: 'https://developer.mozilla.org/ru/docs/Web/CSS/Specificity',
            },
            {
              label: 'Специфичность селекторов CSS',
              link: 'https://habr.com/ru/sandbox/47910/',
            },
          ]}
        />
        <DemoBlocks>
          <Block1>Block1</Block1>
          <Block2 style={{ backgroundColor: '#ff8888' }}>Block2</Block2>
          <Block3 className='block3'>Block3</Block3>
        </DemoBlocks>
      </Container>
    </QuestionWrapper>
  );
};

const DemoBlocks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const Block1 = styled.div`
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 10px;
  font-weight: 600;
`;

const Block2 = styled.div`
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 10px;
  font-weight: 600;
`;

const Block3 = styled.div`
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 10px;
  font-weight: 600;

  &.block3 {
    background-color: #dce550;
  }
`;

export default Question1;
