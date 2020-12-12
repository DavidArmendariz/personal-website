import { MdPerson, MdWork, MdDescription } from 'react-icons/md';

export const paths = [
  { path: '/', text: 'About me', icon: <MdPerson /> },
  {
    path: '/portfolio',
    text: 'Portfolio',
    icon: <MdWork />,
  },
  {
    path: '/resume',
    text: 'Resume',
    icon: <MdDescription />,
  },
];
