import React from 'react';
import PropTypes from 'prop-types';
import { useTextGlobal } from 'hooks';
import { CarouselCalculator } from '@nfs-react/components';
import { getImgUrl } from 'helpers';

const CarouselCalculatorComponent = ({
  minDeposit = 500,
  currency = '$',
  isCurrencyBeforeAmount = false,
  buttonText = 'CALCULATE',
  errorMessage = useTextGlobal('calculator_error'),
  primaryColor = '#016A78',
  buttonBackground = '#000',
  profitBackground = '#1DA0D8',
  profitText = 'Estimated Profit',
  slides = [],
}) => {
  const defaultSlides = [
    {
      img: getImgUrl('CarouselWithCalculator/gold.jpg', true, true),
      text: 'Gold',
      factor: 294,
    },
    {
      img: getImgUrl('CarouselWithCalculator/aluminium.jpg', true, true),
      text: 'Aluminum',
      factor: 435.23,
    },
    {
      img: getImgUrl('CarouselWithCalculator/eisen.jpg', true, true),
      text: 'Iron',
      factor: 180,
    },
    {
      img: getImgUrl('CarouselWithCalculator/erdol.jpg', true, true),
      text: 'Petroleum',
      factor: 299.34,
    },
  ];

  return (
    <CarouselCalculator
      minDeposit={minDeposit}
      currency={currency}
      isCurrencyBeforeAmount={isCurrencyBeforeAmount}
      profitText={profitText}
      buttonText={buttonText}
      errorMessage={errorMessage}
      primaryColor={primaryColor}
      slides={slides.length ? slides : defaultSlides}
      buttonBackground={buttonBackground}
      profitBackground={profitBackground}
    />
  );
};

CarouselCalculatorComponent.propTypes = {
  minDeposit: PropTypes.number,
  currency: PropTypes.string,
  isCurrencyBeforeAmount: PropTypes.bool,
  profitText: PropTypes.string,
  buttonText: PropTypes.string,
  errorMessage: PropTypes.string,
  primaryColor: PropTypes.string,
  buttonBackground: PropTypes.string,
  profitBackground: PropTypes.string,
  slides: PropTypes.array,
};

export default CarouselCalculatorComponent;
