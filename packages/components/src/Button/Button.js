import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ isSubmitting, ...props }) => {
  return <Btn {...props} disabled={isSubmitting} />;
};

const Btn = styled.button`
  cursor: pointer;
  outline: 0;
  color: #fff;
  border: none;
  border-radius: 5px;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

Button.propTypes = {
  isSubmitting: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
