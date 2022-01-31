import React, { useEffect, useState } from 'react';
import * as utils from '../utils';

const useStockChart = ({ stockCode, mode, datesPeriod }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [stockPrice, setStockPrice] = useState('');
  const [priceStatus, setPriceStatus] = useState({
    number: 0,
    formattedValue: 0,
  });

  const [uniqueMonths, setUniqueMonths] = useState([]);
  const [chartData, setChartData] = useState(null);

  const values = [];

  useEffect(() => {
    const ac = new AbortController();
    setIsLoading(true);

    const KEY = 'TUHLAGM8MBOYYLRH';
    const BASE_URL = 'https://www.alphavantage.co/';
    const params = `function=${
      mode.requestFunctionParam
    }&symbol=${stockCode}&market=USD&outputsize=${
      datesPeriod ? 'full' : 'compact'
    }`;
    const dateRangeLength = datesPeriod ? datesPeriod : 3;

    fetch(`${BASE_URL}query?${params}&apikey=${KEY}`, { signal: ac.signal })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const today = new Date();
        const threeMonthAgo = new Date().setMonth(
          new Date().getMonth() - dateRangeLength
        );
        const processedData = utils.convertData(data);
        const stockData = utils.getDataBetweenDatesInArray(
          processedData,
          threeMonthAgo,
          today
        );
        const uniqueMonthsArray = [];
        const dateOptions = { year: 'numeric', month: 'short' };
        const convertedData = stockData
          .reverse()
          .reduce((arr, item, index, curArr) => {
            const valueKey = Boolean(item['4b. close (USD)'])
              ? '4b. close (USD)'
              : '4. close';
            const { date } = item;
            const currentValue = item[valueKey];

            // if last item
            if (index + 1 === curArr.length) {
              // set price status
              const previousValue = curArr.length
                ? curArr[curArr.length - 2][valueKey]
                : null;
              const percentageDifference =
                previousValue !== null
                  ? utils.getPercentageDifference(currentValue, previousValue)
                  : null;

              setPriceStatus(percentageDifference);

              // set price
              const formatValue = Intl.NumberFormat('en-US').format(
                currentValue
              );
              const dotIndex = formatValue.indexOf('.');
              const dec = formatValue.slice(dotIndex);
              const full = formatValue.slice(0, dotIndex);

              setStockPrice(`$ ${full}<sup>${dec}</sup>`);
            }

            // generate ticks
            let formatDate = date.toLocaleDateString('en-US', dateOptions);

            if (uniqueMonthsArray.indexOf(formatDate) === -1)
              uniqueMonthsArray.push(formatDate);

            setUniqueMonths([...uniqueMonthsArray]);
            values.push(currentValue);
            return [...arr, { date, value: currentValue }];
          }, []);

        setIsLoading(false);
        setChartData(convertedData);
      });
    return () => ac.abort();
  }, []);

  return {
    isLoading,
    stockPrice,
    priceStatus,
    uniqueMonths,
    chartData,
    values,
  };
};

export default useStockChart;
