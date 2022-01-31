import React from 'react';
import styled from 'styled-components';

import { Container } from '@nfs-react/components';

import { useText, useImg, usePicture } from 'hooks';
import {
  MOBILE,
  TABLET,
  DESKTOP,
  TO_DESKTOP,
} from 'helpers/styles/media';

const Top = () => {

  return (
    <>
      <TopMain>
        <Container>
          <TopText>
            <TopT1>{useText('top__t1', true)}</TopT1>
            <TopLogo>{useImg('logo.svg', 'top__logo')}</TopLogo>
            <TopT2>
              {useText('top__t2', true)}
            </TopT2>
          </TopText>
        </Container>
      </TopMain>
      <TopOffer>
        <Container>
          <TopOfferWrap>
            <TopOfferText>
              {useText('top__offer', true)}
            </TopOfferText>
            {usePicture(['arrow3.png', 'arrow2.png', 'arrow1.png'])}
          </TopOfferWrap>
        </Container>
      </TopOffer>
    </>
  );
};

const TopMain = styled.div`
  position: relative;
  background-position: center top;
  background-repeat: no-repeat;
  background-color: #d7d9d9;

  @media ${DESKTOP} {
    min-height: 364px;
    padding-top: 64px;
    :lang(nl) {
      padding-top: 40px;
    }
    background-image: ${({ theme: { imgUrl } }) => imgUrl('bg1.jpg')};
  }

  @media ${TABLET} {
    min-height: 290px;
    padding-top: 38px;
    background-image: ${({ theme: { imgUrl } }) => imgUrl('bg2.jpg')};
  }

  @media ${MOBILE} {
    min-height: 249px;
    padding-top: 12px;
    background-image: ${({ theme: { imgUrl } }) => imgUrl('bg3.jpg')};
    background-position: 50% 100%;
    padding-bottom: 115px;
  }
`;

const TopText = styled.div`
  @media ${DESKTOP} {
    max-width: 357px;
    margin-left: 400px;
    :lang(th) {
      max-width: 373px;
    }
  }

  @media ${TABLET} {
    max-width: 298px;
    margin-left: 390px;
    :lang(de) {
      max-width: 327px;
    }
  }
`;

const TopT1 = styled.div`
  font-weight: 700;
  line-height: 126.1%;
  text-align: center;

  @media ${DESKTOP} {
    font-size: 26px;
    margin-bottom: 20px;

    :lang(en) {
      font-size: 25px;
    }
  }

  @media ${TABLET} {
    font-size: 21px;
    margin-bottom: 12px;
  }

  @media ${MOBILE} {
    font-size: 20px;
    margin-bottom: 15px;

    :lang(en) {
      font-size: 21px;
      margin-bottom: 10px;
    }
  }
`;

const TopT2 = styled.div`
  font-weight: 600;
  line-height: 126.1%;
  text-align: center;
  color: #b41212;

  @media ${DESKTOP} {
    font-size: 39px;
    :lang(de) {
      font-size: 34px;
    }
    :lang(es) {
      font-size: 33px;
    }
  }

  @media ${TABLET} {
    font-size: 29px;
  }

  @media ${MOBILE} {
    font-size: 20px;
  }
`;

const Cfd = styled.div`
  font-weight: 600;
  line-height: 126.1%;
  text-align: center;
  color: #000;

  @media ${DESKTOP} {
    font-size: 39px;
    margin-top: -15px;
    margin-bottom: 10px;
  }

  @media ${TABLET} {
    font-size: 29px;
    margin-top: -10px;
    margin-bottom: 10px;
  }

  @media ${MOBILE} {
    font-size: 20px;
  }
`;

const TopLogo = styled.div`
  @media ${DESKTOP} {
    margin-bottom: 24px;
  }

  @media ${TO_DESKTOP} {
    margin: 0 auto;
  }

  @media ${TABLET} {
    max-width: 261px;
    margin-bottom: 16px;
  }

  @media ${MOBILE} {
    max-width: 203px;
    margin-bottom: 6px;
  }
`;

const TopOffer = styled.div`
  background-color: #090b0d;
`;

const TopOfferWrap = styled.div`
  display: flex;
  justify-content: center;

  @media ${DESKTOP} {
    justify-content: flex-end;
    align-items: center;
    max-width: 790px;
    text-align: right;
    padding: 0 10px;
    min-height: 94px;
  }

  @media ${TABLET} {
    align-items: center;
    max-width: 380px;
    padding: 20px 0 120px 20px;
    align-items: center;
    margin: 0 auto;
    img {
      width: 37px;
      margin-left: 20px;
    }
  }

  @media ${MOBILE} {
    min-height: 104px;
    padding-left: 30px;
    padding-top: 12px;
    :lang(de) {
      padding-left: 0;
      padding-top: 24px;
    }
  }
`;

const TopOfferText = styled.div`
  font-weight: 500;
  line-height: 126.1%;
  text-align: center;
  color: #fff;

  @media ${DESKTOP} {
    font-size: 27px;
    margin-right: 20px;
  }

  @media ${TABLET} {
    font-size: 22px;
    :lang(th) {
      margin-right: 5px;
    }
  }

  @media ${MOBILE} {
    font-size: 18px;
  }
`;

export default Top;
