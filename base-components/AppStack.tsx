import Stack, { StackProps } from '@mui/material/Stack';
import React from 'react';

const AppStack = ({
  children,
  spacing,
  direction,
}: {
  children: React.ReactNode;
  spacing?: StackProps['spacing'];
  direction?: StackProps['direction'];
}) => {
  return (
    <Stack spacing={spacing} direction={direction}>
      {children}
    </Stack>
  );
};

export default AppStack;
