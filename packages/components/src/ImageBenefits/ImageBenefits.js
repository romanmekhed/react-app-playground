import React from 'react';
import PropTypes from 'prop-types';

const ImageBenefits = ({ children }) => children;

ImageBenefits.Title = (props) => <div {...props} />;
ImageBenefits.Text = (props) => <div {...props} />;
ImageBenefits.Wrapper = (props) => <div {...props} />;

ImageBenefits.propTypes = {
  children: PropTypes.node,
};

export default ImageBenefits;
