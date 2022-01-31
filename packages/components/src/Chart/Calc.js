import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { getCoefficientByAmount } from '../helpers/index';
import PropTypes from 'prop-types';
import RangeSlider from '../RangeSlider/RangeSlider';

const Calc = ({
  title,
  errorText,
  buttonText,
  currency,
  handleUpdateAmount,
}) => {
  const [value, setValue] = useState(500);
  const [error, showError] = useState(false);

  const handleValueCallback = useCallback((e) => {
    let { value } = e.target;
    const onlyNumbers = /^\d+(\.\d{0,2})?$/;

    if (!onlyNumbers.test(value)) value = value.slice(0, value.length - 1);
    if (value.length > 12) value = value.slice(0, 12);

    setValue(value);
  }, []);

  const calculateAmount = () => {
    if (value < 250) {
      showError(true);
    } else {
      const coefficient = getCoefficientByAmount(+value);
      const newAmount = Math.ceil(value * coefficient);

      handleUpdateAmount(newAmount);
      showError(false);
    }
  };
  const handleEnterKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') calculateAmount();
    },
    [value]
  );

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Field>
        <Currency>{currency}</Currency>
        <Input
          type='text'
          value={value}
          onChange={handleValueCallback}
          onKeyPress={handleEnterKeyPress}
        />
        <Button onClick={calculateAmount}>{buttonText}</Button>
        {error && <ValidationError>{errorText}</ValidationError>}
      </Field>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 17px 16px 25px;
  background: #f1f1f1;
  font-size: 15px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

const Title = styled.div`
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: inherit;
`;

const Field = styled.div`
  position: relative;
  width: 380px;
  max-width: 100%;
  margin: 0 auto;
`;

const Currency = styled.div`
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #d6d6d6;
  font-size: inherit;
  @media screen and (max-width: 767px) {
    width: 53px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 40px;
  border: 0;
  padding-left: 45px;
  outline: none !important;
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.11);
  font-size: inherit;
  @media screen and (max-width: 767px) {
    height: 51px;
    padding-left: 65px;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border: 0;
  color: #fff;
  background: #d61f2c;
  border-radius: 40px;
  text-transform: uppercase;
  padding: 0 13px;
  cursor: pointer;
  outline: none !important;
`;

const ValidationError = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  font-size: 12px;
  color: red;
  padding: 2px 10px 0;
`;

Calc.prototype = {
  title: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  handleUpdateAmount: PropTypes.func,
};

export default Calc;
