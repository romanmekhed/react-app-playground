import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DESKTOP, TO_DESKTOP } from 'helpers/styles/media';

const Button = ({
  children,
  clickHandler: clickHandler = () => null,
  buttonCss,
}) => {
  return (
    <ButtonWrapper buttonCss={buttonCss} onClick={clickHandler}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: 0;
  border: none;
  box-shadow: none;
  line-height: 1;
  cursor: pointer;
  background-color: #0096c7;
  transition: transform 0.3s ease;
  will-change: transform;
  -webkit-appearance: none;
  -moz-appearance: none;

  @media ${DESKTOP} {
    &:hover {
      transform: scale(1.08);
    }
  }

  @media ${TO_DESKTOP} {
    &:active {
      transform: scale(1.06);
    }
  }

  ${({ buttonCss }) => buttonCss};
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonCss: PropTypes.array,
};

export default Button;
