import { emailReg, fullNameReg, nameReg, phoneReg } from './index';
import { parsePhoneNumber } from 'libphonenumber-js/min';

export const validation = (
  values,
  {
    form__fullNameError,
    form__fullNameError2,
    form__firstNameError,
    form__lastNameError,
    form__nameError,
    form__emailError,
    form__emailError2,
    form__countryError,
    form__phoneError,
    form__phoneError2,
    form__phoneError3,
    form__phoneError4,
    form__phoneError5,
  },
  advanced_phone_validation,
  use_fake_email,
  use_fullname
) => {
  const errors = {};

  if (use_fullname) {
    if (!values.full_name) {
      errors.full_name = form__fullNameError;
    } else {
      !fullNameReg.test(values.full_name) &&
        (errors.full_name = form__fullNameError2);
    }
  } else {
    if (!values.first_name) {
      errors.first_name = form__firstNameError;
    }
    if (!values.last_name) {
      errors.last_name = form__lastNameError;
    }

    if (values.first_name || values.last_name) {
      values.first_name &&
        (nameReg.test(values.first_name) || values.first_name.length <= 2) &&
        (errors.first_name = form__nameError);
      values.last_name &&
        (nameReg.test(values.last_name) || values.last_name.length <= 2) &&
        (errors.last_name = form__nameError);
    }
  }

  if (!values.country) {
    errors.country = form__countryError;
  }
  if (!values.country_prefix) {
    errors.country_prefix = form__countryError;
  } else {
    if (!values.phone_num) {
      errors.phone_num = form__phoneError;
    }
    if (advanced_phone_validation && values.phone_num && values.iso) {
      if (
        values.phone_num.length >= 6 &&
        values.phone_num.length <= 17 &&
        !parsePhoneNumber(values.phone_num, values.iso).isValid()
      ) {
        errors.phone_num = form__phoneError2;
      }
    }
    if (values.phone_num.length <= 6) {
      errors.phone_num = form__phoneError4;
    }
    if (values.phone_num.length > 17) {
      errors.phone_num = form__phoneError3;
    }
    if (!phoneReg.test(values.phone_num)) {
      errors.phone_num = form__phoneError5;
    }
  }

  if (!use_fake_email) {
    if (!values.user_email) {
      errors.user_email = form__emailError;
    } else if (!emailReg.test(values.user_email)) {
      errors.user_email = form__emailError2;
    }
  }

  return errors;
};

export default validation;
