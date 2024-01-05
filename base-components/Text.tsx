import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

const Text = ({
  children,
  variant,
  component = 'span',
}: {
  children: React.ReactNode;
  variant?: TypographyProps['variant'];
  component?: TypographyProps['component'];
}) => {
  return (
    <Typography component={component} variant={variant}>
      {children}
    </Typography>
  );
};

export default Text;
