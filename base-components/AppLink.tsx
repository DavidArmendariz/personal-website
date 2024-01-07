import Link from 'next/link';
import React, { HTMLAttributeAnchorTarget } from 'react';

const AppLink = ({
  children,
  href,
  target,
}: {
  children: React.ReactNode;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}) => {
  return (
    <Link href={href} target={target}>
      {children}
    </Link>
  );
};

export default AppLink;
