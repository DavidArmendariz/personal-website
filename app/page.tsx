import AppStack from '@/base-components/AppStack';
import AppText from '@/base-components/AppText';
import { Metadata } from 'next';
import Header from './header';

export const metadata: Metadata = {
  title: 'David Armendáriz - Senior Software Developer / Mathematician',
  description:
    'David Armendariz is a mathematician and frontend-focused full-stack software engineer with a passion for cybersecurity. Explore his portfolio showcasing innovative software development, AI-assisted solutions, and cutting-edge web applications. Learn more about his work in secure software development, ethical hacking, and tech-driven solutions for businesses.',
  openGraph: {
    images: {
      url: 'https://www.mathsdev.com/banner.jpg',
    },
  },
};

const Home = () => {
  return (
    <AppStack spacing={2}>
      <Header />
      <AppText component="p">
        I am a mathematician and a frontend-focused full-stack software
        engineer. I am always learning new things and spreading knowledge. My
        main skill is to learn fast and to have a strong <b>analytical</b> and{' '}
        <b>mathematical</b> mindset. I am open-minded, adaptable, a{' '}
        <b>critical thinker</b>, a problem-solving lover and a{' '}
        <b>clean-code obsessed</b>. Currently learning more about cybersecurity,
        focusing on secure software development to build resilient systems while
        ensuring strong security practices
      </AppText>
    </AppStack>
  );
};

export default Home;
