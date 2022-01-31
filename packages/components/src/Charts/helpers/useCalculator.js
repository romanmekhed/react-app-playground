// TODO: make global useCalculator hook

import React, { useCallback, useState } from 'react';
import { getCoefficientByAmount } from '../../helpers/index';

const useCalculator = ({ minDeposit, baseValue = '' }) => {
  const [hasError, showError] = useState(false);
  const [value, handleValue] = useState(baseValue);
  const [amount, handleAmount] = useState('');

  const updateValue = useCallback((e) => {
    let value = typeof e === 'object' && e !== null ? e.target.value : e;

    const onlyNumbers = /^\d+(\.\d{0,2})?$/;

    if (!onlyNumbers.test(value)) value = value.slice(0, value.length - 1);
    if (value.length > 12) value = value.slice(0, 12);

    handleValue(value);
  }, []);

  const validateMinDeposit = () => {
    const isError = Number(value) < minDeposit;
    showError(isError);
    return isError;
  };

  const calculateAmount = useCallback(() => {
    if (Number(value) < minDeposit) {
      showError(true);

      return handleAmount('');
    }

    const result =
      Number(value) * getCoefficientByAmount(Number(value), minDeposit);

    handleAmount(parseFloat(result.toFixed(2)));

    showError(false);
  }, [value]);

  const handleEnterKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') calculateAmount();
    },
    [value]
  );

  const validateOnInput = useCallback(({ target }) => {
    const { value } = target;
    const onlyNumbers = /^\d+(\.\d{0,2})?$/;
    if (!onlyNumbers.test(value))
      target.value = value.slice(0, value.length - 1);
    if (value.length > 12) target.value = value.slice(0, 12);
  }, []);

  return {
    value,
    updateValue,
    hasError,
    handleEnterKeyPress,
    validateOnInput,
    calculateAmount,
    amount,
    validateMinDeposit,
  };
};

export default useCalculator;
