import React from 'react';
import styled from 'styled-components';

const Axes = ({ yAxis }) => {
  const xAxis = ['1m', '2m', '3m'];

  return (
    <>
      <Y_Axis>
        {yAxis.map((value, index) => (
          <span key={index}>{value}</span>
        ))}
      </Y_Axis>
      <X_Axis>
        {xAxis.map((value, index) => (
          <span key={index}>{value}</span>
        ))}
      </X_Axis>
    </>
  );
};

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
  right: 55px;
  left: 100px;
  display: flex;
  justify-content: space-between;
  color: #a5a5a5;
  @media screen and (max-width: 450px) {
    right: 20px;
    left: 70px;
  }
  span {
    display: block;
    text-align: center;
    width: 92px;
    font-size: 13px;
  }
`;

export default Axes;
