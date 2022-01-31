import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Axes from './Axes';
import Plot from './Plot';

const Graph = ({ value }) => {
  const generateYAxis = () => {
    let ROUND_TO = STEPS * 100;
    if (parseInt(value).toString().length >= 5) ROUND_TO = 10000;

    // base yAxis
    let MAX = Math.ceil(value / ROUND_TO) * ROUND_TO;
    let stepValue = MAX / STEPS;

    //  make yAxis looks more pretty
    MAX += Math.ceil(stepValue / ROUND_TO) * ROUND_TO;
    stepValue = MAX / STEPS;

    let topValue = MAX;
    let newYAxis = [topValue];
    for (let i = 0; i < STEPS; i++) {
      newYAxis.push((topValue -= stepValue));
    }
    return newYAxis;
  };
  const STEPS = 5;

  const [yAxis, setYAxis] = useState(() => generateYAxis());

  // generate yAxis
  useEffect(() => {
    const yAxis = generateYAxis();

    setYAxis(yAxis);
  }, [value]);
  return (
    <Wrapper>
      <Axes yAxis={yAxis} />
      <Plot value={value} maxValue={yAxis[0]} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 360px;
  padding: 30px 20px 60px 73px;
  overflow: hidden;
`;

export default Graph;
