import AboutMe from 'app-components/about-me/aboutMe';
import PageHead from 'app-components/page-head/PageHead';

export default function Home() {
  return (
    <div>
      <PageHead title={'About me'} />
      <AboutMe />
    </div>
  );
}
