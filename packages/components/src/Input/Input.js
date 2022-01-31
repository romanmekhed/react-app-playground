import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({
  className,
  name,
  placeholder,
  type,
  register,
  errors,
  hide,
}) => {
  return (
    <>
      <StyledInput
        {...register(name)}
        className={className}
        type={type}
        placeholder={placeholder}
        hide={hide}
        style={errors[name]?.message && { borderColor: 'red' }}
      />
    </>
  );
};

const StyledInput = styled.input`
  ${({ hide }) =>
    hide &&
    `
      opacity: 0;
      visibility: hidden;
      position: absolute;
    `}
`;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.func,
  hide: PropTypes.bool,
  errors: PropTypes.object,
};

export default Input;
