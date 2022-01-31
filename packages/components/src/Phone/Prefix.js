import React, { useState } from 'react';
import styled from 'styled-components';
import PrefixDropdown from './PrefixDropdown';
import PropTypes from 'prop-types';
import PrefixStyles from './PrefixStyles';

const Prefix = ({
  name,
  discardPrefixDropdown,
  allowed_country,
  className,
  prefixPlaceholder,
  register,
  errors,
  setValue,
  getValues,
  watch,
}) => {
  const [dropdownVisibility, setVisibility] = useState(false);
  const watchIso = watch('iso');

  return (
    <PrefixInputWrapper
      className={className}
      discardPrefixDropdown={discardPrefixDropdown}>
      <Flag data-countrycode={watchIso.toLowerCase()} />
      <PrefixInput
        {...register(name)}
        type='text'
        readOnly
        placeholder={prefixPlaceholder}
        disabled={discardPrefixDropdown}
        onClick={() => setVisibility(!dropdownVisibility)}
        error={errors[name]}
      />
      {!discardPrefixDropdown && dropdownVisibility && (
        <PrefixDropdown
          handleVisibility={setVisibility}
          setValue={setValue}
          allowed_country={allowed_country}
          prefixName={name}
          getValues={getValues}
        />
      )}
    </PrefixInputWrapper>
  );
};

// prefix
const PrefixInputWrapper = styled(PrefixStyles)`
  position: relative;
  margin-right: 7px;
  ${(props) => (props.discardPrefixDropdown ? 'pointer-events: none;' : null)}
  :after {
    ${(props) => (props.discardPrefixDropdown ? null : 'content: "";')};
    position: absolute;
    right: 6px;
    top: 50%;
    margin-top: -2px;
    width: 0;
    height: 0;
    border-top: 5px solid #000;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
`;
const PrefixInput = styled.input`
  height: 32px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#b8b7b7')};
  max-width: 100%;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  padding: 6px 17px 6px 30px;
  box-sizing: border-box;
  color: #000;
  text-align: right;
  &:disabled {
    background: transparent;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
`;
const Flag = styled.div`
  position: absolute;
  width: 20px;
  height: 15px;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  ${({ theme: { imgUrl } }) =>
    `background-image: ${imgUrl('flags-sprite.png', true)};`}
  background-repeat: no-repeat;
  background-color: #dbdbdb;
  background-position: 20px 0;
  cursor: pointer;
  pointer-events: none;
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2 / 1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-size: 5630px 15px;
    ${({ theme: { imgUrl } }) =>
      `background-image: ${imgUrl('flags-sprite@2x.png', true)};`}
  }
`;

const Placeholder = styled.div`
  color: #aaadb3;
`;

Prefix.propTypes = {
  name: PropTypes.string.isRequired,
  allowed_country: PropTypes.array,
  className: PropTypes.string,
  prefixPlaceholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  setValue: PropTypes.func,
  getValues: PropTypes.func,
  watch: PropTypes.func,
  discardPrefixDropdown: PropTypes.bool,
};

export default Prefix;
