import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 690px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaTablet`
    max-width: 620px;
  `};
  ${({ theme }) => theme.mediaMobile`
    max-width: 360px;
  `};
`;

export const Chart = styled.div`
  position: relative;
  padding: 26px 48px 33px;
  border: 2px solid #9e9e9e;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.15);
  font-family: inherit, sans-serif;
  ${({ theme }) => theme.mediaTablet`
    padding: 19px 43px 33px;
    border-radius: 13px;
  `};

  ${({ theme }) => theme.mediaMobile`
    padding: 11px 8px 26px;
    border-radius: 8px;
  `};
`;

export const Title = styled.div`
  margin-bottom: 14px;
  padding: 0 5px 15px;
  border-bottom: 2px solid #414141;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.02em;
  font-size: 20px;
  line-height: 126.1%;
  ${({ theme }) => theme.mediaTablet`
    font-size: 20px;
    margin-bottom: 13px;
  `};

  ${({ theme }) => theme.mediaMobile`
    font-size: 18px;
    padding-bottom: 12px;
    margin-bottom: 8px;
  `};
`;

export const Inner = styled.div`
  margin-bottom: 30px;
  ${({ theme }) => theme.mediaTablet`
    margin-bottom: 24px;
  `};

  ${({ theme }) => theme.mediaMobile`
    margin-bottom: 18px;
  `};
`;

export const Name = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 5px;
  letter-spacing: 0.02em;
  font-size: 25px;
  line-height: 126.1%;
  ${({ theme }) => theme.mediaTablet`
    font-size: 22px;
  `};

  ${({ theme }) => theme.mediaMobile`
    font-size: 14px;
    margin-bottom: 3px;
  `};

  img {
    height: 37px;
    width: auto;
    margin-right: 7px;
    ${({ theme }) => theme.mediaTablet`
      height: 33px;
    `};

    ${({ theme }) => theme.mediaMobile`
      height: 21px;
      margin-right: 5px;
    `};
  }
`;

export const Main = styled.div`
  position: relative;
`;

export const Price = styled.div`
  font-size: 26px;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding: 0 5px;
  transition: opacity 0.3s;

  ${({ isLoading }) => (isLoading ? 'opacity: 0;' : 'opacity: 1;')};

  ${({ theme }) => theme.mediaTablet`
    font-size: 22px;
  `};
  ${({ theme }) => theme.mediaMobile`
    font-size: 14px;
  `};

  p {
    display: inline-block;
    color: #121212;
    font-weight: 500;
    line-height: 1.26;
    letter-spacing: 0.02em;
    sup {
      display: inline-block;
      vertical-align: baseline;
      top: 0;
      font-size: inherit;
    }
  }

  span {
    font-size: 15px;
    margin-left: 5px;
    color: #029b53;
    ${({ theme }) => theme.mediaTablet`
      font-size: 13px;
    `};

    ${({ theme }) => theme.mediaMobile`
      font-size: 9px;
    `};
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
  ${({ theme }) => theme.mediaTablet`
    height: 225px;
  `};

  ${({ theme }) => theme.mediaMobile`
    height: 200px;
  `};
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
  background-color: #fff;
  color: inherit;
  width: 100%;
  font-family: inherit;
  outline: 0;
  border: 0;
  transition: transform 0.3s;
  font-weight: 600;
  font-size: 19px;
  line-height: 126.1%;
  text-align: center;
  letter-spacing: 0.02em;
  padding: 0;
  background: #fff;
  color: #ff7a00;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }

  ${({ theme }) => theme.mediaTablet`
    padding: 17px 15px;
    background-color: inherit;
    color: #fff;
    outline: 3px solid #fff;
    border-radius: 6px;
    background: #ff7a00;
    color: #fff;
  `};

  ${({ theme }) => theme.mediaMobile`
    padding: 7px 10px;
    border-radius: 4px;
    background: #ff7a00;
    color: #fff;
  `};
`;
