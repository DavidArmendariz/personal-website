import AppStack from '@/base-components/AppStack';
import AppText from '@/base-components/AppText';
import { Metadata } from 'next';
import Header from './header';

export const metadata: Metadata = {
  title: 'David Armendáriz - Software Developer / Mathematician',
  description: 'Software Developer / Mathematician',
};

const Home = () => {
  return (
    <AppStack spacing={2}>
      <Header />
      <AppText component="p">
        I am a mathematician who transitioned to the Software Development
        industry. I am always learning new things and teaching them whenever I
        can. I also have a strong analytical and mathematical background.
      </AppText>
    </AppStack>
  );
};

export default Home;
