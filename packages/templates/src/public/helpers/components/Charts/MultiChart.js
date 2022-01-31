import React, { useContext } from 'react';
import { MultiChart } from '@nfs-react/components';
import { UrlContext } from 'helpers/providers/contexts';
import PropTypes from 'prop-types';

const MultiChartComponent = ({ brands, theme }) => {
  const { globalAssetsUrl, version } = useContext(UrlContext);

  return (
    <MultiChart
      brands={brands}
      theme={theme}
      placeholderImage={`${globalAssetsUrl}/images/Chart/multichart_placeholder.jpg?v=${version}`}
    />
  );
};

MultiChartComponent.propTypes = {
  brands: PropTypes.array.isRequired,
  theme: PropTypes.shape({
    primaryColor: PropTypes.string,
  }),
};

export default MultiChartComponent;
