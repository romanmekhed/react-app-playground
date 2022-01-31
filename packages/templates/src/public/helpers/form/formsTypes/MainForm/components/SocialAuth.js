import React from 'react';
import { SocialAuth } from '@nfs-react/components';
import { useTextGlobal } from 'hooks';
import { Phone, Submit } from './index';

// NOTE: IDs hardcoded for inf-etf domain
// TODO: should be taken from dashboard domain settings
const SocialAuthComponent = ({ modalCtaText }) => {
  return (
    <SocialAuth
      facebook={{
        ctaText: useTextGlobal('auth_fb_text'),
        id: 125945639420311,
      }}
      google={{
        ctaText: useTextGlobal('auth_google_text'),
        id:
          '985416550079-jqvoalsu6m88e955guotbp9mqerou6fk.apps.googleusercontent.com',
      }}
      modal={{
        title: useTextGlobal('auth_popup_title'),
        text: useTextGlobal('auth_popup_text'),
        ctaText: useTextGlobal('auth_popup_cta_text'),
        form: () => (
          <>
            <Phone hideLabels={true} />
            <Submit text={modalCtaText} />
          </>
        ),
      }}
    />
  );
};

export default SocialAuthComponent;
