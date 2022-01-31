import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useHandleClickOutside } from '../helpers/hooks';
import PropTypes from 'prop-types';

const PrefixDropdown = ({
  handleVisibility,
  setValue,
  allowed_country,
  prefixName,
  getValues,
}) => {
  const [filterValue, setFilterValue] = useState('');
  const dropDownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // close dropdown when clicks outside element
  useHandleClickOutside(dropDownRef, () => handleVisibility(false));

  return (
    <CountryDropdown ref={dropDownRef}>
      <CountryDropdownFilter>
        <CountryDropdownInput
          ref={inputRef}
          onChange={(e) =>
            setFilterValue(e.target.value.toLowerCase().trim().replace('+', ''))
          }
        />
      </CountryDropdownFilter>
      <CountryDropdownList>
        {allowed_country
          .filter(({ name, country_code }) => {
            const matchName = name.toLowerCase().indexOf(filterValue) === 0;
            const matchPrefix =
              country_code.toLowerCase().indexOf(filterValue) === 0;

            return matchName || matchPrefix;
          })
          .map(({ id, iso, name, country_code }) => {
            return (
              <Country
                key={id}
                onClick={() => {
                  handleVisibility(false);
                  setValue('iso', iso);
                  setValue('country', id.toString(), {
                    shouldValidate: true,
                  });
                  setValue(prefixName, `+${country_code}`, {
                    shouldValidate: true,
                  });
                  setValue(
                    'full_phone',
                    `${country_code}${getValues('phone_num')}`
                  );
                }}>
                <CountryFlag data-countrycode={iso.toLowerCase()} />
                <CountryName>{name}</CountryName>
                <CountryPrefix>+{country_code}</CountryPrefix>
              </Country>
            );
          })}
      </CountryDropdownList>
    </CountryDropdown>
  );
};

// country dropdown
const CountryDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 220px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  z-index: 3;
  @media screen and (max-width: 600px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    width: auto;
    padding: 20px;
    background: rgba(0, 0, 0, 0.4);
    flex-direction: column;
    justify-content: center;
    overflow: auto;
    pointer-events: none;
  }
`;

const CountryDropdownFilter = styled.div`
  width: 100%;
  padding: 10px;
  background: #fff;
  @media screen and (max-width: 600px) {
    pointer-events: all;
  }
`;

const CountryDropdownInput = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 0 6px;
  height: 31px;
  font-size: 14px;
  outline: none;
  text-align: left;
  direction: ltr;
  line-height: 1;
`;

const CountryDropdownList = styled.ul`
  background: #fff;
  width: 100%;
  max-height: 150px;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  @media screen and (max-width: 600px) {
    max-height: none;
    pointer-events: all;
  }
`;

// country (list item)
const Country = styled.li`
  position: relative;
  width: 100%;
  color: #000;
  padding: 5px 10px 5px 40px;
  font-size: 14px;
  line-height: 1.2;
  min-height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  @media screen and (max-width: 600px) {
    padding: 6px 10px 6px 40px;
  }
`;

const CountryFlag = styled.div`
  position: absolute;
  width: 20px;
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

const CountryName = styled.span`
  margin-right: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const CountryPrefix = styled.span`
  color: #999;
  font-size: 0.9em;
`;

PrefixDropdown.propTypes = {
  handleVisibility: PropTypes.func,
  setValue: PropTypes.func,
  allowed_country: PropTypes.array,
  prefixName: PropTypes.string,
  getValues: PropTypes.func,
};

export default PrefixDropdown;
