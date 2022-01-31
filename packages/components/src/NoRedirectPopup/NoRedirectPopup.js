import React, { useState, useCallback, useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import PopupPortal from '../PopupPortal/PopupPortal';
import Icon from '../Icon/Icon';
import typDefaultIcon from '../Icon/typDefaultIcon';

const useNoRedirectPopup = () => {
  const [isOpen, togglePopup] = useState(false);
  const popupNode = useRef(null);
  const closePopup = useCallback(() => {
    togglePopup(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupNode.current && !popupNode.current.contains(e.target)) {
        closePopup();
      }
    };

    isOpen &&
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closePopup();
        }
      });
    isOpen && document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', closePopup);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const NoRedirectPopup = useCallback(
    ({ title, description, buttonText, isTypeError, popupData }) =>
      isOpen && (
        <PopupPortal>
          <Overlay />
          <Wrapper ref={popupNode}>
            <CloseButton onClick={closePopup}>
              <Icon
                icon={[{ name: 'CLOSE', color: '#B1B1B1' }]}
                width='20'
                height='20'
              />
            </CloseButton>
            {!isTypeError && (
              <>
                <SvgIcon
                  $primaryStart={popupData?.icon_main_color || '#0094D9'}
                  $primaryStop={
                    popupData?.icon_main_color_gradient ||
                    popupData?.icon_main_color ||
                    '#0094D9'
                  }
                  $secondaryStart={popupData?.icon_secondary_color || '#47c08f'}
                  $secondaryStop={
                    popupData?.icon_secondary_color_gradient ||
                    popupData?.icon_secondary_color ||
                    '#47c08f'
                  }>
                  {parse(popupData?.file_content || typDefaultIcon || '')}
                </SvgIcon>
                <Title>{title}</Title>
              </>
            )}
            <Description>{description}</Description>
            <Button
              $colorPrimary={popupData?.button_color || '#064572'}
              $colorSecondary={
                popupData?.button_color_gradient ||
                popupData?.button_color ||
                '#064572'
              }
              $colorText={popupData?.button_text_color || '#fff'}
              onClick={closePopup}>
              {buttonText}
            </Button>
          </Wrapper>
        </PopupPortal>
      ),
    [isOpen]
  );

  NoRedirectPopup.propTypes = {
    title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description: PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.array.isRequired,
      PropTypes.string.isRequired,
    ]),
    buttonText: PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.string.isRequired,
    ]),
  };

  return {
    isOpen,
    togglePopup,
    NoRedirectPopup,
  };
};

const Overlay = styled.div`
  position: fixed;
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: -2;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 448px;
  padding: 38px 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 10px;
  font-family: inherit;
  ${({ theme: { mediaMobile } }) => mediaMobile`
    left: 20px;
    right: 20px;
    top: 20px;
    height: calc(100% - 40px);
    max-height: 500px;
    padding: 30px 20px 30px;
    width: auto;
    box-sizing: border-box;
    transform: none;
  `}
`;
const CloseButton = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const SvgIcon = styled.div`
  margin-bottom: 20px;
  svg {
    display: block;
    margin: 0 auto;
    --typ-primary-start: ${(props) => props.$primaryStart};
    --typ-primary-stop: ${(props) => props.$primaryStop};
    --typ-secondary-start: ${(props) => props.$secondaryStart};
    --typ-secondary-stop: ${(props) => props.$secondaryStop};
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: #363636;
  margin-bottom: 12px;
  padding: 0 5px;
  text-align: center;
`;
const Description = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #747474;
  margin-bottom: 21px;
  padding: 0 5px;
  text-align: center;
`;
const Button = styled.button`
  height: 50px;
  width: 100%;
  background: ${({ $colorPrimary }) => $colorPrimary};
  background: ${({ $colorPrimary, $colorSecondary }) => `linear-gradient(
    90deg,
    ${$colorPrimary},
    ${$colorSecondary}
  )`};
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: ${({ $colorText }) => $colorText};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const svgCss = css`
  width: 92px;
  height: 79px;
  margin: 0 auto 25px;
  display: block;
  overflow: visible;
`;

export default useNoRedirectPopup;
