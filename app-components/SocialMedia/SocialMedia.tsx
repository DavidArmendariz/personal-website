import Link from 'next/link';
import { SOCIAL_MEDIA_LINKS } from 'app-static';

const SocialMedia: React.FC<{ setRefs?: (ref: any) => void }> = ({
  setRefs,
}) => {
  return (
    <>
      {SOCIAL_MEDIA_LINKS.map(({ url, Icon }) => (
        <Link key={url} href={url}>
          <a ref={setRefs} target="_blank">
            <Icon sx={{ m: 1 }} />
          </a>
        </Link>
      ))}
    </>
  );
};

export default SocialMedia;
