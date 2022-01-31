import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1037px;
  margin: 0 auto;
`;

export const Chart = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding: 51px 42px 39px;
  border: 2px solid #9e9e9e;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 9px 43px rgba(0, 0, 0, 0.15);
  font-family: inherit, sans-serif;

  ${({ theme }) => theme.mediaTablet`
    padding: 36px 26px 28px;
    border-radius: 14px;
  `};

  ${({ theme }) => theme.mediaMobile`
    padding: 47px 16px 62px;
  `};
`;

export const Title = styled.div`
  margin-bottom: 25px;
  padding-bottom: 21px;
  border-bottom: 3px solid #414141;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.24;
  text-align: center;
  letter-spacing: 0.02em;

  ${({ theme }) => theme.mediaTablet`
    margin-bottom: 16px;
    padding-bottom: 15px;
    font-size: 17px;
  `};

  ${({ theme }) => theme.mediaMobile`
    margin-bottom: 45px;
    padding-bottom: 19px;
    font-size: 22px;
  `};
`;

export const Inner = styled.div`
  margin-bottom: 20px;
  padding: 0 51px;

  ${({ theme }) => theme.mediaTablet`
    margin-bottom: 14px;
    padding: 0 38px;
  `};

  ${({ theme }) => theme.mediaMobile`
    margin-bottom: 34px;
    padding: 0;
  `};
`;

export const Name = styled.div`
  margin-bottom: 39px;
  font-size: 35px;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: 0.02em;

  ${({ theme }) => theme.mediaTablet`
    margin-bottom: 30px;
    font-size: 24px;
  `};

  ${({ theme }) => theme.mediaMobile`
    margin-bottom: 15px;
    font-size: 22px;
  `};

  img {
    display: inline-block;
    vertical-align: middle;

    ${({ theme }) => theme.mediaTablet`
      max-width: 40px;
    `};

    ${({ theme }) => theme.mediaMobile`
      max-width: 40px;
    `};
  }

  span {
    color: #53898d;
    font-size: 21px;
    font-weight: 500;
    vertical-align: middle;
    margin-left: 10px;

    ${({ theme }) => theme.mediaTablet`
      font-size: 14px;
    `};

    ${({ theme }) => theme.mediaMobile`
      font-size: 13px;
    `};
  }
`;

export const Main = styled.div`
  position: relative;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
`;

export const Price = styled.div`
  padding: 24px 0 0 31px;
  font-size: 45px;
  transition: opacity 0.3s;

  ${({ isLoading }) => (isLoading ? 'opacity: 0;' : 'opacity: 1;')};

  ${({ theme }) => theme.mediaTablet`
    font-size: 32px;
    padding: 14px 0 0 20px;
  `};

  ${({ theme }) => theme.mediaMobile`
    font-size: 30px;
    padding: 12px 0 0 16px;
  `};

  p {
    display: inline-block;
    color: #121212;
    font-weight: 500;
    line-height: 1.26;
    letter-spacing: 0.02em;

    sup {
      position: relative;
      top: 0.16em;
      font-size: 0.7em;
      line-height: 1;
    }
  }

  span {
    vertical-align: super;
    font-size: 0.4em;
    color: #16c25b;
  }

  ${({ status }) =>
    status === 'is-low'
      ? `
    span {
      color: red;
    }`
      : ''};
`;

export const Graph = styled.div`
  height: 250px;
`;

export const Dates = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 30px;
  border-top: 1px solid #9e9e9e;
  padding: 5px 20px;
  font-size: 17px;
  font-weight: 500;
  color: #53898d;
  transition: opacity 0.3s;
  ${({ isLoading }) => (isLoading ? 'opacity: 0;' : 'opacity: 1;')};
`;

export const Info = styled.div`
  display: flex;
  padding: 26px 27px 20px;
  border-top: 1px solid #9e9e9e;
  font-weight: 500;

  ${({ theme }) => theme.mediaTablet`
    padding: 18px 20px 13px;
  `};

  ${({ theme }) => theme.mediaMobile`
    padding: 16px 14px 13px;
  `};
`;

export const Item = styled.div`
  width: 39%;
  ${({ theme }) => theme.mediaMobile`
    width: 35%;
  `};
`;

export const ItemTitle = styled.div`
  margin-bottom: 12px;
  color: #53898d;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.21;

  ${({ theme }) => theme.mediaTablet`
    font-size: 10px;
    margin-bottom: 7px;
  `};

  ${({ theme }) => theme.mediaMobile`
    font-size: 10px;
    margin-bottom: 7px;
  `};
`;

export const ItemAmount = styled.div`
  font-size: 19px;
  line-height: 1.26;
  font-weight: 500;

  ${({ theme }) => theme.mediaTablet`
    font-size: 14px;
  `};

  ${({ theme }) => theme.mediaMobile`
    font-size: 14px;
  `};
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px 10px;
  background: #040404;
  border-radius: 7px;
  color: #fded6f;
  font-family: inherit, serif;
  outline: 0;
  border: 0;
  font-size: 50px;
  font-weight: bold;
  transition: transform 0.3s;
  letter-spacing: 0.01em;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  ${({ theme }) => theme.mediaTablet`
    font-size: 35px;
    padding: 10px;
  `};

  ${({ theme }) => theme.mediaMobile`
    font-size: 30px;
    padding: 9px 25px;
  `};
`;
