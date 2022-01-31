import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import FormBuilder from '../FormBuilder/FormBuilder';
import { validation } from '../helpers/validation';

const PrefixCountryForm = ({
  onSubmit,
  advanced_phone_validation,
  use_fake_email,
  allowed_country,
  horizontal = false,
  formTranslations,
  formTranslations: {
    form__firstNameLabel,
    form__firstNamePlaceholder,
    form__lastNameLabel,
    form__lastNamePlaceholder,
    form__emailLabel,
    form__emailPlaceholder,
    form__countryLabel,
    form__phoneLabel,
    form__buttonText,
    form__selectCountry,
    form__prefixPlaceholder,
  },
  initialValues,
}) => {
  const countrySelectOptions = allowed_country.reduce(
    (acc, { name, country_code, id, iso }) => {
      return [...acc, { label: name, value: id, country_code, iso }];
    },
    [{ label: form__selectCountry, value: '', country_code: '', iso: '' }]
  );

  return (
    <FormStyle
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={(values) =>
        validation(
          values,
          formTranslations,
          advanced_phone_validation,
          use_fake_email
        )
      }
      enableReinitialize>
      <FormField area='first_name' horizontal={horizontal}>
        <FormLabel htmlFor='first_name' text={form__firstNameLabel} />
        <FormInput
          type='text'
          name='first_name'
          placeholder={form__firstNamePlaceholder}
        />
      </FormField>

      <FormField area='last_name' horizontal={horizontal}>
        <FormLabel htmlFor='last_name' text={form__lastNameLabel} />
        <FormInput
          type='text'
          name='last_name'
          placeholder={form__lastNamePlaceholder}
        />
      </FormField>

      {!use_fake_email && (
        <FormField area='user_email' horizontal={horizontal}>
          <FormLabel htmlFor='user_email' text={form__emailLabel} />
          <FormEmailInput
            type='text'
            name='user_email'
            placeholder={form__emailPlaceholder}
          />
        </FormField>
      )}

      <FormField area='country' horizontal={horizontal}>
        <FormLabel htmlFor='country' text={form__countryLabel} />
        <FormSelect name='country' options={countrySelectOptions} />
      </FormField>

      <FormField area='phone' horizontal={horizontal}>
        <FormLabel htmlFor='phone' text={form__phoneLabel} />
        <PhoneWrap>
          <Prefix
            prefixName='country_prefix'
            allowed_country={allowed_country}
            prefixPlaceholder={form__prefixPlaceholder}
          />
          <FormBuilder.Phone phoneName='phone_num' />
        </PhoneWrap>
      </FormField>

      <FormField area='submit' horizontal={horizontal}>
        <SubmitButton type='submit'>
          <div data-editable data-name='form__buttonText'>
            {parse(form__buttonText)}
          </div>
        </SubmitButton>
      </FormField>
    </FormStyle>
  );
};

const FormStyle = styled(FormBuilder)`
  ${({ horizontal, emailField }) =>
    horizontal
      ? css`
          @media only screen and (min-width: 1025px) {
            display: grid;
            grid-template-columns: repeat(4, 1fr) minmax(50px, 207px);
            grid-template-rows: auto;
            grid-template-areas:
              'first_name last_name ${
                emailField ? 'email' : null
              } country phone submit'
              ' . . . . gdpr';
            column-gap: 14px;
            row-gap: 16px;
          }
        `
      : css`
          display: flex;
          flex-direction: column;
        `};
  background: #fff;
  padding: 15px 15px 0 15px;
`;

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  ${({ horizontal, area }) =>
    horizontal &&
    css`
      @media only screen and (min-width: 1025px) {
        grid-area: ${area};
      }
    `}
`;

const inputStyles = css`
  height: 31px;
  border: 1px solid #b8b7b7;
  max-width: 100%;
  border-radius: 3px;
  width: 100%;
  font-size: 14px;
  padding: 6px;
  box-sizing: border-box;
  color: #000;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FormEmailInput = styled(FormBuilder.EmailInput)`
  ${inputStyles}
`;

const FormInput = styled(FormBuilder.Input)`
  ${inputStyles}
`;

const FormSelect = styled(FormBuilder.Select)`
  background: #fff;
  height: 31px;
  border: 1px solid #b8b7b7;
  max-width: 100%;
  border-radius: 3px;
  width: 100%;
  font-size: 14px;
  padding: 6px;
  box-sizing: border-box;
  color: #000;
  font-family: Montserrat, sans-serif;
`;

const FormLabel = styled(FormBuilder.Label)`
  text-align: left;
  color: #373737;
  font-size: 15px;
  line-height: 1.2;
  margin-bottom: 2px;
  font-weight: 400;
`;

const SubmitButton = styled(FormBuilder.Button)`
  width: 100%;
  font-size: 24px;
  text-transform: inherit;
  font-family: Roboto, sans-serif;
  font-weight: 500;
`;

const PhoneWrap = styled.div`
  position: relative;
  display: flex;
`;

const Prefix = styled(FormBuilder.Prefix)`
  flex: 0 0 37%;
`;

PrefixCountryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  country: PropTypes.string,
  advanced_phone_validation: PropTypes.bool,
  formTranslations: PropTypes.shape({
    form__firstNameLabel: PropTypes.string.isRequired,
    form__firstNamePlaceholder: PropTypes.string.isRequired,
    form__firstNameError: PropTypes.string.isRequired,
    form__lastNameLabel: PropTypes.string.isRequired,
    form__lastNamePlaceholder: PropTypes.string.isRequired,
    form__lastNameError: PropTypes.string.isRequired,
    form__nameError: PropTypes.string.isRequired,
    form__emailLabel: PropTypes.string.isRequired,
    form__emailPlaceholder: PropTypes.string.isRequired,
    form__emailError: PropTypes.string.isRequired,
    form__emailError2: PropTypes.string.isRequired,
    form__countryLabel: PropTypes.string.isRequired,
    form__countryError: PropTypes.string.isRequired,
    form__phoneLabel: PropTypes.string.isRequired,
    form__phoneError: PropTypes.string.isRequired,
    form__phoneError2: PropTypes.string.isRequired,
    form__phoneError3: PropTypes.string.isRequired,
    form__phoneError4: PropTypes.string.isRequired,
    form__phoneError5: PropTypes.string.isRequired,
    form__buttonText: PropTypes.string.isRequired,
  }),
};

export default PrefixCountryForm;
