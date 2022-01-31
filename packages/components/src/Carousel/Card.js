import React from 'react';
import styled from 'styled-components';

//TODO: make global media inside components

const Card = ({
  topImg,
  title,
  num,
  bottomText,
  size,
  text,
  cardInfo,
  buttonText,
  primaryColor,
  handleClick,
  forwardedRef,
  number,
  buttonStyles,
  profitStyles,
  bodyStyles,
  headStyles,
  contentStyles,
  infoStyles,
  titleStyles,
  footerStyles,
  cardWrapperStyles,
}) => {
  return (
    <Wrapper ref={forwardedRef} cardWrapperStyles={cardWrapperStyles}>
      <Content size={size} contentStyles={contentStyles}>
        <Head headStyles={headStyles}>{topImg}</Head>
        <Body bodyStyles={bodyStyles}>
          {cardInfo && (
            <Info
              infoStyles={infoStyles}
              color={primaryColor}
              data-editable
              data-name={'card_info'}>
              {cardInfo}
            </Info>
          )}
          <Title titleStyles={titleStyles}>{title}</Title>
          {text && (
            <Text
              infoStyles={infoStyles}
              color={primaryColor}
              data-editable
              data-name={`card-num-${number}`}>
              {text}
            </Text>
          )}
          <NumberWrapper>
            <Profit
              profitStyles={profitStyles}
              data-editable
              data-name={`card${number}_num`}>
              {num}
            </Profit>
            <Button
              type='button'
              background={primaryColor}
              onClick={handleClick}
              size={size}
              data-editable
              data-name='card__buttonText'
              buttonStyles={buttonStyles}>
              {buttonText}
            </Button>
          </NumberWrapper>
        </Body>
        {bottomText && (
          <Footer
            footerStyles={footerStyles}
            data-editable
            data-name={`card${number}__bottomText`}>
            {bottomText}
          </Footer>
        )}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 10px;

  @media screen and (max-width: 550px) {
    width: 284px;
    padding: 0 5px;
  }

  ${({ cardWrapperStyles }) => cardWrapperStyles};
`;

const Content = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  min-height: ${(props) => (props.size === 'small' ? '375px' : '424px')};
  padding-bottom: 15px;

  ${({ contentStyles }) => contentStyles};
`;

const Head = styled.div`
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  font-size: 0;

  img {
    width: 100%;
    min-height: 176px;
  }

  ${({ headStyles }) => headStyles};
`;

const Title = styled.div`
  margin: 12px 0;

  ${({ titleStyles }) => titleStyles};

  img {
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
    margin: 0 auto;
  }
`;

const Info = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: rgb(9, 193, 72);
`;

const Text = styled.div`
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  margin-bottom: 7px;
  min-height: 40px;

  @media screen and (min-width: 1200px) and (max-width: 768px) {
    line-height: 18px;
    margin-bottom: 2px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 22px;
    min-height: 46px;
  }

  span {
    font-size: 11px;
    line-height: 13px;
  }

  ${({ infoStyles }) => infoStyles};
`;

const Body = styled.div`
  position: relative;
  padding: 12px 20px 0;
  text-align: center;
  min-height: 195px;
  transition: transform 0.3s;

  ${({ bodyStyles }) => bodyStyles};
`;

const NumberWrapper = styled.div`
  position: relative;
  &:last-child {
    padding-bottom: 10px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 61px;
  height: ${(props) => (props.size ? '44px' : '61px')};
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px 15px;
  border: 0;
  outline: 0;
  background: ${(props) => (props.background ? props.background : '#09c148')};
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  cursor: pointer;

  ${({ buttonStyles }) => buttonStyles};
`;

const Profit = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 34px;
  line-height: 1.26;
  color: #000;

  ${({ profitStyles }) => profitStyles};
`;

const Footer = styled.div`
  margin-top: 7px;
  padding: 0 15px;
  text-align: center;
  color: #606060;
  font-size: 14px;
  line-height: 1.28;
  min-height: 36px;

  ${({ footerStyles }) => footerStyles};
`;

export default Card;
