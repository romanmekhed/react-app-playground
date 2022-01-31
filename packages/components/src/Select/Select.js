import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  name,
  options,
  className,
  register,
  errors,
  setValue,
  getValues,
}) => {
  return (
    <select
      {...register(name)}
      className={className}
      onChange={(event) => {
        const { value } = event.target;
        const iso = event.target[event.target.selectedIndex].getAttribute(
          'data-iso'
        );
        const country_code = event.target[
          event.target.selectedIndex
        ].getAttribute('data-country_code');

        setValue('country', value, {
          shouldValidate: true,
        });
        setValue(
          'country_prefix',
          country_code ? `+${country_code.toString()}` : '',
          {
            shouldValidate: true,
          }
        );
        setValue(
          'full_phone',
          `${country_code.toString()}${getValues('phone_num')}`
        );
        setValue('iso', iso);
      }}
      style={errors[name]?.message && { borderColor: 'red' }}>
      {options.map(({ value, label, iso, country_code }) => {
        return (
          <option
            key={value}
            data-iso={iso}
            data-country_code={country_code}
            value={value}
            label={label}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  setValue: PropTypes.func,
  getValues: PropTypes.func,
};

export default Select;
