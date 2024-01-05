import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'David Armendáriz - Page not found',
};

const NotFound = () => {
  return <div>404 - This page could not be found.</div>;
};

export default NotFound;
