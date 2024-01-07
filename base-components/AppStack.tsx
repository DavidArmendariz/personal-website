import Stack, { StackProps } from '@mui/material/Stack';
import React from 'react';

const AppStack = ({
  children,
  spacing,
  direction,
  alignItems,
  justifyContent,
}: {
  children: React.ReactNode;
  spacing?: StackProps['spacing'];
  direction?: StackProps['direction'];
  alignItems?: StackProps['alignItems'];
  justifyContent?: StackProps['justifyContent'];
}) => {
  return (
    <Stack
      spacing={spacing}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Stack>
  );
};

export default AppStack;
