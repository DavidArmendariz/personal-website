import Stack, { StackProps } from '@mui/material/Stack';
import React from 'react';

const AppStack = ({
  children,
  className,
  id,
  spacing,
  direction,
  alignItems,
  justifyContent,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: StackProps['spacing'];
  direction?: StackProps['direction'];
  alignItems?: StackProps['alignItems'];
  justifyContent?: StackProps['justifyContent'];
}) => {
  return (
    <Stack
      id={id}
      className={className}
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
