import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BrandCalculatorSlider } from '@nfs-react/components';
import { LangContext } from 'helpers/providers/contexts';

const BrandCalculatorSliderComponent = ({
  currency = '$',
  brands = [],
  profitTitle = 'Estimated Profit',
  isCurrencyBeforeAmount = false,
  handleClickButton = () => null,
  primaryColor = '#f90',
  secondaryColor = '#f90',
  btnStartColor = '#f90',
  btnEndColor = '#fc0',
  trackStartColor = '#86B817',
  trackEndColor = '#B4EC37',
}) => {
  const { funnel_language: lang } = useContext(LangContext);

  return (
    <BrandCalculatorSlider
      currency={currency}
      brands={brands}
      profitTitle={profitTitle}
      isCurrencyBeforeAmount={isCurrencyBeforeAmount}
      handleClickButton={handleClickButton}
      lang={lang}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      btnStartColor={btnStartColor}
      btnEndColor={btnEndColor}
      trackStartColor={trackStartColor}
      trackEndColor={trackEndColor}
    />
  );
};

BrandCalculatorSliderComponent.propTypes = {
  currency: PropTypes.string,
  brands: PropTypes.array,
  profitTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isCurrencyBeforeAmount: PropTypes.bool,
  handleClickButton: PropTypes.func,
  lang: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  btnStartColor: PropTypes.string,
  btnEndColor: PropTypes.string,
  trackStartColor: PropTypes.string,
  trackEndColor: PropTypes.string,
};

export default BrandCalculatorSliderComponent;
