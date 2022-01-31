import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import PopupPortal from '../PopupPortal/PopupPortal';

const AnimationModal = ({
  children,
  open,
  onClose,
  formMaxWidth,
  showCloseIcon = false,
}) => {
  const [active, setActive] = useState(false);
  const backdrop = useRef(null);

  useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);
    const keyHandler = (e) => e.key === 'Escape' && onClose();
    const clickHandler = (e) => e.target === current && onClose();

    if (current) {
      current.addEventListener('transitionend', transitionEnd);
      current.addEventListener('click', clickHandler);
      window.addEventListener('keydown', keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        document.activeElement.blur();
        setActive(true);
      }, 10);
    } else {
      window.setTimeout(() => {
        setActive(false);
      }, 300);
    }

    return () => {
      if (current) {
        current.removeEventListener('transitionend', transitionEnd);
        current.removeEventListener('click', clickHandler);
      }

      window.removeEventListener('keydown', keyHandler);
    };
  }, [open, onClose]);

  return (
    <>
      {(open || active) && (
        <PopupPortal className='modal-portal'>
          <Backdrop
            maxWidth={formMaxWidth}
            showCloseIcon={showCloseIcon}
            ref={backdrop}
            className={active && open && 'active'}>
            <Content className='modal-content'>{children}</Content>
          </Backdrop>
        </PopupPortal>
      )}
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  & .modal-content {
    transform: scale(0);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    max-width: ${(props) => props.maxWidth || '380'}px;
    margin: 0 auto;
    position: relative;
    &::before {
      content: ${(props) => (props.showCloseIcon ? '"×"' : 'none')};
      font-size: 50px;
      line-height: 40px;
      width: 40px;
      height: 40px;
      color: #fff;
      display: block;
      text-align: center;
      position: absolute;
      top: -40px;
      right: -40px;
      pointer-events: none;
    }
  }

  &.active {
    transition-duration: 200ms;
    transition-delay: 0ms;
    opacity: 1;

    & .modal-content {
      transform: scale(1);
      opacity: 1;
      transition-delay: 150ms;
      transition-duration: 250ms;
      border-radius: 4px;
    }
  }
`;

const Content = styled.div`
  box-sizing: border-box;
`;

export default AnimationModal;
