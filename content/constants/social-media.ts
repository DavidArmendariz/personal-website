import { SvgIconComponent } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SOCIAL_MEDIA_LINKS: Array<{
  id: string;
  url: string;
  Icon: SvgIconComponent;
}> = [
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/david-adrian-armendariz/',
    Icon: LinkedInIcon,
  },
  {
    id: 'instagram',
    url: 'https://instagram.com/mathsdev',
    Icon: InstagramIcon,
  },
  {
    id: 'github',
    url: 'https://github.com/DavidArmendariz',
    Icon: GitHubIcon,
  },
  {
    id: 'youtube',
    url: 'https://www.youtube.com/@mathsdev',
    Icon: YouTubeIcon,
  },
  {
    id: 'twitter',
    url: 'https://twitter.com/mathsdev_',
    Icon: TwitterIcon,
  },
];
