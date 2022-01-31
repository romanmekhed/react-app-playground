import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';

import { Container } from '@nfs-react/components';

import { MOBILE } from '../helpers/media';

const CookiePopUp = ({ text = '' }) => {
  const [isVisible, setVisible] = useState(true);

  const closeModal = function (event) {
    if (event.target.closest('span')) {
      setVisible(false);
      event.preventDefault();
    }
  };

  return (
    isVisible && (
      <CookiePopUpWrapper>
        <CookiePopUpContainer>
          <CookiePopUpBlock>
            <ButtonClose onClick={() => setVisible(false)}>
              &#10005;
            </ButtonClose>

            <Inner onClick={closeModal}>{parse(text)}</Inner>
          </CookiePopUpBlock>
        </CookiePopUpContainer>
      </CookiePopUpWrapper>
    )
  );
};

const CookiePopUpWrapper = styled.div`
  position: fixed;
  bottom: 15px;
  left: 0;
  right: 0;
  z-index: 35;
  pointer-events: none;

  @media ${MOBILE} {
    bottom: 10px;
  }
`;

const CookiePopUpContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

const CookiePopUpBlock = styled.div`
  background: #ffffff;
  box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 10px 7px;
  position: relative;
  pointer-events: all;

  @media ${MOBILE} {
    padding: 5px;
  }
`;

const ButtonClose = styled.div`
  position: absolute;
  top: -20px;
  right: -1px;
  color: #676767;
  font-size: 15px;
  cursor: pointer;
`;

const Inner = styled.div`
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  color: #676767;

  p {
    margin: 0;
  }

  span {
    text-decoration: underline;
    cursor: pointer;

    &:not(:last-child) {
      color: #4075ff;
    }
  }
`;

CookiePopUp.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CookiePopUp;
