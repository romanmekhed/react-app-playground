import React, { useState, useEffect } from 'react';
import Slider, { Handle } from 'rc-slider';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RangeSliderStyles from './RangeSliderStyles';
import { formulaCalc, formatNumber } from '../helpers';
import useCalculator from './useCalculator';

const RangeSlider_v2 = ({
  title,
  potentialTitle,
  currency,
  handleClickButton,
  funnel_language,
  wrapperStyles,
  titleStyles,
  buttonStyles,
  trackStyles,
  valueStyles,
  isCurrencyBeforeAmount = false,
  noMobile = false,
}) => {
  const [rangeValue, changeRangeValue] = useState(250);
  const [isMobile, setIsMobile] = useState(null);
  if (!noMobile) {
    useEffect(() => {
      const windowWidth = document.documentElement.clientWidth;
      setIsMobile(windowWidth <= 960);
    });
  }
  const potentialValue = formulaCalc(rangeValue);
  const markText = isCurrencyBeforeAmount ? `${currency}250` : `250${currency}`;
  const {
    value,
    updateValue,
    handleEnterKeyPress,
    validateOnInput,
    hasError,
    amount,
    calculateAmount,
  } = useCalculator({ minDeposit: 250, baseValue: 250 });

  const sliderHandle = ({ value, dragging, ...props }) => {
    return (
      <Handle value={value} {...props}>
        {formatNumber(value, true, isMobile, funnel_language)}
        <span>{currency}</span>
      </Handle>
    );
  };

  useEffect(() => {
    calculateAmount();
  }, [value]);

  return (
    <Wrap $wrapperCss={wrapperStyles}>
      <RangeSliderStyles
        $trackCss={trackStyles}
        isCurrencyBeforeAmount={isCurrencyBeforeAmount}
      />
      <Title $titleCss={titleStyles}>{title}</Title>
      <SliderWrap>
        <Slider
          step={50}
          value={value}
          min={250}
          marks={[markText]}
          max={20000}
          onChange={(value) => value >= 250 && updateValue(value)}
          handle={sliderHandle}
        />
      </SliderWrap>
      <Bottom onClick={handleClickButton} $buttonCss={buttonStyles}>
        <BottomText>{potentialTitle}</BottomText>
        <PotentialValue
          $valueCss={valueStyles}
          isCurrencyBeforeAmount={isCurrencyBeforeAmount}>
          {formatNumber(amount, true, isMobile, funnel_language)}
          <span>{currency}</span>
        </PotentialValue>
      </Bottom>
    </Wrap>
  );
};

const SliderWrap = styled.div`
  padding: 0 30px;
`;

const Wrap = styled.div`
  position: relative;
  background: #fff;
  border: 4px solid #f5af02;
  box-shadow: 0px 5px 32px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  padding: 31px 36px 101px 39px;
  width: 100%;
  ${({ theme: { mediaToDesktop } }) => mediaToDesktop`
    margin: 0 auto 60px;
  `};
  ${({ theme: { mediaMobile } }) => mediaMobile`
      padding: 24px 20px 73px;
    `}

  ${({ $wrapperCss }) => ($wrapperCss ? $wrapperCss : null)}
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.261;
  text-align: center;
  letter-spacing: 0.02em;
  margin-bottom: 59px;
  color: #212e51;
  ${({ theme: { mediaMobile } }) => mediaMobile`
      font-size: 18px;
      line-height: 1.17;
      margin-bottom: 42px;
    `}
  ${({ $titleCss }) => ($titleCss ? $titleCss : null)}
`;

const Value = styled.div`
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 0.02em;
  color: inherit;
`;

const PotentialValue = styled(Value)`
  font-size: 45px;
  line-height: 126.1%;
  text-align: center;
  letter-spacing: 0.02em;
  font-family: ${({ theme }) => theme.FF_MONTSERRAT};
  font-weight: 700;
  ${({ isCurrencyBeforeAmount }) =>
    `${
      isCurrencyBeforeAmount
        ? 'display: flex; flex-direction: row-reverse;'
        : null
    }`};
  @media (max-width: 960px) {
    font-size: 31px;
  }

  ${({ theme: { mediaTablet } }) => mediaTablet`
    font-size: 38px;
  `};
  ${({ theme: { mediaMobile } }) => mediaMobile`
    font-size: 31px;
  `};
  ${({ $valueCss }) => ($valueCss ? $valueCss : null)}
`;

const Bottom = styled.div`
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(102.55deg, #f90 0%, #fc0 100%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 281px;
  height: 109px;
  position: absolute;
  bottom: -54px;
  cursor: pointer;
  transition: 0.15s ease;
  color: #fff;

  &:hover {
    transform: translateX(-50%) scale(1.08);
  }
  ${({ theme: { mediaMobile } }) => mediaMobile`
      width: 232px;
      height: 90px;
      bottom: -48px;
    `}
  ${({ $buttonCss }) => ($buttonCss ? $buttonCss : null)}
`;

const BottomText = styled.div`
  font-size: 15px;
  text-transform: uppercase;
  line-height: 126.1%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 5px;
  font-weight: 700;
`;

RangeSlider_v2.prototype = {
  title: PropTypes.string.isRequired,
  potentialTitle: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  togglePopup: PropTypes.func,
};

export default RangeSlider_v2;
