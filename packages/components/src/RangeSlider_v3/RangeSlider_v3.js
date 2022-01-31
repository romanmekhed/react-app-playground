import React, { useState, useEffect } from 'react';
import Slider, { Handle } from 'rc-slider';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MOBILE, TABLET, DESKTOP, TO_DESKTOP } from 'helpers/styles/media';

import RangeSliderStyles from './RangeSliderStyles';
import { formatNumber } from '../helpers';
import useCalculator from './useCalculator';

const RangeSlider_v3 = ({
  initialTitle,
  potentialTitle,
  currency,
  funnel_language,
  wrapperStyles,
  trackStyles,
  valueStyles,
  isCurrencyBeforeAmount = false,
  noMobile = false,
}) => {
  const [isMobile, setIsMobile] = useState(null);
  if (!noMobile) {
    useEffect(() => {
      const windowWidth = document.documentElement.clientWidth;
      setIsMobile(windowWidth <= 960);
    });
  }

  const { value, updateValue, amount, calculateAmount } = useCalculator({
    minDeposit: 250,
    baseValue: 250,
  });

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

      <Inner>
        <Item>
          <InitialText>{initialTitle}</InitialText>
          <InitialValue
            $valueCss={valueStyles}
            isCurrencyBeforeAmount={isCurrencyBeforeAmount}>
            {formatNumber(value, true, isMobile, funnel_language)}
            <span>{currency}</span>
          </InitialValue>
        </Item>
        <Item>
          <PotentialText>{potentialTitle}</PotentialText>
          <PotentialValue isCurrencyBeforeAmount={isCurrencyBeforeAmount}>
            {formatNumber(amount, true, isMobile, funnel_language)}
            <span>{currency}</span>
          </PotentialValue>
        </Item>
      </Inner>

      <SliderWrap>
        <Slider
          step={50}
          value={value}
          min={250}
          max={20000}
          onChange={(value) => value >= 250 && updateValue(value)}
          handle={sliderHandle}
        />
      </SliderWrap>
    </Wrap>
  );
};

const SliderWrap = styled.div`
  @media ${DESKTOP} {
    padding: 0 30px;
  }

  @media ${TABLET} {
    padding: 0 50px;
  }
`;

const Wrap = styled.div`
  position: relative;

  @media ${MOBILE} {
    padding: 0 52px;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${DESKTOP} {
    max-width: 460px;
    margin: 0 auto 40px;
  }

  @media ${TO_DESKTOP} {
    width: 260px;
    margin: 0 auto 31px;
  }
`;
const Item = styled.div`
  flex: 1;
`;

const Value = styled.div`
  font-weight: 600;
  letter-spacing: 0.02em;

  @media ${DESKTOP} {
    font-size: 30px;
  }

  @media ${TO_DESKTOP} {
    font-size: 26px;
  }
`;

const InitialValue = styled(Value)`
  color: #727b83;

  ${({ isCurrencyBeforeAmount }) =>
    `${
      isCurrencyBeforeAmount
        ? 'display: flex; flex-direction: row-reverse;'
        : null
    }`};

  ${({ $valueCss }) => $valueCss}
`;

const Text = styled.div`
  font-family: inherit;
  font-size: 15px;
  letter-spacing: 0.02em;
  color: #727b83;

  @media ${DESKTOP} {
    margin-bottom: 15px;
  }

  @media ${TO_DESKTOP} {
    margin-bottom: 24px;
  }
`;

const InitialText = styled(Text)``;

const PotentialText = styled(Text)``;

const PotentialValue = styled(Value)`
  color: #fe753f;

  ${({ isCurrencyBeforeAmount }) =>
    `${
      isCurrencyBeforeAmount
        ? 'display: flex; flex-direction: row-reverse;'
        : null
    }`};

  ${({ $valueCss }) => $valueCss}
`;

RangeSlider_v3.prototype = {
  potentialTitle: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default RangeSlider_v3;
