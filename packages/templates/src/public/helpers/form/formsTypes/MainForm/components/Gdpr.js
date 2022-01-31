import React, { useContext } from 'react';

import { FormField, GdprLabel, GdprField } from '../styles';
import { GdprContext } from 'helpers/providers/contexts';

const Gdpr = () => {
  const {
    consentData: { consent_form_text = '', consent_form_error_message = '' },
  } = useContext(GdprContext);

  return (
    <FormField data-id='gdpr' area='gdpr'>
      <GdprLabel>
        <GdprField
          name='gdpr'
          gdprText={consent_form_text}
          gdprError={consent_form_error_message}
        />
      </GdprLabel>
    </FormField>
  );
};

export default Gdpr;
