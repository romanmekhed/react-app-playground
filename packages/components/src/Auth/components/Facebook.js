import React, { useEffect, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import Button from './Button';
import { FacebookLogo } from '../helpers/icons';

// TODO: decompose login logic into hook
const Facebook = ({ text, id, onSuccess }) => {
  const { setValue: updateFormValue } = useFormContext();

  useEffect(() => {
    window.fbAsyncInit = () =>
      FB.init({
        appId: id,
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: 'v9.0', // Use this Graph API version for this call.
      });
  }, []);

  const loginUpdate = (name, email) => {
    updateFormWithSocData(name, email);
    onSuccess();
  };

  const handleClick = useCallback(() => {
    FB.login(
      ({ authResponse }) =>
        authResponse
          ? FB.api(
              '/me?fields=name,email',
              { fields: 'name, email' },
              ({ name, email }) => loginUpdate(name, email)
            )
          : console.error(
              'FB_LOGIN: User cancelled login or did not fully authorize.'
            ),
      { scope: 'email, public_profile' }
    );
  });

  const updateFormWithSocData = (fullname, email) => {
    let [firstName, lastName] = fullname.split(' ');

    updateFormValue('full_name', fullname);
    updateFormValue('first_name', firstName);
    updateFormValue('last_name', lastName);
    updateFormValue('user_email', email);
  };

  return (
    <>
      <Helmet>
        <script
          crossorigin='anonymous'
          src={`https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v9.0&appId=${id}&autoLogAppEvents=1`}
          nonce='OLoLEvTj'
        />
      </Helmet>
      <Wrapper onClick={handleClick}>
        <Logo>
          <FacebookLogo />
        </Logo>
        <Text>{text}</Text>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  ${Button};
  background: #3b5998;
  color: #fff;
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

export default Facebook;
