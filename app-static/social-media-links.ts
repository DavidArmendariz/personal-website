import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { IconType } from 'react-icons/lib';

export const SOCIAL_MEDIA_LINKS: Array<{ url: string; icon: IconType }> = [
  {
    url: 'https://twitter.com/davidaap_',
    icon: AiOutlineTwitter,
  },
  {
    url: 'https://www.linkedin.com/in/david-adrian-armendariz/',
    icon: AiFillLinkedin,
  },
  {
    url: 'https://github.com/DavidArmendariz',
    icon: AiFillGithub,
  },
  {
    url: 'https://www.youtube.com/channel/UC4jmaY21ri9n3DteRwuoJaA',
    icon: AiFillYoutube,
  },
];
