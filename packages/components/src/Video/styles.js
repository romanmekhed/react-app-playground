import { css } from 'styled-components';

export const Icons = css`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  touch-action: manipulation;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 100%;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: var(--video-hover-color);
      transform: scale(var(--video-zoom-on-hover));
    }
  }

  &:active {
    background: var(--video-hover-color);
    transform: scale(var(--video-zoom-on-hover));
  }
`;

export const deafultTheme = {
  mainColor: '#FF8A00',
  hoverColor: '#FF8A00',
  muteButtonPosition: 'top-left',
  muteButtonType: 'small',
  muteButtonColor: 'linear-gradient(91.17deg, #FFD600 -2.8%, #FF9900 114.18%)',
  muteButtonHoverColor:
    'linear-gradient(91.17deg, #00D600 -2.8%, #FF9900 114.18%)',
  zoomOnHover: false,
};
