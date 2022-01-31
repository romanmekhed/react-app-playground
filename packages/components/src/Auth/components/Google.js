import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { loadScript } from '../../helpers';

import Button from './Button';
import { GoogleLogo } from '../helpers/icons';

// TODO: decompose login logic into hook
const Google = ({ text, id, onSuccess }) => {
  const { setValue: updateFormValue } = useFormContext();
  const buttonRef = useRef(null);

  useEffect(() => {
    loadScript(
      document,
      'script',
      'google-login',
      'https://apis.google.com/js/platform.js',
      () => {
        window.gapi.load('auth2', () => {
          const GoogleAuth = window.gapi.auth2.getAuthInstance();
          if (!GoogleAuth) {
            window.auth2 = window.gapi.auth2.init({
              client_id: id,
              cookiepolicy: 'single_host_origin',
              scope: 'profile email',
            });
          }

          attachSignin(buttonRef.current);
        });
      },
      () => null
    );
  }, []);

  const attachSignin = (element) => {
    window.auth2?.attachClickHandler(
      element,
      {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        let fullname = profile.getName();
        let email = profile.getEmail();

        updateFormWithSocData(fullname, email);
        onSuccess();
      },
      (error) => {
        console.error(`GOOGLE_LOGIN: ${JSON.stringify(error, undefined, 2)}`);
      }
    );
  };

  const updateFormWithSocData = (fullname, email) => {
    let [firstName, lastName] = fullname.split(' ');

    updateFormValue('full_name', fullname);
    updateFormValue('first_name', firstName);
    updateFormValue('last_name', lastName);
    updateFormValue('user_email', email);
  };

  return (
    <>
      <Wrapper ref={buttonRef}>
        <Logo>
          <GoogleLogo />
        </Logo>
        <Text>{text}</Text>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  ${Button}
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 0 0 / 40%);
  ${({ theme }) => theme.mediaTablet`
    font-size: 12px;
  `};
`;

const Logo = styled.div`
  flex: 0 0 45px;
  margin-right: 7px;
  font-size: 0;
  ${({ theme }) => theme.mediaTablet`
    flex-basis: 35px;
  `};
`;

const Text = styled.div`
  flex: 1 0 auto;
  text-align: center;
`;

export default Google;
