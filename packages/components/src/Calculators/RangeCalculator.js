import React, { useEffect } from 'react';
import Slider from 'rc-slider';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RangeSliderStyles from './helpers/RangeSliderStyles';
import useCalculator from './helpers/useCalculator';

const BASE_VALUE = 1;
const RangeCalculator = ({
  initialTitle,
  profitTitle,
  currency,
  marks,
  primaryColor,
}) => {
  let localMarks =
    marks.length === 1
      ? [{ label: `0${currency}`, value: 0 }, ...marks]
      : [...marks];
  const { value, updateValue, amount, calculateAmount } = useCalculator({
    minDeposit: localMarks[0].value,
    baseValue: localMarks[marks.length <= 1 ? 0 : BASE_VALUE].value,
  });

  useEffect(() => {
    calculateAmount();
  }, [value]);

  return (
    <Wrapper $vars={{ primaryColor }}>
      <RangeSliderStyles />
      <ValueWrap>
        <ValueItem>
          <ValueText>{initialTitle}</ValueText>
          <Value>
            {currency}
            {value}
          </Value>
        </ValueItem>
        <ValueItem>
          <ValueText>{profitTitle}</ValueText>
          <PotentialValue>
            {currency}
            {amount}
          </PotentialValue>
        </ValueItem>
      </ValueWrap>
      <Slider
        step={null}
        marks={localMarks}
        min={0}
        max={localMarks.length - 1}
        defaultValue={localMarks.length <= 1 ? 0 : BASE_VALUE}
        onChange={(value) => updateValue(localMarks[value].value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1156px;
  width: 100%;
  padding: 44px 50px 62px;
  box-sizing: border-box;
  ${({ $vars: { primaryColor } }) =>
    `
      --calc-primary-color: ${primaryColor};
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
  color: var(--calc-primary-color);
`;

RangeCalculator.prototype = {
  currency: PropTypes.string.isRequired,
  initialTitle: PropTypes.string.isRequired,
  profitTitle: PropTypes.string.isRequired,
  marks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ),
};

export default RangeCalculator;
