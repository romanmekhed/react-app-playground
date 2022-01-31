import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';

import CustomTooltip from './Tooltip';
import Loader from './Loader';
import * as utils from './utils';
import useStockChart from './helpers/useStockChart';

import {
  Wrapper as BtcWrapper,
  Chart as BtcChart,
  Title as BtcTitle,
  Inner as BtcInner,
  Name as BtcName,
  Main as BtcMain,
  Price as BtcPrice,
  Graph as BtcGraph,
  Dates as BtcDates,
  Info as BtcInfo,
  Item as BtcItem,
  ItemTitle as BtcItemTitle,
  ItemAmount as BtcItemAmount,
  Button as BtcButton,
} from './helpers/BtcSkin';
import {
  Wrapper as AmzWrapper,
  Chart as AmzChart,
  Title as AmzTitle,
  Inner as AmzInner,
  Name as AmzName,
  Main as AmzMain,
  Price as AmzPrice,
  Graph as AmzGraph,
  Dates as AmzDates,
  Info as AmzInfo,
  Item as AmzItem,
  ItemTitle as AmzItemTitle,
  ItemAmount as AmzItemAmount,
  Button as AmzButton,
} from './helpers/AmzSkin';

const modes = {
  amazon: {
    loaderColor: '#ff7a00',
    lineColor: '#029b53',
    graphGrid: true,
    requestFunctionParam: 'TIME_SERIES_DAILY',
    showInfoBlock: false,
    skin: {
      Wrapper: AmzWrapper,
      Chart: AmzChart,
      Title: AmzTitle,
      Inner: AmzInner,
      Name: AmzName,
      Main: AmzMain,
      Price: AmzPrice,
      Graph: AmzGraph,
      Dates: AmzDates,
      Info: AmzInfo,
      Item: AmzItem,
      ItemTitle: AmzItemTitle,
      ItemAmount: AmzItemAmount,
      Button: AmzButton,
    },
  },
  bitcoin: {
    loaderColor: '#544de2',
    lineColor: '#2219e5',
    graphGrid: false,
    requestFunctionParam: 'DIGITAL_CURRENCY_DAILY',
    showInfoBlock: true,
    skin: {
      Wrapper: BtcWrapper,
      Chart: BtcChart,
      Title: BtcTitle,
      Inner: BtcInner,
      Name: BtcName,
      Main: BtcMain,
      Price: BtcPrice,
      Graph: BtcGraph,
      Dates: BtcDates,
      Info: BtcInfo,
      Item: BtcItem,
      ItemTitle: BtcItemTitle,
      ItemAmount: BtcItemAmount,
      Button: BtcButton,
    },
  },
};

const StockChart = ({
  title,
  stockCode,
  stockLogo,
  stockText,
  buttonText,
  handleButtonClick,
  mode,
  datesPeriod,
}) => {
  const activeMode = modes[mode];
  const { skin: Skin } = activeMode;

  const {
    isLoading,
    stockPrice,
    priceStatus,
    uniqueMonths,
    chartData,
    values,
  } = useStockChart({ stockCode, mode: modes[mode], datesPeriod });

  const yearsArray = datesPeriod && utils.getYearsRange(datesPeriod);

  return (
    <Skin.Wrapper>
      <Skin.Chart>
        <Skin.Title>{title}</Skin.Title>
        <Skin.Inner>
          <Skin.Name>
            <img src={stockLogo} alt={stockCode} /> {parse(stockText)}
          </Skin.Name>
          <Skin.Main>
            {isLoading && <Loader isLoading color={activeMode.loaderColor} />}
            <Skin.Price
              isLoading={isLoading}
              status={priceStatus.number < 0 ? 'is-low' : 'is-up'}>
              <p>{parse(stockPrice)}</p>
              <span>{priceStatus.formattedValue}</span>
            </Skin.Price>
            <Skin.Graph>
              <ResponsiveContainer>
                <AreaChart
                  width='100%'
                  height='100%'
                  data={chartData}
                  margin={{
                    top: 50,
                    right: 0,
                    left: 0,
                    bottom: 50,
                  }}>
                  <Tooltip content={<CustomTooltip />} />

                  <XAxis
                    hide={true}
                    axisLine={false}
                    tickLine={false}
                    dataKey='date'
                    tickFormatter={utils.formatXAxis}
                  />

                  <YAxis
                    hide={true}
                    type='number'
                    domain={[Math.min(...values), Math.max(...values)]}
                  />

                  <Area
                    type='monotone'
                    dataKey='value'
                    stroke={activeMode.lineColor}
                    strokeWidth={2}
                    fill='transparent'
                    fillOpacity='.3'
                  />

                  {activeMode.graphGrid && (
                    <CartesianGrid
                      vertical={false}
                      horizontalPoints={[50, 100, 150, 200]}
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </Skin.Graph>
            <Skin.Dates isLoading={isLoading}>
              {datesPeriod && datesPeriod > 12
                ? yearsArray.map((item, i) => <span key={i}>{item}</span>)
                : uniqueMonths.map((item, i) => <span key={i}>{item}</span>)}
            </Skin.Dates>
            {activeMode.showInfoBlock && (
              <Skin.Info>
                <Skin.Item>
                  <Skin.ItemTitle>Market cap</Skin.ItemTitle>
                  <Skin.ItemAmount>$373.4B</Skin.ItemAmount>
                </Skin.Item>
                <Skin.Item>
                  <Skin.ItemTitle>Volum (24 hours)</Skin.ItemTitle>
                  <Skin.ItemAmount>$373.4B</Skin.ItemAmount>
                </Skin.Item>
              </Skin.Info>
            )}
          </Skin.Main>
        </Skin.Inner>
        <Skin.Button type='button' onClick={handleButtonClick}>
          {buttonText}
        </Skin.Button>
      </Skin.Chart>
    </Skin.Wrapper>
  );
};

StockChart.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  stockCode: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  datesPeriod: PropTypes.number,
  stockLogo: PropTypes.string.isRequired,
  stockText: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default StockChart;
