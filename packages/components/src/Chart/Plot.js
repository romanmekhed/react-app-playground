import React from 'react';
import styled from 'styled-components';

const DiagonalLine = () => (
  <svg width='100%' height='100%'>
    <line
      x1='0'
      y1='100%'
      x2='100%'
      y2='0'
      stroke='#bbbbbb'
      strokeDasharray='4'
    />
  </svg>
);

const BackgroundLines = () => (
  <Lines>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </Lines>
);

const Plot = ({ value, maxValue }) => {
  return (
    <Wrapper>
      <BackgroundLines />
      <PlotData style={{ height: `${(value / maxValue) * 100}%` }}>
        <Bar>
          <TopText>Amazon({value}$)</TopText>
          <BottomText>Bank({parseInt(0.3 * value)}$)</BottomText>
        </Bar>
        <TopLine>
          <DiagonalLine />
        </TopLine>
        <BottomLine>
          <DiagonalLine />
        </BottomLine>
      </PlotData>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
const PlotData = styled.div`
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
  background: #d61f2c;
  @media screen and (max-width: 450px) {
    width: 67px;
    right: 0;
  }
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

const TopLine = styled.div`
  position: absolute;
  right: 127px;
  left: 0;
  bottom: 0;
  height: 100%;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const BottomLine = styled(TopLine)`
  height: 30%;
`;

const TopText = styled.div`
  position: absolute;
  bottom: 100%;
  text-align: right;
  white-space: nowrap;
  right: 100%;
  font-size: 13px;
  padding-right: 11px;
`;
const BottomText = styled(TopText)`
  bottom: 30%;
`;

export default Plot;
