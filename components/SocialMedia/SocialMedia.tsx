import Link from 'next/link';
import AppStack from '@/base-components/AppStack';
import { SOCIAL_MEDIA_LINKS } from '@/content/constants/social-media';

const SocialMedia = () => {
  return (
    <AppStack direction={'row'}>
      {SOCIAL_MEDIA_LINKS.map(({ id, url, Icon }) => (
        <Link key={id} href={url}>
          <Icon sx={{ m: 1 }} />
        </Link>
      ))}
    </AppStack>
  );
};

export default SocialMedia;
