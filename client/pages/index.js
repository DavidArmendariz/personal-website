import AboutMe from '../components/about-me/aboutMe';
import PageHead from '../components/page-head/PageHead';

export default function Home() {
  return (
    <div>
      <PageHead title={'About me'} />
      <AboutMe />
    </div>
  );
}
