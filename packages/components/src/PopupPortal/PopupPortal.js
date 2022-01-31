import React, { useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const PopupPortal = ({
  children,
  className = 'root-portal',
  element = 'div',
}) => {
  const el = useMemo(() => document.createElement(element), []);
  el.classList.add(className);

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  return createPortal(children, el);
};

PopupPortal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.string,
};

export default PopupPortal;
