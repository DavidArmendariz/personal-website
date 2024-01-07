import AppLink from '@/base-components/AppLink';
import React from 'react';

const ExternalLink = ({
  href,
  children,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <AppLink href={href} target="_blank">
      {children}
    </AppLink>
  );
};

export default ExternalLink;
