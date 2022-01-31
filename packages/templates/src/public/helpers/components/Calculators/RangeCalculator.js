import React from 'react';
import PropTypes from 'prop-types';
import { RangeCalculator } from '@nfs-react/components';

const RangeCalculatorComponent = ({
  currency = '$',
  title = 'Discover your potential short-term profits (max. 2 months)',
  initialTitle = 'INITIAL INVESTMENT',
  profitTitle = 'POTENTIAL PROFITS',
  primaryColor = '#ff9900',
  marks = [],
}) => {
  const defaultMarks = [
    { label: `250${currency}`, value: 250 },
    { label: `2000${currency}`, value: 2000 },
    { label: `5000${currency}`, value: 5000 },
    { label: `10000${currency}`, value: 10000 },
    { label: `20000${currency}`, value: 20000 },
  ];

  return (
    <RangeCalculator
      currency={currency}
      title={title}
      initialTitle={initialTitle}
      profitTitle={profitTitle}
      primaryColor={primaryColor}
      marks={marks.length ? marks : defaultMarks}
    />
  );
};

RangeCalculatorComponent.propTypes = {
  currency: PropTypes.string,
  initialTitle: PropTypes.string,
  profitTitle: PropTypes.string,
  primaryColor: PropTypes.string,
  marks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
    })
  ),
};

export default RangeCalculatorComponent;
