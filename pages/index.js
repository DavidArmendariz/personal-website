import AboutMe from 'app-components/AboutMe';
import PageHead from 'app-components/PageHead';

export default function Home() {
  return (
    <div>
      <PageHead title={'About me'} />
      <AboutMe />
    </div>
  );
}
