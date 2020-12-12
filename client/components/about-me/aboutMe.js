import { MdWork, MdDescription } from 'react-icons/md';
import Link from 'next/link';

import styles from './aboutMe.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1>David Armendáriz</h1>
        </div>
        <h2>Mathematician and Software Developer</h2>
        <h3>
          I am a mathematician who transitioned to the Software Development
          industry. I am always learning new things and teaching them whenever I
          can. I also have a strong analytical and mathematical background.
        </h3>
        <div className={styles.buttonsContainer}>
          <Link href="/portfolio">
            <button className={styles.portfolioButton}>
              <MdWork />
              <span>View Portfolio</span>
            </button>
          </Link>
          <Link href="/resume">
            <button className={styles.resumeButton}>
              <MdDescription />
              <span>View Resume</span>
            </button>
          </Link>
        </div>
        <br />
        <div className={styles.whatIDo}>What I do</div>
        <div className={styles.whatIDoContent}>
          I have 1.5 years of experience as a mathematician and software
          developer. My main skill is to learn things extremely fast, no matter
          what the subject is. Below is a quick overview of my main technical
          skill sets and technologies I have used during my career.
        </div>
      </div>
    </div>
  );
}
