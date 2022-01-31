import React, { useContext } from 'react';

import { AllowedCountryContext } from 'helpers/providers/contexts';
import { useTextGlobal } from 'hooks';

export const getInitialGeoValuesById = (id, geo) => {
  const allowedCountry = useContext(AllowedCountryContext);
  const isExistCountry = allowedCountry?.find(
    (obj) => obj.id === (geo && geo.id)
  );

  return (isExistCountry && geo && geo[id] && geo[id].toString()) || '';
};

export const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const fullNameReg = /^([^,|&;$%#!*?"~\\\/<>()^№:@._=[\]{}\+0-9]*\s)[^,|&;$%#!*?"~\\\/<>()^№:@._=[\]{}\+0-9]+$/;
export const nameReg = /[,|&;$%#!*?"~\\\/<>()^№:@._=[\]{}\+0-9]|\s{2,}/;
export const phoneReg = /^[0-9]*$/;

export const getFormTranslations = () => ({
  form__emailError3: useTextGlobal('form__emailError3'),
  form__emailError2: useTextGlobal('form__emailError2'),
  form__phoneError5: useTextGlobal('form__phoneError5'),
  form__nameError: useTextGlobal('form__nameError'),
  form__passwordError: useTextGlobal('form__passwordError'),
  form__fullNameError: useTextGlobal('form__fullNameError'),
  form__fullNameError2: useTextGlobal('form__fullNameError2'),
  form__firstNameError: useTextGlobal('form__firstNameError'),
  form__lastNameError: useTextGlobal('form__lastNameError'),
  form__countryError: useTextGlobal('form__countryError'),
  form__phoneError: useTextGlobal('form__phoneError'),
  form__phoneError2: useTextGlobal('form__phoneError2'),
  form__phoneError4: useTextGlobal('form__phoneError4'),
  form__phoneError3: useTextGlobal('form__phoneError3'),
  form__phoneError6: useTextGlobal('form__phoneError6'),
  form__countryBlockedError: useTextGlobal('form__countryBlockedError'),
  form__emailError: useTextGlobal('form__emailError'),
  form__gdprError: useTextGlobal('form__gdprError'),
});
