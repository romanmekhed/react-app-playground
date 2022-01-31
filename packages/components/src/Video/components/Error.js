import React from 'react';
import styled from 'styled-components';

const Error = ({ message }) => {
  return <Wrapper>{message}</Wrapper>;
};

const Wrapper = styled.div`
  font-size: 22px;
  font-family: system-ui;
  color: red;
`;

export default Error;
