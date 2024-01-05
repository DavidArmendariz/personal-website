import Text from '@/base-components/Text';
import SocialMedia from '@/components/SocialMedia';
import '@/theme/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'David Armendáriz - Software Developer / Mathematician',
};

const Home = () => {
  return (
    <>
      <Text variant="h1">David Armendáriz</Text>
      <Text variant="h2">Software Developer / Mathematician</Text>
      <SocialMedia />
      <hr />
      <Text component="p">
        I am a mathematician who transitioned to the Software Development
        industry. I am always learning new things and teaching them whenever I
        can. I also have a strong analytical and mathematical background.
      </Text>
    </>
  );
};

export default Home;
