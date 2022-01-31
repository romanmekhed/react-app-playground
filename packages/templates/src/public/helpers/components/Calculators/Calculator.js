import React from 'react';
import PropTypes from 'prop-types';
import { useTextGlobal } from 'hooks';
import { Calculator } from '@nfs-react/components';

const CalculatorComponent = ({
  minDeposit = 250,
  currency = '$',
  isCurrencyBeforeAmount = false,
  investmentText = 'INITIAL INVESTMENT',
  profitText = 'POTENTIAL PROFITS',
  buttonText = 'CALCULATE',
  errorMessage = useTextGlobal('calculator_error'),
  primaryColor = '#ff9900',
  buttonColor = primaryColor,
  investmentTextColor = '#1f1f1f',
  profitTextColor = '#1f1f1f',
  buttonTextColor = '#000000',
  stickyContainer = false,
  investmentTitleStyles = '',
  profitTitleStyles = '',
  investmentBlockStyles = '',
  profitBlockStyles = '',
  buttonStyles = '',
  errorStyles = '',
  currencyStyles = '',
  inputStyles = '',
}) => {
  return (
    <Calculator
      minDeposit={minDeposit}
      currency={currency}
      isCurrencyBeforeAmount={isCurrencyBeforeAmount}
      investmentText={investmentText}
      profitText={profitText}
      buttonText={buttonText}
      errorMessage={errorMessage}
      primaryColor={primaryColor}
      buttonColor={buttonColor}
      investmentTextColor={investmentTextColor}
      profitTextColor={profitTextColor}
      buttonTextColor={buttonTextColor}
      stickyContainer={stickyContainer}
      investmentTitleStyles={investmentTitleStyles}
      profitTitleStyles={profitTitleStyles}
      investmentBlockStyles={investmentBlockStyles}
      profitBlockStyles={profitBlockStyles}
      buttonStyles={buttonStyles}
      errorStyles={errorStyles}
      currencyStyles={currencyStyles}
      inputStyles={inputStyles}
    />
  );
};

CalculatorComponent.propTypes = {
  minDeposit: PropTypes.number,
  currency: PropTypes.string,
  isCurrencyBeforeAmount: PropTypes.bool,
  investmentText: PropTypes.string,
  profitText: PropTypes.string,
  buttonText: PropTypes.string,
  errorMessage: PropTypes.string,
  primaryColor: PropTypes.string,
  buttonColor: PropTypes.string,
  investmentTextColor: PropTypes.string,
  profitTextColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  stickyContainer: PropTypes.bool,
};

export default CalculatorComponent;
