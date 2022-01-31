import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';

const CheckboxGdpr = ({
  register,
  name,
  setValue,
  hide,
  gdprText,
  className,
}) => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Gdpr $checked={checked} className={className}>
        {parse(gdprText)}
      </Gdpr>
      <StyledInput
        {...register(name)}
        value={checked}
        type='checkbox'
        onChange={(event) => {
          const { checked } = event.target;

          setChecked(checked);
          setValue(name, checked);
        }}
        $hide={hide}
        checked={checked}
      />
    </>
  );
};

const StyledInput = styled.input`
  ${({ $hide }) =>
    $hide &&
    `
    opacity: 0;
    visibility: hidden;
    position: absolute;
    `}
`;

const Gdpr = styled.div`
  position: relative;
  min-height: 20px;
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  user-select: none;
  ${({ theme: { dirLtr } }) => dirLtr`
    padding-left: 30px;
  `} 
  ${({ theme: { dirRtl } }) => dirRtl`
    padding-right: 30px;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    border: 1px solid #313131;
    box-sizing: border-box;
    ${({ $checked }) => {
      if ($checked) {
        return `background: #313128 url("data:image/svg+xml,%3Csvg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.97803 9.80758C4.85396 9.93112 4.68468 10.0003 4.50885 10.0003C4.33302 10.0003 4.16374 9.93142 4.03966 9.80758L0.291799 6.09407C-0.0972662 5.70863 -0.0972662 5.08384 0.291799 4.69934L0.760983 4.23422C1.15005 3.84879 1.7801 3.84879 2.16885 4.23422L4.50854 6.55239L10.8312 0.289076C11.2202 -0.0963586 11.8509 -0.0963586 12.239 0.289076L12.7082 0.754192C13.0973 1.13963 13.0973 1.7641 12.7082 2.14892L4.97803 9.80758Z' fill='white'/%3E%3C/svg%3E%0A") center no-repeat;
        `;
      }
      if (!$checked) {
        return `border-color: red`;
      }
    }}
    ${({ theme: { dirLtr } }) => dirLtr`
      left: 0;
    `}
    ${({ theme: { dirRtl } }) => dirRtl`
      right: 0;
    `}
  }
`;

CheckboxGdpr.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CheckboxGdpr;
