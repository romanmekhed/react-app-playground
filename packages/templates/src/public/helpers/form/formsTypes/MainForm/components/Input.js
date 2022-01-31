import React from 'react';

import { FormField, FormInput, FormLabel, FormEmailInput } from '../styles';
import { useTextGlobal } from 'hooks';

const Input = ({ id, hideLabels }) => {
  const Input = id === 'user_email' ? FormEmailInput : FormInput;

  return (
    <FormField data-id={id} area={id}>
      {!hideLabels && (
        <FormLabel htmlFor={id} text={useTextGlobal(`form__${id}Label`)} />
      )}
      <Input
        type='text'
        name={id}
        placeholder={useTextGlobal(
          hideLabels ? `form__${id}Label` : `form__${id}Placeholder`
        )}
      />
    </FormField>
  );
};

export default Input;
