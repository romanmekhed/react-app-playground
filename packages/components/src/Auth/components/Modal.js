import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Modal = ({ title, text, isActive, Form, handleClose }) => {
  const triggerClose = useCallback(() => handleClose(false));

  return (
    isActive && (
      <Wrapper>
        <Content>
          <Title>
            {title}
            <Close onClick={triggerClose} />
          </Title>
          <Body>
            <Text>{text}</Text>
            <Form />
          </Body>
        </Content>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 20px;
  z-index: 99;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  display: flex;
`;

const Content = styled.div`
  background: #fff;
  width: 522px;
  max-width: 100%;
  box-shadow: -1px 5px 23px rgba(0, 0, 0, 0.25);
`;

const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 66px;
  padding: 5px 36px;
  background: #efefef;
  font-weight: 700;
  font-size: 22px;
  color: #313131;
`;

const Close = styled.div.attrs({
  role: 'button',
})`
  position: absolute;
  top: 9px;
  right: 9px;
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M11.7074 24C14.8426 24 17.7825 22.7532 19.9903 20.4906C22.1981 18.228 23.4147 15.2112 23.4147 11.9981C23.4147 8.78884 22.1944 5.77201 19.9791 3.50553C18.9052 2.405 17.6511 1.54305 16.2581 0.938913C14.8163 0.315536 13.2844 0 11.7074 0C10.1304 0 8.59842 0.315536 7.1566 0.942761C5.76358 1.5469 4.50949 2.40885 3.43564 3.50938C1.22033 5.77585 3.62396e-05 8.79269 3.62396e-05 12.0019C3.62396e-05 15.215 1.21658 18.2318 3.42437 20.4945C5.62841 22.7532 8.57214 24 11.7074 24ZM11.7074 1.10822C14.5422 1.10822 17.2081 2.23954 19.2169 4.29052C21.2257 6.34536 22.3333 9.08514 22.3333 11.9981C22.3333 14.9149 21.2294 17.6508 19.2281 19.7056C17.2268 21.7605 14.5535 22.8879 11.7074 22.8879C8.86125 22.8879 6.19162 21.7566 4.18659 19.7056C2.1853 17.6508 1.08141 14.9149 1.08141 11.9981C1.08141 9.08514 2.18906 6.34921 4.19785 4.29052C6.20664 2.23954 8.87252 1.10822 11.7074 1.10822Z' fill='%23696969'/%3E%3Cpath d='M7.1904 8.63488L14.9928 16.6272C15.3344 16.9774 15.8826 16.9774 16.2243 16.6272C16.566 16.277 16.566 15.7152 16.2243 15.365L8.42571 7.37273C8.08403 7.02257 7.53583 7.02257 7.19415 7.37273C6.85247 7.71905 6.85247 8.28471 7.1904 8.63488Z' fill='%23696969'/%3E%3Cpath d='M8.42195 16.6272L16.2243 8.63488C16.566 8.28471 16.566 7.7229 16.2243 7.37273C15.8826 7.02257 15.3344 7.02257 14.9928 7.37273L7.19415 15.365C6.85246 15.7152 6.85246 16.277 7.19415 16.6272C7.53207 16.9774 8.08402 16.9774 8.42195 16.6272Z' fill='%23696969'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='23.4146' height='24' fill='white' transform='matrix(-1 0 0 1 23.4147 0)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  cursor: pointer;
`;

const Body = styled.div`
  padding: 13px 18px 30px;
`;

const Text = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #313131;
  margin-bottom: 15px;
`;

export default Modal;
