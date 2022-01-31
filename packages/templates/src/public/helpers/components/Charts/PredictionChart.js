import React from 'react';
import PropTypes from 'prop-types';
import { PredictionChart } from '@nfs-react/components';

const PredictionChartComponent = ({
  title = 'Discover Your Potential Short-term Profits',
  rangeTitle = 'INITIAL INVESTMENT',
  selectTitle = 'Investment period',
  selectOptions = [
    { value: 12, title: 'One Year' },
    { value: 6, title: '6 Month' },
    { value: 3, title: '3 Month' },
  ],
  resultTitle = 'Estimated Profit',
  minDeposit = 250,
  currency = '€',
}) => {
  return (
    <PredictionChart
      title={title}
      rangeTitle={rangeTitle}
      selectTitle={selectTitle}
      selectOptions={selectOptions}
      resultTitle={resultTitle}
      minDeposit={minDeposit}
      currency={currency}
    />
  );
};

PredictionChartComponent.propTypes = {
  title: PropTypes.string,
  stockCode: PropTypes.string,
  stockLogo: PropTypes.string,
  stockText: PropTypes.string,
  buttonText: PropTypes.string,
  handleButtonClick: PropTypes.func,
};

export default PredictionChartComponent;
