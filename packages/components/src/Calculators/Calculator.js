import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MOBILE, TABLET, DESKTOP } from 'helpers/styles/media';
import useCalculator from './helpers/useCalculator';

const Calculator = ({
  minDeposit,
  currency,
  isCurrencyBeforeAmount,
  investmentText,
  profitText,
  buttonText,
  errorMessage,
  primaryColor,
  buttonColor,
  investmentTextColor,
  profitTextColor,
  buttonTextColor,
  stickyContainer,
  investmentTitleStyles,
  profitTitleStyles,
  investmentBlockStyles,
  profitBlockStyles,
  buttonStyles,
  errorStyles,
  currencyStyles,
  inputStyles,
}) => {
  const {
    value,
    updateValue,
    handleEnterKeyPress,
    validateOnInput,
    hasError,
    amount,
    calculateAmount,
  } = useCalculator({ minDeposit });

  const errorText = isCurrencyBeforeAmount
    ? `${errorMessage} ${currency}${minDeposit}`
    : `${errorMessage} ${minDeposit}${currency}`;

  return (
    <Wrapper
      $vars={{
        primaryColor,
        buttonColor,
        investmentTextColor,
        profitTextColor,
        buttonTextColor,
      }}>
      <InvestmentBlock
        stickyContainer={stickyContainer}
        $investmentBlockCss={investmentBlockStyles}>
        <WrapperInner>
          <InvestmentTitle $investmentTitleCss={investmentTitleStyles}>
            {investmentText}
          </InvestmentTitle>
          <InputWrap>
            <Currency $currencyCss={currencyStyles}>{currency}</Currency>
            <Input
              onChange={updateValue}
              onKeyPress={handleEnterKeyPress}
              onInput={validateOnInput}
              value={value}
              $inputCss={inputStyles}
            />
            <Button onClick={calculateAmount} $buttonCss={buttonStyles}>
              {buttonText}
            </Button>
            {hasError && (
              <ErrorMessage $errorCss={errorStyles}>{errorText}</ErrorMessage>
            )}
          </InputWrap>
        </WrapperInner>
      </InvestmentBlock>
      <ProfitBlock
        stickyContainer={stickyContainer}
        $profitBlockCss={profitBlockStyles}>
        <WrapperInner>
          <ProfitTitle $profitTitleCss={profitTitleStyles}>
            {profitText}
          </ProfitTitle>
          <InputWrap>
            <Currency $currencyCss={currencyStyles}>{currency}</Currency>
            <Input readOnly value={amount} $inputCss={inputStyles} />
          </InputWrap>
        </WrapperInner>
      </ProfitBlock>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  font-family: inherit;

  @media ${MOBILE} {
    flex-direction: column;
  }

  ${({
    $vars: {
      primaryColor,
      buttonColor,
      investmentTextColor,
      profitTextColor,
      buttonTextColor,
    },
  }) =>
    `
      --calc-primary-color: ${primaryColor};
      --calc-button-color: ${buttonColor};
      --calc-investment-text-color: ${investmentTextColor};
      --calc-profit-text-color: ${profitTextColor};
      --calc-button-text-color: ${buttonTextColor};
    `}
`;

const Block = styled.div`
  background: #f1f1f1;
  flex: 2 1 auto;

  @media ${DESKTOP} {
    ${({ stickyContainer }) => `
    padding: ${stickyContainer ? '50px 20px 65px 20px' : '48px 57px 64px 56px'};
  `};
  }

  @media ${TABLET} {
    padding: 50px 20px 65px 20px;
  }

  @media ${MOBILE} {
    padding: 48px 20px 64px 20px;
  }
`;

const InvestmentBlock = styled(Block)`
  background: #f1f1f1;

  ${({ $investmentBlockCss }) => $investmentBlockCss}
`;

const ProfitBlock = styled(Block)`
  background: var(--calc-primary-color);

  ${({ $profitBlockCss }) => $profitBlockCss}
`;

const WrapperInner = styled.div`
  @media ${MOBILE} {
    max-width: 340px;
    margin: 0 auto;
  }
`;

const Title = styled.p`
  font-size: 20px;
  margin-bottom: 37px;
  text-align: center;
  text-transform: uppercase;
  line-height: 33px;
  font-weight: 700;
`;

const InvestmentTitle = styled(Title)`
  color: var(--calc-investment-text-color);

  ${({ $investmentTitleCss }) => $investmentTitleCss}
`;

const ProfitTitle = styled(Title)`
  color: var(--calc-profit-text-color);

  ${({ $profitTitleCss }) => $profitTitleCss}
`;

const InputWrap = styled.div`
  position: relative;
`;

const Currency = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  font-family: inherit, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #373737;
  border-right: 1px solid #d6d6d6;

  ${({ $currencyCss }) => $currencyCss}
`;

const Input = styled.input`
  height: 51px;
  width: 100%;
  box-sizing: border-box;
  padding-right: 55px;
  padding-left: 70px;
  outline: none;
  margin: 0;
  border-radius: 42px;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.1);
  border: none;
  background: #fff;
  font-weight: 400;
  font-size: 18px;

  ${({ $inputCss }) => $inputCss}
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 400;
  font-size: 18px;
  color: var(--calc-button-text-color);
  height: 50px;
  max-width: 162px;
  padding: 0 20px;
  text-transform: uppercase;
  box-shadow: none;
  border: none;
  display: inline-block;
  cursor: pointer;
  outline: none;
  background-color: var(--calc-button-color);
  border-radius: 50px;

  @media ${MOBILE} {
    max-width: 126px;
    font-size: 16px;
    padding: 0 15px;
  }

  ${({ $buttonCss }) => $buttonCss}
`;

const ErrorMessage = styled.p`
  position: absolute;
  left: 50%;
  top: calc(100% + 10px);
  width: 100%;
  text-align: center;
  transform: translateX(-50%);
  font-size: 16px;
  color: red;
  font-weight: 400;
  margin: 0;

  ${({ $errorCss }) => $errorCss}
`;

Calculator.propTypes = {
  minDeposit: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  isCurrencyBeforeAmount: PropTypes.bool.isRequired,
  investmentText: PropTypes.string.isRequired,
  profitText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  investmentTextColor: PropTypes.string.isRequired,
  profitTextColor: PropTypes.string.isRequired,
  buttonTextColor: PropTypes.string.isRequired,
  stickyContainer: PropTypes.bool.isRequired,
};

export default Calculator;
