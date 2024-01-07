import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

const AppText = ({
  children,
  variant,
  component = 'span',
  bottomMargin = false,
}: {
  children: React.ReactNode;
  variant?: TypographyProps['variant'];
  component?: TypographyProps['component'];
  bottomMargin?: boolean;
}) => {
  return (
    <Typography
      gutterBottom={bottomMargin}
      component={component}
      variant={variant}
    >
      {children}
    </Typography>
  );
};

export default AppText;
