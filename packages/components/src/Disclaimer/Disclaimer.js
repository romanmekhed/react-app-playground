import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import parse from 'html-react-parser';

import { Container } from '@nfs-react/components';

const Disclaimer = ({ text = '' }) => {
  return (
    <DisclaimerWrap>
      <Container>
        <DisclaimerText>{parse(text)}</DisclaimerText>
      </Container>
    </DisclaimerWrap>
  );
};

const DisclaimerWrap = styled.div`
  position: relative;
  font-family: inherit;
  border-top: 1px solid #d6d6d6;
  padding-top: 25px;
  padding-bottom: 25px;
  background: #fff;
`;

const DisclaimerText = styled.div`
  font-size: 10px;
  line-height: 1.2;
  color: #404040;
  font-weight: 300;
`;

Disclaimer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Disclaimer;
