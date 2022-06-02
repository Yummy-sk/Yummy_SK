import type { NextPage } from 'next';
import { Intro, About } from 'components';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Intro />
      <About />
      <div style={{ width: '100%', height: '100vh' }}></div>
    </Container>
  );
};

export default Home;
