import React from 'react';
import styled from 'styled-components';

import { Container } from '@nfs-react/components';

import { MOBILE, TABLET, DESKTOP } from 'helpers/styles/media';

const IntroToRemove = () => {
  return (
    <Wrapper>
      <Container>
        <Message>
          <p>
            Перейдите в{' '}
            <b>
              <i>/packages/templates/src/public/pages</i>
            </b>
          </p>
          <p>
            Для начала работы скопируйте деррикторию "intro". Название копии -
            Ваш GitHub никнейм (в дальнейшем - #nickname#). В дерриктории
            #nickname# найдите файл manifest.json. Задайте значение ключа title
            как "#nickname#".
          </p>
          <p>
            Перезапустите процесс <b>templates-dev</b>.
          </p>
          <p>
            <b>#nickname#"</b> - ваша рабочая дерриктории (
            <a href='http://localhost:3000/#nickname#'>
              http://localhost:3000/#nickname#
            </a>
            ). Все дальнейшие работы должны проходить только в ней.
          </p>
          <p>
            Удалите компонент IntroToRemove и изучите учебные материалы из
            списка вопросов.
          </p>
          <p>
            В рамках вопросов, имеющих область для практических заданий,
            продемонстрируйте понимание материала на 2-3 примерах манипуляции
            положением и отображением демонстрационных блоков.
          </p>
          <p>
            Для написания стилей используйте Styled Components. Базовую
            информацию о библиотеке можно получить из официальной документации -{' '}
            <a
              target='_blank'
              href='https://styled-components.com/docs/basics#getting-started'>
              https://styled-components.com/docs/basics#getting-started
            </a>
            .
          </p>
        </Message>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #efefef;

  @media ${DESKTOP} {
    padding: 30px 0;
  }

  @media ${TABLET} {
    padding: 20px 0;
  }

  @media ${MOBILE} {
    padding: 10px 0;
  }
`;

const Message = styled.div`
  position: relative;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #856404;
  border-radius: 4px;
  color: #856404;
  background-color: #fff3cd;

  @media ${TABLET} {
    font-size: 14px;
  }

  @media ${MOBILE} {
    font-size: 12px;
  }

  p {
    margin-bottom: 10px;
  }
`;

export default IntroToRemove;
