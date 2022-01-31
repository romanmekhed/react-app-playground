import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Delimiter from './components/Delimiter';
import Facebook from './components/Facebook';
import Google from './components/Google';
import Modal from './components/Modal';

const Auth = ({
  facebook: { ctaText: fbCtaText, id: fbId },
  google: { ctaText: googleCtaText, id: googleId },
  modal: {
    title: modalTitle,
    text: modalText,
    ctaText: modalCtaText,
    form: modalForm,
  },
}) => {
  const [activeModal, setActiveModal] = useState(false);
  const handleSuccessLogin = useCallback(() => setActiveModal(true));

  return (
    <Wrapper>
      <Modal
        title={modalTitle}
        text={modalText}
        ctaText={modalCtaText}
        Form={modalForm}
        isActive={activeModal}
        handleClose={setActiveModal}
      />
      <Delimiter />
      <Facebook text={fbCtaText} id={fbId} onSuccess={handleSuccessLogin} />
      <Google
        text={googleCtaText}
        id={googleId}
        onSuccess={handleSuccessLogin}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px 0;
`;

Auth.propTypes = {
  facebook: PropTypes.shape({
    ctaText: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  google: PropTypes.shape({
    ctaText: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default Auth;
