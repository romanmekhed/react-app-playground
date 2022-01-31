import React from 'react';
import styled from 'styled-components';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import CustomTooltip from '../Tooltip';
import GraphStyles from '../helpers/styles';
import Loader from '../Loader';

const formatXAxis = (date) => {
  if (date instanceof Date) {
    let d = date;
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    return `${mo} ${ye}`;
  }

  return null;
};

const Graph = ({ data, isLoading }) => {
  return (
    <Wrapper>
      <GraphStyles width='100%' height='100%' />
      {isLoading && (
        <>
          <Loader isLoading />
        </>
      )}
      <GraphWrap isLoading={isLoading}>
        <ResponsiveContainer>
          <AreaChart
            width='100%'
            height='100%'
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid vertical={false} strokeWidth={1} />
            <XAxis dataKey='date' tickFormatter={formatXAxis} />
            <YAxis axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type='monotone'
              dataKey='value'
              stroke='#06d21b'
              strokeWidth={2}
              fill='#06d21b'
              fillOpacity='.3'
            />
          </AreaChart>
        </ResponsiveContainer>
      </GraphWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px 0;
  position: relative;
  ${({ theme }) => theme.mediaMobile`
    margin-left: -37px;
  `};
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 30px;
  opacity: 0.6;
  z-index: 1;
  ${({ theme }) => theme.mediaMobile`
    left: 36px;
    right: 0;
  `};
  img {
    display: block;
    width: 100%;
    height: 100%;
    filter: blur(3px);
  }
`;

const GraphWrap = styled.div`
  width: 100%;
  height: 220px;
  padding: 0 52px 0 0;
  transition: filter 0.3s;
  ${({ isLoading }) => (isLoading ? 'filter: blur(3px);' : '')};
  ${({ theme }) => theme.mediaMobile`
    padding-right: 0;
  `};
`;

export default Graph;
