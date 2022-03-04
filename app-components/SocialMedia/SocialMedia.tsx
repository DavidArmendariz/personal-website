import Link from 'next/link';
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
    url: 'https://twitter.com/davidaap_',
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

const SocialMedia: React.FC<{ setRefs?: (ref: any) => void }> = ({
  setRefs,
}) => {
  return (
    <>
      {SOCIAL_MEDIA_LINKS.map(({ id, url, Icon }) => (
        <Link key={id} href={url}>
          <a aria-label={id} ref={setRefs} target="_blank">
            <Icon sx={{ m: 1 }} />
          </a>
        </Link>
      ))}
    </>
  );
};

export default SocialMedia;
