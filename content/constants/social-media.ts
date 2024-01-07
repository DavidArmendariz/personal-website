import { SvgIconComponent } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const SOCIAL_MEDIA_LINKS: Array<{
  id: string;
  url: string;
  Icon: SvgIconComponent;
}> = [
  {
    id: 'twitter',
    url: 'https://twitter.com/_davidaap_',
    Icon: TwitterIcon,
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/david-adrian-armendariz/',
    Icon: LinkedInIcon,
  },
  {
    id: 'github',
    url: 'https://github.com/DavidArmendariz',
    Icon: GitHubIcon,
  },
  {
    id: 'youtube',
    url: 'https://www.youtube.com/channel/UC4jmaY21ri9n3DteRwuoJaA',
    Icon: YouTubeIcon,
  },
];
