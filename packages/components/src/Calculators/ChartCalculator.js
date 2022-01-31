import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useCalculator from './helpers/useCalculator';

const Y_AXIS_STEPS = 5;

const ChartCalculator = ({
  minDeposit,
  currency,
  isCurrencyBeforeAmount,
  title,
  buttonText,
  errorMessage,
  primaryColor,
  primaryBrand,
  secondaryBrand = 'Bank',
}) => {
  const {
    value,
    updateValue,
    handleEnterKeyPress,
    validateOnInput,
    hasError,
    amount,
    calculateAmount,
  } = useCalculator({ minDeposit, baseValue: 500 });
  const [yAxisSteps, setyAxisSteps] = useState([
    2500,
    2000,
    1500,
    1000,
    500,
    0,
  ]);

  const [barHeight, setBarHeight] = useState('50%');
  const [localAmount, setLocalAmount] = useState(amount);

  useEffect(() => {
    calculateAmount();
  }, []);

  useEffect(() => {
    if (hasError) return;
    setLocalAmount(amount);

    // update yAxis
    let ROUND_TO = Y_AXIS_STEPS * 100;
    if (parseInt(amount).toString().length >= 5) ROUND_TO = 10000;

    // base yAxis
    let maxValue = Math.ceil(amount / ROUND_TO) * ROUND_TO;
    let stepValue = maxValue / Y_AXIS_STEPS;

    //  make yAxis looks more pretty
    maxValue += Math.ceil(stepValue / ROUND_TO) * ROUND_TO;
    stepValue = maxValue / Y_AXIS_STEPS;

    let currentStepValue = maxValue;
    let yAxisData = [currentStepValue];

    for (let i = 0; i < Y_AXIS_STEPS; i++) {
      yAxisData.push((currentStepValue -= stepValue));
    }
    setyAxisSteps([...yAxisData]);

    // update bar
    setBarHeight(`${(amount / maxValue) * 100}%`);
  }, [amount]);

  const errorText = isCurrencyBeforeAmount
    ? `${errorMessage} ${currency}${minDeposit}`
    : `${errorMessage} ${minDeposit}${currency}`;

  return (
    <Wrapper $vars={{ primaryColor }}>
      <Calc>
        <Title>{title}</Title>
        <Inner>
          <Currency>{currency}</Currency>
          <Input
            onChange={updateValue}
            onKeyPress={handleEnterKeyPress}
            onInput={validateOnInput}
            value={value}
          />
          <Button onClick={calculateAmount}>{buttonText}</Button>
          {hasError && <ErrorMessage>{errorText}</ErrorMessage>}
        </Inner>
      </Calc>
      <Content>
        <Y_Axis>
          {yAxisSteps.map((number, i) => (
            <span key={i}>{number}</span>
          ))}
        </Y_Axis>
        <X_Axis>
          <span>1m</span>
          <span>2m</span>
          <span>3m</span>
        </X_Axis>
        <Graph>
          <Lines>
            <i />
            <i />
            <i />
            <i />
            <i />
          </Lines>
          <GraphInner style={{ height: barHeight }}>
            <Bar>
              <BarText>
                {primaryBrand}(
                <span>{Boolean(amount) ? amount : localAmount}</span>
                {currency})
              </BarText>
              <BarTextSm>
                {secondaryBrand}(
                <span>
                  {parseFloat(
                    !!amount
                      ? (amount * 0.3).toFixed(2)
                      : (localAmount * 0.3).toFixed(2)
                  )}
                </span>
                {currency})
              </BarTextSm>
            </Bar>
            <GraphDia>
              <svg>
                <line x1='0' y1='100%' x2='100%' y2='0' />
              </svg>
            </GraphDia>
            <GraphDiaSmall>
              <svg>
                <line x1='0' y1='100%' x2='100%' y2='0' />
              </svg>
            </GraphDiaSmall>
          </GraphInner>
        </Graph>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: inherit;
  border: 4px solid var(--calc-chart-primary-color);

  ${({ theme: { mediaMobile } }) => mediaMobile`
    flex-direction: column;
  `}
  ${({ $vars: { primaryColor } }) =>
    `
      --calc-chart-primary-color: ${primaryColor};
    `}
`;

const Calc = styled.div`
  padding: 17px 16px 25px;
  background: #f1f1f1;
`;

const Title = styled.div`
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  ${({ theme }) => theme.mediaMobile`
    font-size: 18px;
  `};
`;

const Inner = styled.div`
  position: relative;
  width: 380px;
  max-width: 100%;
  margin: 0 auto;
  font-size: 15px;
  ${({ theme }) => theme.mediaMobile`
    font-size: 18px;
  `};
`;

const Currency = styled.div`
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #d6d6d6;
  font-size: inherit;
  ${({ theme }) => theme.mediaMobile`
    width: 53px;
  `};
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 40px;
  border: 0;
  padding-left: 45px;
  outline: none !important;
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.11);
  font-size: inherit;
  ${({ theme }) => theme.mediaMobile`
    height: 51px;
    padding-left: 65px;
  `};
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border: 0;
  color: #fff;
  background: var(--calc-chart-primary-color);
  border-radius: 40px;
  text-transform: uppercase;
  padding: 0 13px;
  cursor: pointer;
  outline: none !important;
`;

const ErrorMessage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  font-size: 12px;
  color: red;
  padding: 2px 10px 0;
`;

const Content = styled.div`
  position: relative;
  height: 360px;
  padding: 30px 20px 60px 73px;
`;

const Y_Axis = styled.div`
  position: absolute;
  left: 0;
  top: 30px;
  bottom: 55px;
  width: 72px;
  padding-right: 10px;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  color: #a5a5a5;
  z-index: 2;
  span {
    font-size: 13px;
    line-height: 1;
  }
`;

const X_Axis = styled.div`
  position: absolute;
  bottom: 20px;
  left: 90px;
  right: 55px;
  left: 100px;
  display: flex;
  justify-content: space-between;
  color: #a5a5a5;
  ${({ theme }) => theme.mediaMobile`  
    right: 20px;
    left: 70px;
  `};
  span {
    display: block;
    text-align: center;
    width: 92px;
    font-size: 13px;
  }
`;

const Graph = styled.div`
  position: absolute;
  left: 73px;
  right: 20px;
  bottom: 60px;
  top: 30px;
  border-bottom: 1px solid #ecf0f4;
`;

const Lines = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 51px;
  padding-top: 7px;
  i {
    width: 100%;
    height: 1px;
    border-top: 1px dashed #ecf0f4;
  }
`;

const GraphInner = styled.div`
  position: absolute;
  bottom: 0;
  height: 70%;
  width: 100%;
  transition: height 0.3s;
`;

const Bar = styled.div`
  position: absolute;
  right: 35px;
  height: 100%;
  width: 92px;
  background: var(--calc-chart-primary-color);
  ${({ theme }) => theme.mediaMobile`
    width: 67px;
    right: 0;
  `};
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 30%;
    width: 100%;
    left: 0;
    background: #22b0fc;
  }
`;

const BarText = styled.div`
  position: absolute;
  bottom: 100%;
  text-align: right;
  white-space: nowrap;
  right: 100%;
  font-size: 13px;
  padding-right: 11px;
`;

const BarTextSm = styled(BarText)`
  bottom: 30%;
`;

const GraphDia = styled.div`
  position: absolute;
  right: 127px;
  left: 0;
  bottom: 0;
  height: 100%;
  ${({ theme }) => theme.mediaMobile`
    display: none;
  `};
  svg {
    width: 100%;
    height: 100%;
    line {
      stroke: #bbbbbb;
      stroke-dasharray: 4;
    }
  }
`;

const GraphDiaSmall = styled(GraphDia)`
  height: 30%;
`;

ChartCalculator.propTypes = {
  minDeposit: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  isCurrencyBeforeAmount: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
};

export default ChartCalculator;
