import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';

import useCalculator from './helpers/useCalculator';
import CarouselStyles from './helpers/CarouselStyles';

const CarouselCalculator = ({
  minDeposit,
  currency,
  isCurrencyBeforeAmount,
  buttonText,
  errorMessage,
  primaryColor,
  buttonBackground,
  profitBackground,
  profitText,
  slides,
}) => {
  const {
    value,
    updateValue,
    validateOnInput,
    hasError,
    validateMinDeposit,
  } = useCalculator({
    minDeposit,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [amount, setAmount] = useState(0);

  const calculateAmount = useCallback(() => {
    const isValidateMinDepositError = validateMinDeposit() === true;
    if (isValidateMinDepositError) {
      return setAmount('');
    }

    let { factor } = slides[activeIndex];
    const result = (value * factor) / 100;

    setAmount(parseFloat(result.toFixed(2)));
  }, [value]);

  const resetValue = useCallback((_oldIndex, newIndex) => {
    updateValue('');
    setAmount(0);
    setActiveIndex(newIndex);
  }, []);

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: false,
    swipe: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: resetValue,
  };

  const errorText = isCurrencyBeforeAmount
    ? `${errorMessage} ${currency}${minDeposit}`
    : `${errorMessage} ${minDeposit}${currency}`;

  return (
    <Wrapper $vars={{ primaryColor, buttonBackground, profitBackground }}>
      <CarouselStyles />

      <Carousel>
        <Slider {...settings}>
          {slides.map(({ img, text }, i) => (
            <div key={i}>
              <Slide image={img}>
                <p>{text}</p>
              </Slide>
            </div>
          ))}
        </Slider>
      </Carousel>

      <Content>
        <Inner>
          <Currency>
            <span>{currency}</span>
          </Currency>
          <Input
            onChange={updateValue}
            onKeyPress={({ key }) => key === 'Enter' && calculateAmount()}
            onInput={validateOnInput}
            value={value}
          />
          <Button onClick={calculateAmount}>{buttonText}</Button>
          {hasError && <ErrorMessage>{errorText}</ErrorMessage>}
        </Inner>
      </Content>

      <Result>
        <ResultTitle>{profitText}</ResultTitle>
        <ResultAmount>
          {amount || 0}
          {currency}
        </ResultAmount>
      </Result>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 750px;
  margin-top: 20px;
  margin-bottom: 51px;
  background: #f1f1f1;
  padding: 10px;
  border-radius: 10px;
  border: 4px solid var(--calc-primary-color);
  position: relative;
  padding-bottom: 70px;
  ${({ $vars: { primaryColor, buttonBackground, profitBackground } }) =>
    `
      --calc-primary-color: ${primaryColor};
      --calc-button-background: ${buttonBackground};
      --calc-profit-background: ${profitBackground};
    `}
`;

const Carousel = styled.div`
  width: 100%;
  max-width: 728px;
  position: relative;
  margin: 0 auto;
`;

const Slide = styled.div`
  width: 100%;
  min-height: 103px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center no-repeat;
  ${({ image }) => `background-image: url(${image})`};
  p {
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    font-family: inherit;
  }
`;

const Content = styled.div`
  padding: 15px;
  max-width: 450px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaMobile`
    padding: 15px 0;
  `};
`;

const Inner = styled.div`
  position: relative;
`;

const Currency = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  padding-left: 4px;
  top: 0px;
  font-family: inherit;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #373737;
  border-right: 1px solid #d6d6d6;
  ${({ theme }) => theme.mediaMobile`
    width: 37px;
    top: 0px;
  `};
`;

const Input = styled.input`
  width: 100%;
  height: 51px;
  outline: none;
  border-radius: 42px;
  border: none;
  background: #fff;
  font-family: inherit;
  font-size: 18px;
  padding-left: 70px;
  padding-right: 55px;
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.11);
  ${({ theme }) => theme.mediaMobile`  
    padding-left: 45px;
    padding-top: 2px;
  `};
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  font-family: inherit;
  height: 51px;
  max-width: 160px;
  width: 100%;
  background-color: var(--calc-button-background);
  color: #ff8a35;
  border-radius: 50px;
  border: none;
  display: inline-block;
  cursor: pointer;
  outline: none;
  ${({ theme }) => theme.mediaMobile`
    max-width: 124px;
    font-size: 16px;
  `};
`;

const ErrorMessage = styled.div`
  position: absolute;
  left: 50%;
  top: calc(100% + 6px);
  width: 100%;
  text-align: center;
  transform: translateX(-50%);
  font-size: 16px;
  color: red;
  font-family: inherit;
  font-weight: 400;
  margin: 0;
`;

const Result = styled.div`
  background: var(--calc-profit-background);
  color: #fff;
  min-width: 280px;
  min-height: 110px;
  position: absolute;
  padding: 0 15px;
  bottom: -55px;
  border-radius: 110px;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
`;

const ResultTitle = styled.div`
  font-size: 15px;
  margin-top: 16px;
  ${({ theme }) => theme.mediaMobile`
    margin-top: 27px;
  `};
`;

const ResultAmount = styled.div`
  font-size: 45px;
  font-weight: 900;
  ${({ theme }) => theme.mediaMobile`
    font-size: 30px;
  `};
`;

CarouselCalculator.propTypes = {
  minDeposit: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  isCurrencyBeforeAmount: PropTypes.bool.isRequired,
  profitText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  buttonBackground: PropTypes.string.isRequired,
  profitBackground: PropTypes.string.isRequired,
  slides: PropTypes.array.isRequired,
};

export default CarouselCalculator;
