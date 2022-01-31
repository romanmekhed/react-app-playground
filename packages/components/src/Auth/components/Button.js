import { css } from 'styled-components';

const Button = css`
  position: relative;
  height: 49px;
  font-size: 18px;
  font-weight: 600;
  color: #2c2c2c;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  :not(:last-child) {
    margin-bottom: 14px;
  }
  ${({ theme }) => theme.mediaTablet`
    padding: 5px 10px;
  `};
`;

export default Button;
