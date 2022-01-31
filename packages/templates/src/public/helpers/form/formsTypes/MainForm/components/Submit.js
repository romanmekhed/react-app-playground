import React from 'react';

import { FormField, SubmitButton } from '../styles';
import { useText } from 'hooks';

const Submit = ({ text }) => {
  return (
    <FormField data-id='submit' area='submit'>
      <SubmitButton type='submit'>
        {text || useText('form__buttonText', true)}
      </SubmitButton>
    </FormField>
  );
};

export default Submit;
