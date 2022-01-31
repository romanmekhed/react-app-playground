import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import FormBuilder from '../FormBuilder/FormBuilder';
import { validation } from '../helpers/validation';

const DefaultForm = ({
  onSubmit,
  horizontal = false,
  use_fullname = false,
  allowed_country,
  advanced_phone_validation,
  formTranslations,
  use_fake_email,
  buttonCss,
  formTranslations: {
    form__fullNameLabel,
    form__fullNamePlaceholder,
    form__firstNameLabel,
    form__firstNamePlaceholder,
    form__lastNameLabel,
    form__lastNamePlaceholder,
    form__emailLabel,
    form__emailPlaceholder,
    form__phoneLabel,
    form__buttonText,
  },
  initialValues,
}) => {
  return (
    <FormStyle
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={(values) =>
        validation(
          values,
          formTranslations,
          advanced_phone_validation,
          use_fake_email,
          use_fullname
        )
      }
      enableReinitialize
      $horizontal={horizontal}
      $use_fullname={use_fullname}>
      {use_fullname ? (
        <FormField area='full_name' $horizontal={horizontal}>
          <FormLabel htmlFor='full_name' text={form__fullNameLabel} />
          <FormInput
            type='text'
            name='full_name'
            placeholder={form__fullNamePlaceholder}
          />
        </FormField>
      ) : (
        <>
          <FormField area='first_name' $horizontal={horizontal}>
            <FormLabel htmlFor='first_name' text={form__firstNameLabel} />
            <FormInput
              type='text'
              name='first_name'
              placeholder={form__firstNamePlaceholder}
            />
          </FormField>

          <FormField area='last_name' $horizontal={horizontal}>
            <FormLabel htmlFor='last_name' text={form__lastNameLabel} />
            <FormInput
              type='text'
              name='last_name'
              placeholder={form__lastNamePlaceholder}
            />
          </FormField>
        </>
      )}

      <FormField area='phone' $horizontal={horizontal}>
        <FormLabel htmlFor='phone' text={form__phoneLabel} />
        <PhoneWrap>
          <Prefix
            prefixName='country_prefix'
            allowed_country={allowed_country}
          />
          <Phone phoneName='phone_num' />
        </PhoneWrap>
      </FormField>

      {!use_fake_email && (
        <FormField area='user_email' $horizontal={horizontal}>
          <FormLabel htmlFor='user_email' text={form__emailLabel} />
          <FormEmailInput
            type='text'
            name='user_email'
            placeholder={form__emailPlaceholder}
          />
        </FormField>
      )}

      <FormField area='submit' $horizontal={horizontal}>
        <SubmitButton type='submit' buttonCss={buttonCss}>
          <div data-editable data-name='form__buttonText'>
            {parse(form__buttonText)}
          </div>
        </SubmitButton>
      </FormField>
    </FormStyle>
  );
};

const gridTemplate = {
  with_fullname: css`
    grid-template-columns: repeat(3, 1fr) minmax(50px, 250px);
    grid-template-areas:
      'full_name phone user_email submit'
      '. . . gdpr';
  `,
  default: css`
    grid-template-columns: repeat(4, 1fr) minmax(50px, 250px);
    grid-template-areas:
      'first_name last_name phone user_email submit'
      '. . . . gdpr';
  `,
};

const FormStyle = styled(FormBuilder)`
  ${({ $horizontal, $use_fullname }) =>
    $horizontal
      ? css`
          @media only screen and (min-width: 1025px) {
            display: grid;
            ${$use_fullname ? gridTemplate.with_fullname : gridTemplate.default}
            grid-template-rows: auto;
            column-gap: 14px;
            row-gap: 16px;
            align-items: center;
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

  ${({ $horizontal, area }) =>
    $horizontal &&
    css`
      align-self: ${area === 'submit' && 'end'};
      @media only screen and (min-width: 1025px) {
        grid-area: ${area};
        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
    `}
`;

const inputStyles = css`
  height: 40px;
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
  height: 40px;
  font-size: 24px;
  text-transform: inherit;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  ${({ buttonCss }) => (buttonCss ? buttonCss : null)}
`;

const PhoneWrap = styled.div`
  position: relative;
  display: flex;
`;

const Prefix = styled(FormBuilder.Prefix)`
  flex: 0 0 41%;

  input {
    height: 40px;
  }
`;

const Phone = styled(FormBuilder.Phone)`
  input {
    height: 40px;
  }
`;

DefaultForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  country: PropTypes.string,
  advanced_phone_validation: PropTypes.bool,
  use_fullname: PropTypes.bool,
  horizontal: PropTypes.bool,
  formTranslations: PropTypes.shape({
    form__fullNameLabel: PropTypes.string.isRequired,
    form__fullNamePlaceholder: PropTypes.string.isRequired,
    form__fullNameError: PropTypes.string.isRequired,
    form__fullNameError2: PropTypes.string.isRequired,
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

export default DefaultForm;
