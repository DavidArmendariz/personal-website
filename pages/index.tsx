import Typography from '@mui/material/Typography';
import gsap from 'gsap';
import { PageHead, SocialMedia } from 'app-components';
import { useArrayRef } from 'app-hooks';
import { useIsomorphicLayoutEffect } from 'app-hooks/isomorphic-layout';

const Home = () => {
  const [refs, setRefs] = useArrayRef();
  const [socialMediaRefs, setSocialMediaRefs] = useArrayRef();

  const stagger = (currentRef: any) => {
    gsap.from(currentRef, {
      duration: 0.5,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      stagger: 0.5,
      ease: 'power4',
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(refs.current);
    stagger(socialMediaRefs.current);
  });

  return (
    <>
      <PageHead title={'David Armendáriz | About me'} />
      <Typography ref={setRefs} variant="h1">
        David Armendáriz
      </Typography>
      <Typography ref={setRefs} variant="h2">
        Software Developer / Mathematician
      </Typography>
      <SocialMedia setRefs={setSocialMediaRefs} />
      <hr ref={setRefs} />
      <Typography ref={setRefs} paragraph>
        I am a mathematician who transitioned to the Software Development
        industry. I am always learning new things and teaching them whenever I
        can. I also have a strong analytical and mathematical background.
      </Typography>
    </>
  );
};

export default Home;
