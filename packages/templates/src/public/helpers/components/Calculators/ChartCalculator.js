import React from 'react';
import PropTypes from 'prop-types';
import { useTextGlobal } from 'hooks';
import { ChartCalculator } from '@nfs-react/components';

const ChartCalculatorComponent = ({
  minDeposit = 250,
  currency = '$',
  isCurrencyBeforeAmount = false,
  title = 'INITIAL INVESTMENT',
  buttonText = 'CALCULATE',
  errorMessage = useTextGlobal('calculator_error'),
  primaryColor = '#ff9900',
  primaryBrand = 'Amazon',
  secondaryBrand = 'Bank',
}) => {
  return (
    <ChartCalculator
      minDeposit={minDeposit}
      currency={currency}
      isCurrencyBeforeAmount={isCurrencyBeforeAmount}
      title={title}
      buttonText={buttonText}
      errorMessage={errorMessage}
      primaryColor={primaryColor}
      primaryBrand={primaryBrand}
      secondaryBrand={secondaryBrand}
    />
  );
};

ChartCalculatorComponent.propTypes = {
  minDeposit: PropTypes.number,
  currency: PropTypes.string,
  isCurrencyBeforeAmount: PropTypes.bool,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  errorMessage: PropTypes.string,
  primaryColor: PropTypes.string,
};

export default ChartCalculatorComponent;
