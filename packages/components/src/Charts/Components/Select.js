import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { MOBILE } from '../../helpers/media';

const Select = ({ options, title, updatePredictionPeriod = () => null }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeOption, setActiveOption] = useState(0);

  const updateSelect = useCallback(({ id, value }) => {
    setActiveOption(id);
    updatePredictionPeriod(value);
    setShowDropdown(false);
  }, []);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <SelectBlock>
        <SelectTrigger onClick={() => setShowDropdown(!showDropdown)}>
          <span>{options[activeOption].title}</span>
          <Arrow isOpen={showDropdown} />
        </SelectTrigger>
        <OptionsWrapper isVisible={showDropdown}>
          {options.map(({ value, title }, i) => (
            <Option
              key={i}
              onClick={() => updateSelect({ id: i, value })}
              isActive={i === activeOption}>
              {title}
            </Option>
          ))}
        </OptionsWrapper>
      </SelectBlock>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 220px;
  @media ${MOBILE} {
    width: 100%;
    margin-top: 20px;
  }
`;

const Title = styled.div`
  color: #616161;
  font-size: 15px;
`;

const SelectBlock = styled.div`
  position: relative;
  user-select: none;
  width: 100%;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

const SelectTrigger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  font-size: 16px;
  font-weight: 300;
  color: #3b3b3b;
  height: 48px;
  line-height: 48px;
  background: #ffffff;
  cursor: pointer;
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-radius: 30px;
  border-color: #c9c9c9;
  box-shadow: 3px 3px 11px rgba(0, 0, 0, 0.15);

  @media ${MOBILE} {
    font-size: 15px;
  }
`;

const OptionsWrapper = styled.div`
  position: absolute;
  display: block;
  top: calc(100% + 34px);
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
  padding: 10px 0 10px 0;
  ${({ isVisible }) =>
    isVisible
      ? css`
          opacity: 1;
          visibility: visible;
          pointer-events: initial;
        `
      : ''};
  &::before {
    content: '';
    position: absolute;
    width: 0;
    overflow: inherit;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid white;
    top: -22px;
    right: 20px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.55));
    clip-path: inset(-5px 3px 0px 3px);
    z-index: 1;
  }
`;

const Option = styled.span`
  position: relative;
  display: block;
  padding: 0 22px;
  font-size: 16px;
  font-weight: 300;
  ${({ isActive }) => (isActive ? 'color: #000;' : 'color: #c9c9c9;')};
  line-height: 38px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #f5f5f5;
  }
  @media ${MOBILE} {
    font-size: 15px;
    line-height: 49px;
  }
`;

const Arrow = styled.div`
  position: relative;
  height: 15px;
  width: 15px;

  ::before,
  ::after {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
  }
  ::before {
    left: 5px;

    background-color: #c9c9c9;
    ${({ isOpen }) =>
      isOpen ? 'transform: rotate(-45deg);' : 'transform: rotate(45deg);'};
  }
  ::after {
    left: -5px;
    transform: rotate(-45deg);
    background-color: #c9c9c9;
    ${({ isOpen }) =>
      isOpen ? 'transform: rotate(45deg);' : 'transform: rotate(-45deg);'};
  }
`;

export default Select;
