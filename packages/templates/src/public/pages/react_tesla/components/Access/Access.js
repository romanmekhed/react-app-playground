import React from 'react';
import styled from 'styled-components';

import { Container } from '@nfs-react/components';

import { useText, useImg } from 'hooks';
import {
  MOBILE,
  TABLET,
  DESKTOP,
  TO_DESKTOP,
  FROM_TABLET,
} from 'helpers/styles/media';

const Access = () => {
  const items = [
    { id: 1, text: 'access__text1', imgUrl: 'icon_1.svg' },
    { id: 2, text: 'access__text2', imgUrl: 'icon_2.svg' },
    { id: 3, text: 'access__text3', imgUrl: 'icon_3.svg' },
    { id: 4, text: 'access__text4', imgUrl: 'icon_4.svg' },
    { id: 5, text: 'access__text5', imgUrl: 'icon_5.svg' },
  ];

  return (
    <AccessWrapper>
      <AccessContainer>
        <AccessTitle>{useText('access__title', true)}</AccessTitle>
        <AccessList>
          {items.map(({ id, text, imgUrl }) => (
            <StepListItem key={id}>
              <AccessListImage>{useImg(imgUrl, `icon_${id}`)}</AccessListImage>
              <AccessListText>{useText(text, true)}</AccessListText>
            </StepListItem>
          ))}
        </AccessList>
      </AccessContainer>
    </AccessWrapper>
  );
};

const AccessContainer = styled(Container)`
  @media ${TABLET} {
    :lang(de) {
      max-width: 841px;
    }
    @media ${MOBILE} {
      :lang(th) {
        max-width: 436px;
      }
    }
  }
  @media ${MOBILE} {
    :lang(th) {
      max-width: 436px;
    }
  }
`;

const AccessWrapper = styled.div`
  position: relative;
  background: #f1f1f1;

  @media ${DESKTOP} {
    padding-top: 92px;
    :lang(de) {
      padding-top: 128px;
    }
  }

  @media ${TABLET} {
    padding-top: initial;
    :lang(en) {
      padding-top: 12px;
    }
    :lang(de) {
      padding-top: 26px;
    }
  }

  @media ${MOBILE} {
    padding-top: 45px;
  }

  &::before {
    content: '';
    border-bottom: 27px solid #f1f1f1;
    border-left: 27px solid transparent;
    border-right: 27px solid transparent;
    position: absolute;
    bottom: 100%;
    transform: translateX(-50%);
    left: 50%;
    z-index: 2;

    @media ${FROM_TABLET} {
      display: none;
    }
  }

  &::after {
    content: '';
    border-top: 27px solid #f1f1f1;
    border-left: 27px solid transparent;
    border-right: 27px solid transparent;
    position: absolute;
    top: 100%;
    transform: translateX(-50%);
    left: 50%;
    z-index: 2;
  }
`;

const AccessTitle = styled.div`
  font-weight: 700;
  color: #373737;

  @media ${DESKTOP} {
    font-size: 33px;
    line-height: 44px;
    :lang(nl) {
      font-size: 31px;
    }
  }

  @media ${FROM_TABLET} {
    :lang(en) {
      font-size: 28px;
    }
  }

  @media ${TO_DESKTOP} {
    text-align: center;
    font-size: 22px;
    line-height: 29px;
  }
`;

const AccessList = styled.div`
  display: grid;

  @media ${DESKTOP} {
    grid-template-columns: 195px 213px 202px 177px 226px;
    column-gap: 41px;
    padding: 70px 0 72px;
  }

  @media ${TABLET} {
    grid-template-columns: 111px 116px 128px 126px 170px;
    justify-content: space-between;
    padding: 26px 0 40px;
  }

  @media ${MOBILE} {
    padding: 30px 0 30px;
  }
`;

const StepListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${MOBILE} {
    :not(:last-child) {
      margin-bottom: 60px;
    }
  }
`;

const AccessListImage = styled.div`
  display: flex;
  justify-content: center;

  @media ${DESKTOP} {
    margin-bottom: 24px;
  }

  @media ${TO_DESKTOP} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${TO_DESKTOP} {
    margin-bottom: 16px;
  }

  @media ${TABLET} {
    height: 57px;
    width: 57px;
  }

  @media ${MOBILE} {
    height: 85px;
    width: 85px;
  }
`;

const AccessListText = styled.div`
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #373737;

  @media ${TABLET} {
    font-size: 16px;
    line-height: 18px;
    :lang(en) {
      font-size: 14px;
    }
    :lang(de) {
      font-size: 14px;
    }
  }
`;

export default Access;
