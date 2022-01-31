import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Container } from '@nfs-react/components';

import { PageFormContext } from 'helpers/providers/contexts';
import { MainForm } from 'helpers/form';
import { useImg, usePicture, useText } from 'hooks';
import { MOBILE, TABLET, DESKTOP, TO_DESKTOP } from 'helpers/styles/media';

export const Form = () => {
  const { pageFormRef } = useContext(PageFormContext);

  return (
    <>
      <FormWrapper>
        <FormContainer>
          <Block ref={pageFormRef}>
            <Top>
              <Title>{useText('form__title', true)}</Title>
            </Top>
            <Body>
              <MainForm
                labelCss={labelStyles}
                inputCss={inputStyles}
                prefixCss={prefixStyles}
                phoneCss={phoneStyles}
                buttonCss={buttonStyles}
              />
              <Text>{useText('form__text', true)}</Text>
            </Body>
            <Payments>{usePicture('payment-methods1.png')}</Payments>
          </Block>
        </FormContainer>
      </FormWrapper>
    </>
  );
};

const FormWrapper = styled.div`
  @media ${TABLET} {
    padding-bottom: 20px;
  }

  @media ${MOBILE} {
    margin-bottom: 32px;
  }
`;

const FormContainer = styled(Container)`
  position: relative;

  @media ${TABLET} {
    height: 100%;
  }
`;

const Block = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.28);
  width: 100%;
  width: 100%;
  max-width: 368px;

  @media ${DESKTOP} {
    position: absolute;
    bottom: -120px;
    right: 10px;
    z-index: 101;
  }

  @media ${TO_DESKTOP} {
    margin: 0 auto;
  }

  @media ${TABLET} {
    position: relative;
    margin-top: -100px;
  }

  @media ${MOBILE} {
    max-width: 336px;
    margin-top: -55px;
    :lang(de) {
      margin-top: -37px;
    }
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55px;
  background: #b41212;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  color: #fff;
`;

const Body = styled.div`
  padding: 12px 16px 10px 16px;
  background: #fff;
  color: #373737;

  @media ${TABLET} {
    padding-bottom: 20px;
  }
  @media ${MOBILE} {
    :lang(th) {
      padding: 12px 14px 10px;
    }
  }
`;

const labelStyles = css`
  margin-bottom: 3px;
  font-size: 15px;
  line-height: 18px;
`;

const inputStyles = css`
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 32px;

  @media ${MOBILE} {
    font-size: 14px;
  }
`;

const prefixStyles = css`
  flex: 0 0 105px;
  input {
    ${inputStyles}
  }
`;

const phoneStyles = css`
  input {
    ${inputStyles}
  }
`;

const buttonStyles = css`
  position: relative;
  border-color: transparent;
  text-align: center;
  min-height: 56px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  background: #b41212;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0 11px;
  color: #fff;
  transition: transform 0.3s ease;

  @media ${DESKTOP} {
    &:hover {
      transform: scale(1.06);
    }
  }

  @media ${TO_DESKTOP} {
    min-height: 56px;
    &:active {
      transform: scale(1.06);
    }
  }

  @media ${TABLET} {
    font-size: 19px;
  }
`;

const Text = styled.div`
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #6d6d6d;
  margin: 10px 0 0;
`;

const Payments = styled.div`
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #efefef;
  border-radius: 0 0 12px 12px;

  img {
    display: block;
    width: 100%;
    max-width: 273px;
    margin: 0 auto;
  }
`;

export default Form;
