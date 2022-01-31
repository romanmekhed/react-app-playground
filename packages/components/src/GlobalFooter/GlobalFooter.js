import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

import { TO_DESKTOP, DESKTOP } from 'helpers/styles/media';

import { Container } from '../../lib';

const GlobalFooter = ({
  data: {
    logo,
    disclaimer,
    links,
    language,
    background_url,
    background_color,
    footer_links_color,
    footer_text_color,
  },
}) => {
  return (
    <FooterContainer
      background_url={background_url}
      background_color={background_color}
      language={language}>
      <Container>
        {logo && logo?.length !== 0 && (
          <Logo>
            <a target='_blank' {...(logo.link ? { href: logo.link } : {})}>
              <img src={logo?.image} loading='lazy' alt='Logo' />
            </a>
          </Logo>
        )}
        {links && links?.length !== 0 && (
          <Links>
            {Object.entries(links).map(([key, value], index) => (
              <LinkWrap key={index}>
                <Link
                  footer_links_color={footer_links_color}
                  target='_blank'
                  href={value}>
                  {key}
                </Link>
              </LinkWrap>
            ))}
          </Links>
        )}
        <Text
          footer_links_color={footer_links_color}
          footer_text_color={footer_text_color}>
          {parse(disclaimer)}
        </Text>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  direction: ${({ language }) => language === 'ar' && 'rtl'};
  background: #e5e5e5;
  padding: 35px 0 55px;
  position: relative;
  ${({ background_url }) =>
    background_url &&
    `background-image: url("${background_url}");
     background-size: cover;
     background-position: 50% 50%;`};
  background-color: ${({ background_color }) => background_color};
`;

const Logo = styled.div`
  margin-bottom: 35px;

  @media ${TO_DESKTOP} {
    display: flex;
    justify-content: center;
  }

  img {
    display: block;
    height: 60px;
    width: 60px;
  }
`;

const Links = styled.div`
  @media ${DESKTOP} {
    display: flex;
    flex-wrap: wrap;
    gap: 0 80px;
  }

  @media ${TO_DESKTOP} {
    margin-bottom: 5px;
  }
`;

const LinkWrap = styled.div`
  @media ${DESKTOP} {
    margin-bottom: 25px;
  }

  @media ${TO_DESKTOP} {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
`;

const Link = styled.a`
  font-size: 13px;
  line-height: 16px;
  text-decoration: none;
  color: ${({ footer_links_color, theme }) =>
    footer_links_color ? footer_links_color : theme.BLACK};
  font-weight: 700;
`;

const Text = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: ${({ footer_text_color, theme }) =>
    footer_text_color ? footer_text_color : theme.BLACK};

  @media ${TO_DESKTOP} {
    text-align: center;
  }

  p {
    line-height: 18px;
    margin-bottom: 0;
  }
  p + p {
    margin-top: 15px;
  }
  a {
    color: ${({ footer_links_color }) =>
      footer_links_color ? footer_links_color : '#430df4'};
  }
`;

GlobalFooter.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.object,
    disclaimer: PropTypes.string.isRequired,
    links: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    language: PropTypes.string.isRequired,
    background_url: PropTypes.string,
    background_image: PropTypes.string,
    footer_links_color: PropTypes.string,
    footer_text_color: PropTypes.string,
  }),
};

export default GlobalFooter;
