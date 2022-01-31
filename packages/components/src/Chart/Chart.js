import React, { useState } from 'react';
import styled from 'styled-components';

import Calc from './Calc';
import Graph from './Graph';
import PropTypes from 'prop-types';

const Chart = ({ title, buttonText, errorText, currency }) => {
  const [amount, setAmount] = useState(1750);

  return (
    <Wrapper>
      <Calc
        title={title}
        errorText={errorText}
        currency={currency}
        buttonText={buttonText}
        handleUpdateAmount={setAmount}
      />
      <Graph value={amount} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 4px solid #d61f2c;
  max-width: 1156px;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin: 0 auto;
`;

Chart.prototype = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Chart;
