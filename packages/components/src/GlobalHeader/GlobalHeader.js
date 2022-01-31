import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../../lib';

const GlobalHeader = ({
  data: {
    background_color,
    background_image,
    background_image_mobile,
    logo_image,
    logo_height,
    logo_height_mobile,
    logo_padding,
    logo_padding_mobile,
    logo_url,
    extraCss,
  },
  globalAssetsUrl,
}) => {
  return (
    <Header
      styleData={{
        background_color,
        background_image,
        background_image_mobile,
        extraCss,
        logo_padding,
        logo_padding_mobile,
        globalAssetsUrl,
      }}>
      <HeaderContainer>
        <HeaderLogoGroup
          {...(logo_url ? { href: logo_url } : {})}
          rel='noopener noreferrer'
          target='_blank'>
          <HeaderLogoImage
            styleData={{ logo_height, logo_height_mobile }}
            src={`${logo_image}`}
          />
        </HeaderLogoGroup>
      </HeaderContainer>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  font-family: inherit;
  line-height: 1;
  box-sizing: border-box;
  
  ${({ styleData: { background_color, logo_padding } }) => `
    background: ${background_color};
    padding: ${logo_padding ? `${logo_padding}px 0;` : 'padding: 5px 0 3px;'}
  `}
  
  ${({
    theme: { mediaFromTablet },
    styleData: { background_image, logo_padding },
  }) =>
    background_image &&
    mediaFromTablet`
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    ${logo_padding ? `padding: ${logo_padding}px 0;` : 'padding: 7px 0;'}
    min-height: 0;
    background-image: url(${background_image});
  `} 
  
  ${({
    theme: { mediaMobile },
    styleData: { background_image_mobile, logo_padding_mobile },
  }) =>
    background_image_mobile &&
    mediaMobile`
    background-position: 100% 0;
    background-size: auto 100%;
    background-repeat: no-repeat;
    ${
      logo_padding_mobile
        ? `padding: ${logo_padding_mobile}px 0;`
        : 'padding: 6px 0;'
    }
    background-image: url(${background_image_mobile});
  `} 
  
  ${({ styleData: { extraCss } }) => extraCss} 
  ${({ theme: { dirRtl } }) => dirRtl`
    direction: rtl;
  `}
  
  ${({
    theme: { mediaMobile },
    styleData: { logo_padding_mobile },
  }) => mediaMobile`
    ${
      logo_padding_mobile
        ? `padding: ${logo_padding_mobile}px 0;`
        : 'padding: 7px 0;'
    }
  `}
  * {
    box-sizing: border-box;
  }
`;

const HeaderContainer = styled(Container)``;

const HeaderLogoGroup = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
  &:not([href]) {
    pointer-events: none;
  }
`;

const HeaderLogoImage = styled.img`
  ${({ styleData: { logo_height } }) => `
    height: ${logo_height}px;
  `}

  ${({
    theme: { mediaMobile },
    styleData: { logo_height_mobile },
  }) => mediaMobile`
    height: ${logo_height_mobile}px;
  `}
`;

GlobalHeader.propTypes = {
  data: PropTypes.shape({
    background_color: PropTypes.string,
    background_image: PropTypes.string,
    extraCss: PropTypes.string,
    logo_image: PropTypes.string.isRequired,
    logo_url: PropTypes.string,
    logo_height: PropTypes.number.isRequired,
    logo_height_mobile: PropTypes.number,
    logo_padding: PropTypes.number,
    logo_padding_mobile: PropTypes.number,
  }),
  globalAssetsUrl: PropTypes.string.isRequired,
};

export default GlobalHeader;
