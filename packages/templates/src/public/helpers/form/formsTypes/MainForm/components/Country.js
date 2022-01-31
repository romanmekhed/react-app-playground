import React, { useContext } from 'react';

import { FormField, FormLabel, FormSelect } from '../styles';
import { useTextGlobal } from 'hooks';
import { AllowedCountryContext } from 'helpers/providers/contexts';

const Country = ({ hideLabels }) => {
  const allowedCountry = useContext(AllowedCountryContext);

  const countrySelectOptions = allowedCountry.reduce(
    (acc, { name, country_code, id, iso }) => {
      return [...acc, { label: name, value: id, country_code, iso }];
    },
    [
      {
        label: useTextGlobal('form__countryPlaceholder'),
        value: '',
        country_code: '',
        iso: '',
      },
    ]
  );

  return (
    <FormField data-id='country' area='country'>
      {!hideLabels && (
        <FormLabel
          htmlFor='country'
          text={useTextGlobal('form__countryLabel')}
        />
      )}
      <FormSelect name='country' options={countrySelectOptions} />
    </FormField>
  );
};

export default Country;
