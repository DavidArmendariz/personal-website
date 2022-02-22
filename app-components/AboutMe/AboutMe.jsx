import BaseCol from 'react-bootstrap/Col';
import BaseContainer from 'react-bootstrap/Container';
import BaseRow from 'react-bootstrap/Row';
import Button from 'app-components/Button';
import Link from 'next/link';
import styled from 'styled-components';

export default function AboutMe() {
  return (
    <Container>
      <h1>David Armendáriz</h1>
      <h2>Mathematician and Software Developer</h2>
      <h3>
        I am a mathematician who transitioned to the Software Development
        industry. I am always learning new things and teaching them whenever I
        can. I also have a strong analytical and mathematical background.
      </h3>
      <BaseContainer fluid>
        <BaseRow>
          <BaseCol>
            <Link href="/portfolio">
              <a>
                <Button>View Portfolio</Button>
              </a>
            </Link>
          </BaseCol>
          <BaseCol>
            <Link href="/resume">
              <a>
                <Button>View Resume</Button>
              </a>
            </Link>
          </BaseCol>
        </BaseRow>
      </BaseContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;
