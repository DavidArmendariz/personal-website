import { MdPerson, MdWork, MdDescription } from 'react-icons/md';
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
} from 'react-icons/ai';

export const sidebarLinks = [
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

export const socialMediaLinks = [
  {
    url: 'https://twitter.com/DavidAP1998',
    icon: <AiOutlineTwitter />,
  },
  {
    url: 'https://www.linkedin.com/in/david-adrian-armendariz/',
    icon: <AiFillLinkedin />,
  },
  {
    url: 'https://github.com/DavidArmendariz',
    icon: <AiFillGithub />,
  },
  {
    url: 'https://www.youtube.com/channel/UC4jmaY21ri9n3DteRwuoJaA',
    icon: <AiFillYoutube />,
  },
];
