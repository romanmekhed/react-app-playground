import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Brands from './Components/Brands';
import Graph from './Components/Graph';
import { ChartProvider } from './helpers/ChartContext';

const deafaultTheme = {
  primaryColor: '#FF9900',
};

const MultiChart = ({ brands, theme, placeholderImage }) => {
  const componentTheme = Object.assign(deafaultTheme, theme);

  return (
    <ChartProvider brandsList={brands}>
      <Wrapper $vars={componentTheme}>
        <Brands />
        <Graph placeholderImage={placeholderImage} />
      </Wrapper>
    </ChartProvider>
  );
};

const Wrapper = styled.div`
  ${({ $vars: { primaryColor } }) =>
    `
      --chart-primary-color: ${primaryColor};
    `}
  width: 100%;
  max-width: 771px;
  margin: 0 auto;
  font-family: inherit;
  border: 4px solid var(--chart-primary-color);
  background: #fff;
  box-shadow: 0 5px 32px rgb(0, 0, 0, 15%);
  border-radius: 10px;
  padding: 20px 38px;
`;

MultiChart.propTypes = {
  brands: PropTypes.array.isRequired,
  theme: PropTypes.shape({
    primaryColor: PropTypes.string,
  }),
  placeholderImage: PropTypes.string,
};

export default MultiChart;
