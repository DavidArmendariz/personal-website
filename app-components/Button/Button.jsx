import React from 'react';
import BaseButton from 'react-bootstrap/Button';

const Button = ({ children, variant = 'primary' }) => {
  return <BaseButton variant={variant}>{children}</BaseButton>;
};

export default Button;
