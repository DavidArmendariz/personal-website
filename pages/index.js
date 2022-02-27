import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Button from 'app-components/Button';
import PageHead from 'app-components/PageHead';

export default function Home() {
  return (
    <>
      <PageHead title={'About me'} />
      <Typography variant="h1">David Armendáriz</Typography>
      <Typography variant="h2">Software Developer / Mathematician</Typography>
      <Typography paragraph>
        I am a mathematician who transitioned to the Software Development
        industry. I am always learning new things and teaching them whenever I
        can. I also have a strong analytical and mathematical background.
      </Typography>
      <Link href="/portfolio">
        <a>
          <Button>View Portfolio</Button>
        </a>
      </Link>
      <Link href="/resume">
        <a>
          <Button>View Resume</Button>
        </a>
      </Link>
    </>
  );
}
