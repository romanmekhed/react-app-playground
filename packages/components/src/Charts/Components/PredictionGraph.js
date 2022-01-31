import React, { useState, useEffect } from 'react';
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
import * as utils from '../utils';

const formatXAxis = (date) => {
  if (date instanceof Date) {
    let d = date;
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);

    return ye;
  }

  return null;
};

const Graph = ({ data }) => {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();
    setIsLoading(true);

    fetch(
      `https://www.alphavantage.co/query?apikey=TUHLAGM8MBOYYLRH&function=TIME_SERIES_DAILY&symbol=AMZN&outputsize=full&`,
      { signal: ac.signal }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const fiveYearsAgo = new Date(
          new Date().setFullYear(new Date().getFullYear() - 5)
        );

        const today = new Date();

        const processedData = utils.convertData(data);

        const convertedData = utils.getDataBetweenDatesInArray(
          processedData,
          fiveYearsAgo,
          today
        );
        let firstValue = null;
        const uniqueYears = new Set();
        let percentageStatus = 0;
        const graph = convertedData
          .reverse()
          .reduce((arr, item, index, currArray) => {
            const { date, '4. close': currentValue } = item;
            const previousValue = arr.length ? arr[arr.length - 1][1] : null;
            const percentageDifference =
              previousValue !== null
                ? utils.getPercentageDifference(currentValue, previousValue)
                : null;

            if (index === currArray.length - 1) {
              percentageStatus = percentageDifference;
            }

            // find stock price five years ago
            const currDate = date.toISOString().slice(0, 7);
            if (fiveYearsAgo === currDate) {
              firstValue = currentValue;
            }

            uniqueYears.add(new Date(date).getFullYear());

            return [
              ...arr,
              { date, value: currentValue, pDiff: percentageStatus },
            ];
          }, []);

        // const [FIRST_VALUE, LAST_VALUE] = [
        //   firstValue,
        //   graph[graph.length - 1][1],
        // ];
        const yearTicks = utils.initYearTicks(
          convertedData[0].date,
          Array.from(uniqueYears)
        );

        // this._activeData = this._savedData[brand] = {
        //   data: convertedData,
        //   graph,
        //   FIRST_VALUE,
        //   LAST_VALUE,
        //   yearTicks,
        //   percentageStatus,
        // };
        console.log(graph);
        setChartData(graph);
        setIsLoading(false);
      });

    return () => ac.abort();
  }, []);

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
            data={chartData}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid strokeWidth={1} vertical={false} />
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
            {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
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
  .yAxis .recharts-cartesian-axis-tick-value {
    font-size: 15px;
  }
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
  height: 300px;
  padding: 0 52px 0 0;
  transition: filter 0.3s;
  ${({ isLoading }) => (isLoading ? 'filter: blur(3px);' : '')};
  ${({ theme }) => theme.mediaMobile`
    padding-right: 0;
  `};
`;

export default Graph;
