'use client';

import AppStack from '@/base-components/AppStack';
import { useTheme } from '@mui/material/styles';

import AppText from '@/base-components/AppText';
import SocialMedia from '@/components/SocialMedia';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppStack
      direction={matches ? 'row' : 'column'}
      alignItems="center"
      spacing={3}
    >
      <Image
        src="/pp.jpg"
        alt="Profile picture from David"
        width={200}
        height={200}
        priority={false}
      />
      <AppStack id="personal-info">
        <AppText variant="h1">David Armendáriz</AppText>
        <AppText variant="h2">Software Developer / Mathematician</AppText>
        <SocialMedia />
      </AppStack>
    </AppStack>
  );
};

export default Header;
