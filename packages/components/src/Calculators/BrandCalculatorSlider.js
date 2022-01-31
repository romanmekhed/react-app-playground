import React, { useState, useEffect, useCallback } from 'react';
import Slider, { Handle } from 'rc-slider';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BrandRangeSliderStyles from './helpers/BrandRangeSliderStyles';
import Brands from './Components/Brands';
import { formatNumber, formatValue } from '../helpers';

const BrandCalculatorSlider = ({
  currency,
  brands,
  profitTitle,
  isCurrencyBeforeAmount,
  handleClickButton,
  lang,
  primaryColor,
  secondaryColor,
  btnStartColor,
  btnEndColor,
  trackStartColor,
  trackEndColor,
}) => {
  const [rangeValue, changeRangeValue] = useState(250);
  const [isMobile, setIsMobile] = useState(null);
  const [multiplier, setMultiplier] = useState(brands[0].multiplier);
  const [potentialValue, setPotentialValue] = useState(0);
  const markText = isCurrencyBeforeAmount ? `${currency}250` : `250${currency}`;

  const handleUpdateBrand = useCallback((number) => {
    const result = formatValue(rangeValue, number);
    changeRangeValue(250);
    setMultiplier(number);
    setPotentialValue(result);
  }, []);

  useEffect(() => {
    const result = formatValue(rangeValue, multiplier);

    setPotentialValue(result);
  }, [rangeValue]);

  useEffect(() => {
    const windowWidth = document.documentElement.clientWidth;
    setIsMobile(windowWidth <= 960);
  }, []);

  const sliderHandle = ({ value, dragging, ...props }) => {
    return (
      <Handle value={value} {...props}>
        {formatNumber(value, true, isMobile, lang)}
        <span>{currency}</span>
      </Handle>
    );
  };

  return (
    <Wrap
      $vars={{
        primaryColor,
        secondaryColor,
        btnStartColor,
        btnEndColor,
        trackStartColor,
        trackEndColor,
      }}>
      <Brands items={brands} onUpdateCallback={handleUpdateBrand} />
      <BrandRangeSliderStyles isCurrencyBeforeAmount={isCurrencyBeforeAmount} />
      <SliderWrap>
        <Slider
          step={50}
          value={rangeValue}
          min={250}
          marks={[markText]}
          max={20000}
          onChange={(value) => value >= 250 && changeRangeValue(value)}
          handle={sliderHandle}
        />
      </SliderWrap>
      <Bottom onClick={handleClickButton}>
        <BottomText>{profitTitle}</BottomText>
        <PotentialValue isCurrencyBeforeAmount={isCurrencyBeforeAmount}>
          {formatNumber(potentialValue, true, isMobile, lang)}
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
  border: 4px solid var(--calc-secondary-color);
  box-shadow: 0px 5px 32px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  padding: 31px 36px 101px 39px;
  width: 100%;
  ${({ theme: { mediaToDesktop } }) => mediaToDesktop`
    margin: 0 auto;
  `};
  ${({ theme: { mediaMobile } }) => mediaMobile`
      padding: 15px 15px 110px;
    `}

  ${({ $wrapperCss }) => ($wrapperCss ? $wrapperCss : null)}

  ${({
    $vars: {
      primaryColor,
      secondaryColor,
      btnStartColor,
      btnEndColor,
      trackStartColor,
      trackEndColor,
    },
  }) =>
    `
      --calc-primary-color: ${primaryColor};
      --calc-secondary-color: ${secondaryColor};
      --calc-btn-start-color: ${btnStartColor};
      --calc-btn-end-color: ${btnEndColor};
      --calc-track-start-color: ${trackStartColor};
      --calc-track-end-color: ${trackEndColor};
    `}
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
    isCurrencyBeforeAmount &&
    `
     display: flex;
     flex-direction: row-reverse;
  `};
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
  background: linear-gradient(
    102.55deg,
    var(--calc-btn-start-color) 0%,
    var(--calc-btn-end-color) 100%
  );
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

BrandCalculatorSlider.propTypes = {
  currency: PropTypes.string.isRequired,
  brands: PropTypes.array.isRequired,
  profitTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  isCurrencyBeforeAmount: PropTypes.bool.isRequired,
  handleClickButton: PropTypes.func,
  lang: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  btnStartColor: PropTypes.string.isRequired,
  btnEndColor: PropTypes.string.isRequired,
  trackStartColor: PropTypes.string.isRequired,
  trackEndColor: PropTypes.string.isRequired,
};

export default BrandCalculatorSlider;
