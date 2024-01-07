import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';

const AppButton = ({
  children,
  variant = 'text',
}: {
  children: React.ReactNode;
  variant?: ButtonProps['variant'];
}) => {
  return <Button variant={variant}>{children}</Button>;
};

export default AppButton;
