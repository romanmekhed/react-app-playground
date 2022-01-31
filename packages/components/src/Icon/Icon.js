import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ICONS from '../helpers/icons';
import IconAnimations from './IconAnimations';

const Icon = ({
  isAnimated,
  width,
  height,
  icon,
  svgCss,
  onClick,
  viewBox,
}) => (
  <>
    {isAnimated && <IconAnimations />}

    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      xlmns='http://www.w3.org/2000/svg'
      $svgCss={svgCss}
      onClick={onClick}>
      {icon.map(({ name, color }) => (
        <path
          className={isAnimated && `animated animated__${name.toLowerCase()}`}
          key={name}
          fill={color}
          d={ICONS[name]}
        />
      ))}
    </Svg>
  </>
);

const Svg = styled.svg`
  ${({ $svgCss }) => $svgCss}
`;

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  isAnimated: PropTypes.bool,
  height: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Icon;
