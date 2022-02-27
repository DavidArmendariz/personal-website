import { SvgIconComponent } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const SOCIAL_MEDIA_LINKS: Array<{
  url: string;
  Icon: SvgIconComponent;
}> = [
  {
    url: 'https://twitter.com/davidaap_',
    Icon: TwitterIcon,
  },
  {
    url: 'https://www.linkedin.com/in/david-adrian-armendariz/',
    Icon: LinkedInIcon,
  },
  {
    url: 'https://github.com/DavidArmendariz',
    Icon: GitHubIcon,
  },
  {
    url: 'https://www.youtube.com/channel/UC4jmaY21ri9n3DteRwuoJaA',
    Icon: YouTubeIcon,
  },
];
