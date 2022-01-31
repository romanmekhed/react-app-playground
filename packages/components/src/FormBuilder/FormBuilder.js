import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import parse from 'html-react-parser';

import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';
import Prefix from '../Phone/Prefix';
import Phone from '../Phone/Phone';
import EmailInput from '../EmailInput/EmailInput';
import Select from '../Select/Select';
import CheckboxGdpr from '../CheckboxGdpr/CheckboxGdpr';
import Auth from '../Auth/Auth';

const FormBuilder = ({
  onSubmit,
  horizontal,
  defaultValues,
  children,
  className,
  validationSchema,
}) => {
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
    shouldUnregister: false,
  });
  const watchAll = methods.watch();

  useEffect(() => {
    let newObj = { ...defaultValues };
    for (const [key, value] of Object.entries(sessionStorage)) {
      if (value) {
        newObj[key] = value;
      }
    }
    methods.reset(newObj);
  }, [defaultValues]);

  useEffect(() => {
    for (const [key, value] of Object.entries(watchAll)) {
      if (value) {
        sessionStorage.setItem(key, value);
      }
    }
  }, [watchAll]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((values) => onSubmit(values, methods))}
        className={className}
        noValidate>
        {children}
      </form>
    </FormProvider>
  );
};

export const ConnectForm = ({ children }) => {
  const methods = useFormContext();

  return children({ ...methods });
};

const FormInput = ({ className, name, placeholder, type }) => (
  <ConnectForm>
    {({ register, formState: { errors } }) => {
      return (
        <Wrap>
          <Input
            className={className}
            name={name}
            placeholder={placeholder}
            type={type}
            register={register}
            errors={errors}
          />
          {errors[name] && <FormError>{errors[name]?.message}</FormError>}
        </Wrap>
      );
    }}
  </ConnectForm>
);

const FormEmailInput = ({ className, name, placeholder }) => (
  <ConnectForm>
    {({ register, formState: { touchedFields, isSubmitted, errors } }) => {
      return (
        <Wrap>
          <EmailInput
            className={className}
            name={name}
            placeholder={placeholder}
            register={register}
            errors={errors}
            touchedFields={touchedFields}
            isSubmitted={isSubmitted}
          />
          {(isSubmitted || touchedFields[name]) && errors[name] && (
            <FormError>{errors[name]?.message}</FormError>
          )}
        </Wrap>
      );
    }}
  </ConnectForm>
);

const FormButton = (props) => (
  <ConnectForm>
    {({ formState: { isSubmitting } }) => (
      <Button isSubmitting={isSubmitting} {...props} />
    )}
  </ConnectForm>
);

const FormSelect = ({ name, options, className }) => (
  <ConnectForm>
    {({ register, formState: { errors }, setValue, getValues }) => {
      return (
        <WrapNativeDropdown>
          <NativeDropdown
            name={name}
            options={options}
            className={className}
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
          />
          {errors[name] && <FormError>{errors[name]?.message}</FormError>}
        </WrapNativeDropdown>
      );
    }}
  </ConnectForm>
);

const FormPrefix = ({
  name,
  discardPrefixDropdown,
  allowed_country,
  className,
  prefixPlaceholder,
}) => (
  <ConnectForm>
    {({ register, formState: { errors }, setValue, getValues, watch }) => {
      return (
        <>
          <Prefix
            name={name}
            discardPrefixDropdown={discardPrefixDropdown}
            allowed_country={allowed_country}
            className={className}
            prefixPlaceholder={prefixPlaceholder}
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
            watch={watch}
          />
          {errors[name] && !errors['phone_num'] && (
            <FormError>{errors[name]?.message}</FormError>
          )}
        </>
      );
    }}
  </ConnectForm>
);

const FormPhone = ({ name, className, placeholder }) => {
  return (
    <ConnectForm>
      {({ register, formState: { errors }, setValue, getValues }) => {
        return (
          <>
            <Phone
              name={name}
              className={className}
              placeholder={placeholder}
              register={register}
              errors={errors}
              setValue={setValue}
              getValues={getValues}
            />
            {errors[name] && <FormError>{errors[name]?.message}</FormError>}
          </>
        );
      }}
    </ConnectForm>
  );
};

const FormLabel = ({ text, children, ...props }) => {
  return <label {...props}>{text || children}</label>;
};

const FormGdpr = ({ name, className, gdprText, gdprError }) => (
  <ConnectForm>
    {({ register, formState: { errors }, setValue }) => {
      return (
        <Wrap>
          <CheckboxGdpr
            register={register}
            name={name}
            errors={errors}
            setValue={setValue}
            className={className}
            gdprText={gdprText}
            hide
          />
          {errors[name] && <FormError>{parse(gdprError)}</FormError>}
        </Wrap>
      );
    }}
  </ConnectForm>
);

FormBuilder.Input = FormInput;
FormBuilder.Button = FormButton;
FormBuilder.Select = FormSelect;
FormBuilder.Phone = FormPhone;
FormBuilder.Prefix = FormPrefix;
FormBuilder.Label = FormLabel;
FormBuilder.EmailInput = FormEmailInput;
FormBuilder.GDPR = FormGdpr;

const Wrap = styled.div`
  position: relative;
`;

const WrapNativeDropdown = styled(Wrap)`
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -2px;
    width: 0;
    height: 0;
    border-top: 5px solid #000;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    ${({ theme: { dirLtr } }) => dirLtr`
      right: 6px;
    `}
    ${({ theme: { dirRtl } }) => dirRtl`
      left: 6px;
    `}
  }
`;

const NativeDropdown = styled(Select)`
  appearance: none;
`;

const FormError = styled.div`
  position: absolute;
  bottom: -15px;
  left: 0;
  color: red;
  font-size: 11px;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  ${({ theme: { dirRtl } }) => dirRtl`
    direction: rtl;
  `}
`;

FormBuilder.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.object.isRequired,
  defaultValues: PropTypes.object,
  children: PropTypes.array,
  className: PropTypes.string,
};

export default FormBuilder;
