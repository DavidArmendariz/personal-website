import AppStack from '@/base-components/AppStack';
import AppText from '@/base-components/AppText';
import SocialMedia from '@/components/SocialMedia';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'David Armendáriz - Software Developer / Mathematician',
};

const Home = () => {
  return (
    <AppStack>
      <AppText variant="h1">David Armendáriz</AppText>
      <AppText variant="h2">Software Developer / Mathematician</AppText>
      <SocialMedia />
      <hr />
      <AppText component="p">
        I am a mathematician who transitioned to the Software Development
        industry. I am always learning new things and teaching them whenever I
        can. I also have a strong analytical and mathematical background.
      </AppText>
    </AppStack>
  );
};

export default Home;
