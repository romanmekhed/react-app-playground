import React, { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { useChartContext } from '../helpers/ChartContext';
import SwipeDirection from '../../SwipeDirection/SwipeDirection';

const Brands = () => {
  const {
    activeItem: { text, logo, tradingCode, id },
    dispatch,
    isLoading,
  } = useChartContext();

  // TO DO parse 'text' able to use 'useText'

  const handlePrevious = useCallback(() => dispatch({ type: 'show_prev' }), []);
  const handleNext = useCallback(() => dispatch({ type: 'show_next' }), []);

  return (
    <Wrapper>
      <Controls isLoading={isLoading}>
        <ControlPrev onClick={handlePrevious} />
        <ControlNext onClick={handleNext} />
      </Controls>
      <BrandsWrapper isLoading={isLoading}>
        <SwipeDirection onSwipeLeft={handlePrevious} onSwipeRight={handleNext}>
          <Brand key={id}>
            <Logo>
              <img src={logo} alt={tradingCode} />
            </Logo>
            <Info>
              <Text>{text}</Text>
              <TradingCode>{tradingCode}</TradingCode>
            </Info>
          </Brand>
        </SwipeDirection>
      </BrandsWrapper>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100px;
  margin-bottom: 31px;
`;

const Controls = styled.div`
  max-width: 340px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  transition: opacity 0.3s;
  ${({ isLoading }) =>
    isLoading
      ? `
    pointer-events: none;
    opacity: .7;`
      : ''}
`;

const Control = styled.div`
  position: absolute;
  top: 28px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: var(--chart-primary-color);
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    width: 11px;
    height: 19px;
    background-image: url("data:image/svg+xml,%3Csvg width='11' height='19' viewBox='0 0 11 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.01307 0.8547C1.30776 0.557304 1.7158 0.397169 2.12383 0.397169C2.53186 0.397169 2.91722 0.557304 3.23458 0.8547L10.4885 8.1752C11.1005 8.79287 11.1005 9.77656 10.4885 10.3942L3.23458 17.7147C2.62253 18.3324 1.62512 18.3324 1.01307 17.7147C0.401027 17.0971 0.401027 16.1134 1.01307 15.4957L7.15622 9.29615L1.01307 3.07373C0.401027 2.45606 0.401027 1.44949 1.01307 0.8547Z' fill='white'/%3E%3C/svg%3E%0A");
  }
`;

const ControlPrev = styled(Control)`
  left: 0;
  padding-right: 2px;
  &:after {
    transform: scaleX(-1);
  }
`;

const ControlNext = styled(Control)`
  right: 0;
  padding-left: 2px;
`;

const BrandsWrapper = styled.div`
  ${({ isLoading }) => (isLoading ? 'pointer-events: none;' : '')};
`;

const Brand = styled.div`
  animation: ${fadeIn} 1s ease;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 10px 50px;
  margin-bottom: 6px;
  border-bottom: 1px solid #d1d3d4;
  img {
    max-width: 300px;
    max-height: 100%;
    ${({ theme }) => theme.mediaMobile`
        max-width: 100%;
    `};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  color: #adadad;
  font-weight: 700;
  font-size: 19px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-align: center;
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaMobile`
    font-size: 15px;
  `};
`;

const TradingCode = styled.div`
  color: #313131;
  font-size: 20px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: 0.02em;
  ${({ theme }) => theme.mediaMobile`
    font-size: 16px;
  `};
`;

export default Brands;
