import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import SwipeDirection from '../../SwipeDirection/SwipeDirection';

const Brands = ({ items, onUpdateCallback }) => {
  const [active, setActive] = useState(0);
  const brandsList = [...items];

  useEffect(() => {
    onUpdateCallback(brandsList[active].multiplier);
  }, [active]);

  const handlePrevious = useCallback(() => {
    const activeIndex = active === 0 ? brandsList.length - 1 : active - 1;
    setActive(activeIndex);
  }, [active]);

  const handleNext = useCallback(() => {
    const activeIndex = active === brandsList.length - 1 ? 0 : active + 1;

    setActive(activeIndex);
  }, [active]);

  return (
    <Wrapper>
      <Controls>
        <ControlPrev onClick={handlePrevious} />
        <ControlNext onClick={handleNext} />
      </Controls>
      <SwipeDirection onSwipeLeft={handlePrevious} onSwipeRight={handleNext}>
        <Brand key={brandsList[active].id}>
          <Logo>
            <img
              src={brandsList[active].logo}
              alt={brandsList[active].tradingCode}
            />
          </Logo>
          <Info>
            <Text>{brandsList[active].text}</Text>
            <TradingCode>{brandsList[active].tradingCode}</TradingCode>
          </Info>
        </Brand>
      </SwipeDirection>
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
  background: var(--calc-primary-color);
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
  text-align: center;
  ${({ theme }) => theme.mediaMobile`
    min-height: 63px;
  `};
`;

const Text = styled.div`
  font-weight: 700;
  color: #adadad;
  font-size: 18px;
  ${({ theme }) => theme.mediaFromTablet`
    :lang(es) {
      font-size: 19px;
      letter-spacing: 0.03em;
    }
    :lang(de) {
      font-size: 20px;
      letter-spacing: 0.02em;
    }
    :lang(it) {
      font-size: 19px;
      letter-spacing: 0.02em;
    }
    :lang(nl) {
      font-size: 20px;
    }
  `};
  ${({ theme }) => theme.mediaTablet`  
    font-size: 20px;
    line-height: 1.261;
    text-align: center;
    letter-spacing: 0.02em;
    margin-left: -15px;
  `};
  ${({ theme }) => theme.mediaMobile`
    font-size: 17px;
    letter-spacing: 0.02em;
  `};
`;

const TradingCode = styled.div`
  text-transform: uppercase;
  color: #313131;
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
  ${({ theme }) => theme.mediaTablet`  
    margin-top: 7px;
    margin-left: -21px;
  `};
  ${({ theme }) => theme.mediaMobile`  
    font-size: 17px;
    margin-top: 2px;
  `};
`;

export default Brands;
