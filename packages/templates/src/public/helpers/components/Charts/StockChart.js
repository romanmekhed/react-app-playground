import React from 'react';
import PropTypes from 'prop-types';
import { StockChart } from '@nfs-react/components';
import { getImgUrl } from 'helpers';

const StockChartComponent = ({
  title = 'Calculate your potential profit from Bitcoin',
  stockCode = 'BTC',
  stockLogo = '',
  stockText = 'Bitcoin price <span>(BTC / USD)</span>',
  buttonText = 'Join Bitcoin’s Success',
  handleButtonClick = () => null,
  mode = 'bitcoin',
  datesPeriod = 0,
}) => {
  return (
    <StockChart
      title={title}
      stockCode={stockCode}
      datesPeriod={datesPeriod}
      stockLogo={
        stockLogo.length ? stockLogo : getImgUrl('btc.png', true, true)
      }
      stockText={stockText}
      buttonText={buttonText}
      handleButtonClick={handleButtonClick}
      mode={mode}
    />
  );
};

StockChartComponent.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  stockCode: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  stockLogo: PropTypes.string,
  stockText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleButtonClick: PropTypes.func,
};

export default StockChartComponent;
