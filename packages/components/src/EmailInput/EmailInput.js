import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const EmailInput = ({
  className,
  name,
  placeholder,
  register,
  errors,
  touchedFields,
  isSubmitted,
}) => {
  const DOMAINS = ['gmail.com', 'outlook.com', 'yahoo.com', 'iCloud.com'];

  const [isShowEmailSuggest, handleShowEmailSuggest] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [customDomains, setCustomDomains] = useState(DOMAINS);

  const formMethods = useFormContext();
  const validationEvents = register(name);

  const filterDomains = (value) => {
    const charSequence = Array.from(value).reduce(
      (a, v, i) => `${a}[^${value.substr(i)}]*?${v}`,
      ''
    );
    const regexValue = RegExp(charSequence);

    const filteredCustomDomains = DOMAINS.filter((v) => v.match(regexValue));
    filteredCustomDomains.length === 0 && handleShowEmailSuggest(false);
    setCustomDomains(filteredCustomDomains);
  };


  const handleEmailChange = (e) => {
    validationEvents.onChange(e);
    const { value } = e.target;
    setEmailValue(value);

    value.includes('@') && filterDomains(value.split('@')[1]);

    if (value.includes('@') && !value.split('@')[1]) {
      handleShowEmailSuggest(true);
    } else if (!value.includes('@')) {
      handleShowEmailSuggest(false);
    }
  };

  const handleSuggestClick = (e) => {
    formMethods.setValue('user_email', e.target.innerText, {
      shouldValidate: true,
    });
    handleShowEmailSuggest(false);
  };

  const handleBlur = (e) => {
    validationEvents.onBlur(e);
    handleShowEmailSuggest(false);
  };

  const handleFocus = (e) => {
    const { value } = e.target;
    value.includes('@') && filterDomains(value.split('@')[1]);
    setEmailValue(value);
    handleShowEmailSuggest(true);
  };

  return (
    <>
      <input
        {...validationEvents}
        onChange={handleEmailChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={className}
        placeholder={placeholder}
        autoComplete='off'
        tabIndex='0'
        style={
          (isSubmitted || touchedFields[name]) &&
          errors[name]?.message && { borderColor: 'red' }
        }
      />

      {isShowEmailSuggest && !!customDomains.length && (
        <SuggestWrapper>
          {customDomains.map((item, key) => (
            <SuggestItem
              tabIndex={key + 1}
              onMouseDown={handleSuggestClick}
              key={key}>
              {emailValue.split('@')[0]}@{item}
            </SuggestItem>
          ))}
        </SuggestWrapper>
      )}
    </>
  );
};

const SuggestWrapper = styled.div`
  background: #3a3a3a;
  color: #e7e7e7;
  padding: 10px 0;
  border-radius: 5px;
  box-shadow: 4px 4px 13px rgb(0 0 0 / 20%);
  position: absolute;
  z-index: 999;
  width: 100%;
`;

const SuggestItem = styled.div`
  font-size: 13px;
  padding: 4px 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

EmailInput.propTypes = {
  errors: PropTypes.object,
  name: PropTypes.string.isRequired,
  touchedFields: PropTypes.object,
  setValue: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  isSubmitted: PropTypes.bool,
};

export default EmailInput;
