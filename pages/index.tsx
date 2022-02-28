import Typography from '@mui/material/Typography';
import { PageHead, SocialMedia } from 'app-components';

const Home = () => {
  return (
    <>
      <PageHead title={'David Armendáriz | About me'} />
      <Typography variant="h1">David Armendáriz</Typography>
      <Typography variant="h2">Software Developer / Mathematician</Typography>
      <SocialMedia />
      <hr />
      <Typography paragraph>
        I am a mathematician who transitioned to the Software Development
        industry. I am always learning new things and teaching them whenever I
        can. I also have a strong analytical and mathematical background.
      </Typography>
    </>
  );
};

export default Home;
