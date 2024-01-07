import AppStack from '@/base-components/AppStack';
import { SOCIAL_MEDIA_LINKS } from '@/content/constants/social-media';
import ExternalLink from './ExternalLink';

const SocialMedia = () => {
  return (
    <AppStack direction={'row'}>
      {SOCIAL_MEDIA_LINKS.map(({ id, url, Icon }) => (
        <ExternalLink key={id} href={url}>
          <Icon sx={{ m: 1 }} />
        </ExternalLink>
      ))}
    </AppStack>
  );
};

export default SocialMedia;
