import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider, { Handle } from 'rc-slider';

import PredictionGraph from './Components/PredictionGraph';
import useCalculator from './helpers/useCalculator';
import Select from './Components/Select';
import PredictionChartStyles from './helpers/PredictionChartStyles';

const PredictionChart = ({
  title,
  rangeTitle,
  selectTitle,
  selectOptions,
  resultTitle,
  minDeposit,
  currency,
  funnelLanguage,
  brands,
}) => {
  const [isMobile, setIsMobile] = useState(null);
  const { value, updateValue, amount, calculateAmount } = useCalculator({
    minDeposit,
    baseValue: 250,
  });

  useEffect(() => {
    const windowWidth = document.documentElement.clientWidth;
    setIsMobile(windowWidth <= 960);
  }, []);

  const sliderHandle = ({ value, dragging, ...props }) => {
    return (
      <Handle value={value} {...props}>
        {new Intl.NumberFormat('en-US').format(value)}
        <span>{currency}</span>
      </Handle>
    );
  };

  useEffect(() => {
    calculateAmount();
  }, [value]);

  return (
    <Wrapper>
      <PredictionChartStyles />
      <Title>{title}</Title>
      <Top>
        <RangeSection>
          <RangeTitle>{rangeTitle}</RangeTitle>
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
        </RangeSection>
        <SelectWrap>
          <Select title={selectTitle} options={selectOptions} />
        </SelectWrap>
      </Top>

      <PredictionGraph />

      <SubTitle>{resultTitle}</SubTitle>
      <Result>
        {new Intl.NumberFormat('en-US').format(amount)}
        <span>{currency}</span>
      </Result>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0 5px 32px rgb(0 0 0 / 15%);
  border-radius: 10px;
  padding: 0 76px 36px;
  overflow: hidden;
`;

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  padding: 39px 0;
  border-bottom: 3px solid #f7f7f7;
`;

const RangeSection = styled.div`
  width: 100%;
  max-width: 660px;
`;

const SubTitle = styled.div`
  margin-bottom: 8px;
  font-size: 15px;
  text-align: center;
  line-height: 1.26;
`;

const Result = styled.div`
  background: #f7f7f7;
  border-radius: 10px;
  text-align: center;
  padding: 7px;
  font-weight: 700;
  font-size: 63px;
  line-height: 1.24;
  letter-spacing: 0.02em;
  color: #06d21b;
`;

const SliderWrap = styled.div`
  margin-top: 33px;
  .rc-slider-handle {
    top: -6px;
    font-size: 15px;
    color: #727b83;
    border-color: #ba3030;
    width: 109px;
    border-radius: 5px;
    height: 45px;
    :before,
    :after {
      border-color: #ba3030;
      padding: 5px;
    }
  }
  .rc-slider {
    margin-top: 33px;
    height: 20px;
  }
  .rc-slider-rail {
    padding: 0 0 0 96px;
    height: 20px;
    border-radius: 40px;
  }
  .rc-slider-track {
    background: #ba3030;
    height: 100%;
    border-radius: 40px;
  }
`;

const SelectWrap = styled.div`
  width: 220px;
`;

const RangeTitle = styled.div`
  color: #616161;
  font-size: 15px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 55px 0 15px;
`;

export default PredictionChart;
