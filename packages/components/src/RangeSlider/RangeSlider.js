import React, { useState } from 'react';
import Sldier from 'rc-slider';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RangeSliderStyles from './RangeSliderStyles';
import { getCoefficientByAmount, formatNumber } from '../helpers';

const RangeSlider = ({ title, initialTitle, potentialTitle, currency }) => {
  const [rangeValue, changeRangeValue] = useState(1);
  const marks = [
    { label: `0${currency}`, value: 0 },
    { label: `2000${currency}`, value: 2000 },
    { label: `5000${currency}`, value: 5000 },
    { label: `10000${currency}`, value: 10000 },
    { label: `20000${currency}`, value: 20000 },
  ];

  const value = marks[rangeValue].value;
  const potentialValue = value * getCoefficientByAmount(value);

  return (
    <Wrapper>
      <RangeSliderStyles />
      <Title>{title}</Title>
      <ValueWrap>
        <ValueItem>
          <ValueText>{initialTitle}</ValueText>
          <Value>
            {currency}
            {formatNumber(value)}
          </Value>
        </ValueItem>
        <ValueItem>
          <ValueText>{potentialTitle}</ValueText>
          <PotentialValue>
            {currency}
            {formatNumber(potentialValue)}
          </PotentialValue>
        </ValueItem>
      </ValueWrap>
      <Sldier
        step={null}
        marks={marks}
        value={rangeValue}
        min={0}
        max={4}
        onChange={(value) => changeRangeValue(value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1156px;
  width: 100%;
  margin: 60px 0;
  padding: 44px 50px 62px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 5px 32px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const Title = styled.div`
  max-width: 875px;
  margin: 0 auto 68px;
  font-weight: bold;
  font-size: 38px;
  line-height: 126.1%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #2e2e36;
  ${({ theme: { mediaMobile } }) => mediaMobile`
    font-size: 28px;
  `}
`;

const ValueWrap = styled.div`
  max-width: 460px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 40px;
  ${({ theme: { mediaToDesktop } }) => mediaToDesktop`
    text-align: center;
  `}
`;

const ValueText = styled.div`
  flex-grow: 1;
  font-size: 15px;
  letter-spacing: 0.02em;
  color: #727b83;
  margin-bottom: 15px;
  display: block;
  ${({ theme: { mediaMobile } }) => mediaMobile`
    font-size: 14px;
  `}
`;

const Value = styled.div`
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 0.02em;
  color: #727b83;
  ${({ theme: { mediaMobile } }) => mediaMobile`
    font-size: ${({ theme }) => theme.FS_MEDIUM};
  `}
`;

const ValueItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PotentialValue = styled(Value)`
  color: #fe753f;
`;

RangeSlider.prototype = {
  title: PropTypes.string.isRequired,
  initialTitle: PropTypes.string.isRequired,
  potentialTitle: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default RangeSlider;
