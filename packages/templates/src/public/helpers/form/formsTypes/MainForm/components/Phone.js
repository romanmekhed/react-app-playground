import React, { useContext } from 'react';

import { FormField, FormLabel, PhoneWrap, Prefix, PhoneField } from '../styles';
import { useTextGlobal } from 'hooks';
import { AllowedCountryContext } from 'helpers/providers/contexts';

const Phone = ({ hideLabels }) => {
  const allowedCountry = useContext(AllowedCountryContext);

  return (
    <FormField data-id='phone' area='phone'>
      {!hideLabels && (
        <FormLabel
          htmlFor='country_prefix'
          text={useTextGlobal('form__phoneLabel')}
        />
      )}
      <PhoneWrap>
        <Prefix
          name='country_prefix'
          allowed_country={allowedCountry}
          prefixPlaceholder={useTextGlobal('form__prefixPlaceholder')}
        />
        <PhoneField
          name='phone_num'
          placeholder={useTextGlobal(
            hideLabels ? 'form__phoneLabel' : 'form__phonePlaceholder'
          )}
        />
      </PhoneWrap>
    </FormField>
  );
};

export default Phone;
