import { fullNameReg, getFormTranslations, nameReg, phoneReg } from './helpers';
import { parsePhoneNumber } from 'libphonenumber-js/min';
import * as yup from 'yup';

const validationSchema = ({
  advancedPhoneValidation,
  useFakeEmail,
  useFullName,
  useGdpr,
  useCountry,
}) => {
  const {
    form__fullNameError,
    form__fullNameError2,
    form__firstNameError,
    form__lastNameError,
    form__nameError,
    form__countryError,
    form__phoneError,
    form__phoneError2,
    form__phoneError4,
    form__phoneError3,
    form__phoneError5,
    form__emailError,
    form__emailError2,
    form__gdprError,
  } = getFormTranslations();

  const nameMinMaxSchema = yup
    .string()
    .min(2, form__nameError)
    .max(50, form__nameError);

  const firstNameValidation = !useFullName && {
    first_name: yup
      .string()
      .required(form__firstNameError)
      .concat(nameMinMaxSchema)
      .test('first_name', form__nameError, (value) => !nameReg.test(value)),
  };
  const lastNameValidation = !useFullName && {
    last_name: yup
      .string()
      .required(form__lastNameError)
      .concat(nameMinMaxSchema)
      .test('last_name', form__nameError, (value) => !nameReg.test(value)),
  };

  const fullNameValidation = useFullName && {
    full_name: yup
      .string()
      .required(form__fullNameError)
      .max(50, form__fullNameError2)
      .test('full_name', form__fullNameError2, (value) =>
        fullNameReg.test(value)
      ),
  };

  const emailValidation = !useFakeEmail && {
    user_email: yup
      .string()
      .required(form__emailError)
      .max(64, form__emailError2)
      .email(form__emailError2),
  };

  const gdprValidation = useGdpr && {
    gdpr: yup.bool().oneOf([true], form__gdprError),
  };

  const countryValidation = useCountry && {
    country: yup.string().required(form__countryError),
  };

  return yup.object().shape({
    ...fullNameValidation,
    ...firstNameValidation,
    ...lastNameValidation,
    ...emailValidation,
    ...gdprValidation,
    ...countryValidation,
    phone_num: yup
      .string()
      .required(form__phoneError)
      .matches(phoneReg, form__phoneError5)
      .min(6, form__phoneError4)
      .max(18, form__phoneError3)
      .when('iso', (iso, schema) =>
        schema.test(
          'iso',
          form__phoneError2,
          (phone_num) =>
            !(
              advancedPhoneValidation &&
              phone_num.length >= 6 &&
              phone_num.length <= 17 &&
              !parsePhoneNumber(phone_num, iso).isValid()
            )
        )
      ),
    country_prefix: yup.string().required(form__countryError),
  });
};

export default validationSchema;
