import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Phone = ({
  name,
  className,
  placeholder,
  register,
  errors,
  setValue,
  getValues,
}) => {
  const [pasted, setPasted] = useState(false);
  const countryPrefix = getValues('country_prefix');

  return (
    <PhoneInputWrapper className={className}>
      <Input
        {...register(name)}
        pattern='^[0-9]*$'
        onPaste={() => setPasted(true)}
        onChange={async (event) => {
          const {
            value,
            validity: { valid },
          } = event.target;

          if (pasted) {
            await setValue(name, value, { shouldValidate: true });
            // set full_phone
            await setValue('full_phone', `${countryPrefix}${value}`);
          } else {
            valid
              ? await setValue(name, value, { shouldValidate: true })
              : await setValue(name, value.replace(/\D/g, ''), {
                  shouldValidate: true,
                });
            // set full_phone
            valid && (await setValue('full_phone', `${countryPrefix}${value}`));
          }
          valid && setPasted(false);
        }}
        style={errors[name]?.message && { borderColor: 'red' }}
        placeholder={placeholder}
      />
    </PhoneInputWrapper>
  );
};

const PhoneInputWrapper = styled.div`
  flex: 1 1 100%;
`;

// // phone
const Input = styled.input`
  height: 32px;
  border: 1px solid #b4b3b3;
  max-width: 100%;
  border-radius: 5px;
  width: 100%;
  font-size: 13px;
  padding: 6px;
  box-sizing: border-box;
  color: #000;
  :lang(ar) {
    text-align: right;
  }
`;

Phone.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  setValue: PropTypes.func,
  getValues: PropTypes.func,
};

export default Phone;
