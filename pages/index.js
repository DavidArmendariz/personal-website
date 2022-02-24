import Link from 'next/link';
import { styled } from '@mui/system';
import Button from 'app-components/Button';
import PageHead from 'app-components/PageHead';

export default function Home() {
  return (
    <div>
      <PageHead title={'About me'} />
      <Container>
        <h1>David Armendáriz</h1>
        <h2>Mathematician and Software Developer</h2>
        <h3>
          I am a mathematician who transitioned to the Software Development
          industry. I am always learning new things and teaching them whenever I
          can. I also have a strong analytical and mathematical background.
        </h3>
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
      </Container>
    </div>
  );
}

const Container = styled('div')`
  padding: 3rem;
`;
