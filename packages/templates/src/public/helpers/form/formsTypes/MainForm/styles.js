import styled, { css } from 'styled-components';
import { FormBuilder } from '@nfs-react/components';

const gridTemplate = (id) => {
  if (id === 'useFullName') {
    return css`
      ${({ theme: { mediaDesktop } }) => mediaDesktop`
        display: grid;
        grid-template-columns: repeat(3, 1fr) 300px;
        grid-template-areas:
          "full_name user_email phone submit"
          ". . . gdpr";
        grid-template-rows: auto;
        column-gap: 14px;
        row-gap: 16px;
        align-items: center;
      `}
    `;
  } else {
    return css`
      ${({ theme: { mediaDesktop } }) => mediaDesktop`
        display: grid;
        grid-template-columns: repeat(3, 1fr) 275px 250px;
        grid-template-areas:
          "first_name last_name user_email phone submit"
          ". . . . gdpr";
        grid-template-rows: auto;
        column-gap: 14px;
        row-gap: 16px;
        align-items: center;
      `}
    `;
  }
};

export const FormStyle = styled(FormBuilder)`
  ${({ theme: { horizontal, useFullName } }) => {
    return horizontal
      ? useFullName
        ? gridTemplate('useFullName')
        : gridTemplate('default')
      : false;
  }}

  ${({ theme: { formCss } }) => formCss}
`;

export const FormField = styled.div`
  margin-bottom: 16px;

  ${({ theme: { horizontal }, area }) => {
    return (
      horizontal &&
      css`
        ${({ theme: { mediaDesktop } }) => mediaDesktop`
          margin-bottom: 0;
          align-self: ${area === 'submit' && 'end'};
          grid-area: ${area};
        `}
      `
    );
  }}

  ${({ theme: { fieldCss } }) => fieldCss};
`;

const inputStyles = css`
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

  ${({ theme: { inputCss } }) => inputCss}
`;

export const FormEmailInput = styled(FormBuilder.EmailInput)`
  ${inputStyles}
`;

export const FormInput = styled(FormBuilder.Input)`
  ${inputStyles}
`;

export const FormSelect = styled(FormBuilder.Select)`
  background: #fff;
  height: 32px;
  border: 1px solid #b4b3b3;
  max-width: 100%;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  padding: 6px;
  box-sizing: border-box;
  color: #000;
`;

export const FormLabel = styled(FormBuilder.Label)`
  display: block;
  text-align: left;
  color: #373737;
  font-size: 15px;
  line-height: 1.2;
  margin-bottom: 2px;
  font-weight: 400;
  :lang(ar) {
    text-align: right;
  }

  ${({ theme: { labelCss } }) => labelCss}
`;

export const SubmitButton = styled(FormBuilder.Button)`
  background: #22a6f0;
  width: 100%;
  height: 56px;
  font-size: 20px;
  ${({ theme: { buttonCss } }) => buttonCss}
`;

export const PhoneWrap = styled.div`
  position: relative;
  display: flex;
  direction: ltr;
`;

export const Prefix = styled(FormBuilder.Prefix)`
  flex: 0 0 105px;

  ${({ theme: { prefixCss } }) => prefixCss}
`;

export const PhoneField = styled(FormBuilder.Phone)`
  ${({ theme: { phoneCss } }) => phoneCss}
`;

export const GdprField = styled(FormBuilder.GDPR)`
  color: #000;

  & > a {
    color: #1792d7;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
  ${({ theme: { gdprCss } }) => gdprCss}
`;

export const GdprLabel = styled.label`
  display: block;
  cursor: pointer;
`;
