import React from 'react';
import styled from 'styled-components';

import { Container } from '@nfs-react/components';

import { useText, usePicture } from 'hooks';
import { MOBILE, TABLET, DESKTOP } from 'helpers/styles/media';

const Article = () => {

  return (
    <ArticleWrap>
      <ArticleContainer>
        <ArticleInner>
          <ArticleTextWrap>
            <ArticleTitle>{useText('article__title', true)}</ArticleTitle>
            <ArticleText>{useText('article__text', true)}</ArticleText>
          </ArticleTextWrap>
          <ArticleImage>
            {usePicture(['graph3.png', 'graph2.png', 'graph1.png'])}
          </ArticleImage>
        </ArticleInner>
      </ArticleContainer>
    </ArticleWrap>
  );
};

const ArticleContainer = styled(Container)`
  @media ${MOBILE} {
    :lang(th) {
      max-width: 477px;
    }
  }
`;

const ArticleWrap = styled.div`
  @media ${DESKTOP} {
    padding: 96px 0 52px;
  }

  @media ${TABLET} {
    padding: 64px 0 74px;
    background: #fff;
  }

  @media ${MOBILE} {
    padding: 50px 0 36px;
  }
`;

const ArticleInner = styled.div`
  display: grid;

  @media ${DESKTOP} {
    grid-template-columns: 536px 570px;
    column-gap: 36px;
    margin-bottom: 64px;
  }

  @media ${TABLET} {
    grid-template-columns: 374px 350px;
    column-gap: 24px;
    margin-bottom: 52px;
    :lang(th) {
      grid-template-columns: 425px 318px;
      column-gap: 5px;
    }
  }
`;

const ArticleTextWrap = styled.div`
  @media ${MOBILE} {
    margin-bottom: 20px;
  }
`;

const ArticleTitle = styled.div`
  position: relative;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 150%;
  color: #373737;

  @media ${DESKTOP} {
    font-size: 25px;
    padding-left: 15px;
    margin-bottom: 32px;
  }

  @media ${TABLET} {
    font-size: 22px;
    line-height: 116%;
    margin-bottom: 12px;
    padding-left: 10px;
  }

  @media ${MOBILE} {
    font-size: 22px;
    line-height: 130%;
    padding-left: 16px;
    margin-bottom: 24px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 7px;
    height: 33px;
    background-color: #000;

    @media ${TABLET} {
      width: 4px;
      height: 100%;
      margin-bottom: 12px;
    }

    @media ${MOBILE} {
      width: 7px;
      height: 100%;
      margin-bottom: 12px;
    }
  }
`;

const ArticleText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  max-width: 500px;
  color: #373737;
  :lang(th) {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${DESKTOP} {
    :lang(th) {
      max-width: 423px;
    }
  }
  @media ${MOBILE} {
    :lang(th) {
      max-width: 422px;
    }
  }

  :lang(th) {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${DESKTOP} {
    :lang(th) {
      max-width: 423px;
    }
  }
  @media ${MOBILE} {
    :lang(th) {
      max-width: 422px;
    }
  }

  p,
  div {
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

const ArticleImage = styled.div`
  filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.2));

  @media ${TABLET} {
    padding-top: 66px;
  }

  @media ${MOBILE} {
    margin-bottom: 32px;
  }
`;


export default Article;
