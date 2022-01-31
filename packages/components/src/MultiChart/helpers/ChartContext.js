import React, { createContext, useReducer, useContext, useEffect } from 'react';
import * as utils from './utils';
import chartReducer from './chartReducer';

export const ChartContext = createContext(null);

export const ChartProvider = ({ children, brandsList }) => {
  const initialState = {
    items: brandsList,
    activeItemIndex: 0,
    isLoading: false,
    graphDataItems: {},
  };
  const [state, dispatch] = useReducer(chartReducer, initialState);
  const {
    isLoading,
    items,
    activeItemIndex,
    graphDataItems,
    prevGraphState,
  } = state;
  const activeItem = items[activeItemIndex];
  const graphData = graphDataItems[activeItem.id] || prevGraphState;

  useEffect(() => {
    if (activeItem.id in graphDataItems) return;
    const ac = new AbortController();

    dispatch({ type: 'loading_start' });

    fetch(
      `https://www.alphavantage.co/query?apikey=TUHLAGM8MBOYYLRH&function=TIME_SERIES_DAILY&symbol=${activeItem.id}&outputsize=full&`,
      { signal: ac.signal }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const convertedData = utils.convertData(data);
        const graph = convertedData.reverse().reduce((arr, item) => {
          const { date, close: value } = item;
          return [...arr, { date, value }];
        }, []);

        dispatch({ type: 'loading_success', payload: graph });
      });

    return () => ac.abort();
  }, [activeItem]);

  return (
    <ChartContext.Provider
      value={{
        dispatch,
        activeItem,
        isLoading,
        graphData,
      }}>
      {children}
    </ChartContext.Provider>
  );
};
export const useChartContext = () => useContext(ChartContext);
