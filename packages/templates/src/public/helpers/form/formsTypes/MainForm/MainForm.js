import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, ThemeProvider } from 'styled-components';

import { useNoRedirectPopup, useLoader } from '@nfs-react/components';

import validationSchema from '../../validation';
import { useTextGlobal } from 'hooks';
import { onSubmit } from '../../onSubmit';
import {
  PopupDataContext,
  GdprContext,
  FeaturesContext,
} from 'helpers/providers/contexts';

import { getFormTranslations, getInitialGeoValuesById } from '../../helpers';
import { FormStyle } from './styles';
import { Input, Country, Phone, Gdpr, Submit, SocialAuth } from './components';

const MainForm = ({
  horizontal = false,
  useFullName = false,
  useCountry = false,
  hideLabels = false,
  useFakeEmail = false,
  emailAfterCountry = false,
  formCss,
  fieldCss,
  inputCss,
  labelCss,
  prefixCss,
  phoneCss,
  buttonCss,
  gdprCss,
  useSocialAuth = false,
  buttonText = false,
}) => {
  const [geo, setGeo] = useState(null);

  const features = useContext(FeaturesContext);
  const popupData = useContext(PopupDataContext);
  const theme = useContext(ThemeContext);
  const { enabled: useGdpr } = useContext(GdprContext);

  useEffect(() => {
    // necessary to prevent repeated requests when re-rendering
    setGeo({
      id: 223,
      name: 'Ukraine',
      iso: 'UA',
      iso3: 'UKR',
      country_code: '380',
      currency_id: 149,
      countryCode: '380',
    });

    return () => 1;
  }, []);

  const { togglePopup, NoRedirectPopup } = useNoRedirectPopup();
  const { toggleLoader, Loader } = useLoader();
  const {
    togglePopup: toggleErrorPopup,
    NoRedirectPopup: ErrorPopup,
  } = useNoRedirectPopup();

  const advancedPhoneValidation = features.includes(
    'advanced_phone_validation'
  );

  const defaultValues = {
    first_name: '',
    last_name: '',
    country: getInitialGeoValuesById('id', geo),
    country_prefix: `${getInitialGeoValuesById('country_code', geo)}`,
    iso: getInitialGeoValuesById('iso', geo),
    phone_num: '',
    user_email: '',
    // uaction need for the detection of a two-step funnel
    uaction: 'create_lead',
  };

  if (useFullName) {
    defaultValues.full_name = '';
    delete defaultValues.first_name;
    delete defaultValues.last_name;
  }

  if (useFakeEmail) {
    defaultValues.use_fake_email = true;
    delete defaultValues.user_email;
  }

  const {
    form__emailError3,
    form__emailError2,
    form__phoneError2,
    form__phoneError6,
    form__countryBlockedError,
    form__nameError,
    form__passwordError,
  } = getFormTranslations();

  return (
    <ThemeProvider
      theme={{
        ...theme,
        formCss,
        fieldCss,
        inputCss,
        labelCss,
        prefixCss,
        phoneCss,
        buttonCss,
        gdprCss,
        horizontal,
        useFullName,
      }}>
      <Loader />
      <NoRedirectPopup
        title={popupData?.title || ''}
        description={popupData?.message || ''}
        buttonText={popupData?.button || 'Back to page'}
        popupData={popupData}
      />
      <ErrorPopup
        description={useTextGlobal('popup__technicalError')}
        buttonText={useTextGlobal('popup__button')}
        popupData={popupData}
        isTypeError
      />
      <FormStyle
        onSubmit={(values, { setError }) =>
          onSubmit(
            values,
            togglePopup,
            toggleErrorPopup,
            features,
            setError,
            form__emailError3,
            form__emailError2,
            form__phoneError2,
            form__phoneError6,
            form__countryBlockedError,
            form__nameError,
            form__passwordError,
            toggleLoader
          )
        }
        defaultValues={defaultValues}
        validationSchema={validationSchema({
          advancedPhoneValidation,
          useFakeEmail,
          useFullName,
          useGdpr,
          useCountry,
        })}>
        {useFullName ? (
          <Input id='full_name' hideLabels={hideLabels} />
        ) : (
          <>
            <Input id='first_name' hideLabels={hideLabels} />
            <Input id='last_name' hideLabels={hideLabels} />
          </>
        )}
        {useCountry && <Country hideLabels={hideLabels} />}
        {!useFakeEmail && !emailAfterCountry && (
          <Input id='user_email' hideLabels={hideLabels} />
        )}
        <Phone hideLabels={hideLabels} />
        {!useFakeEmail && emailAfterCountry && (
          <Input id='user_email' hideLabels={hideLabels} />
        )}
        <Submit text={buttonText} />

        {useSocialAuth && <SocialAuth modalCtaText={buttonText} />}

        {useGdpr && <Gdpr />}
      </FormStyle>
    </ThemeProvider>
  );
};

MainForm.propTypes = {
  horizontal: PropTypes.bool,
  useFullName: PropTypes.bool,
  useCountry: PropTypes.bool,
  hideLabels: PropTypes.bool,
  emailAfterCountry: PropTypes.bool,
  formCss: PropTypes.array,
  fieldCss: PropTypes.array,
  inputCss: PropTypes.array,
  labelCss: PropTypes.array,
  prefixCss: PropTypes.array,
  phoneCss: PropTypes.array,
  gdprCss: PropTypes.array,
  useSocialAuth: PropTypes.bool,
  buttonCss: PropTypes.array,
};

export default MainForm;
