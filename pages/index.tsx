import type { NextPage } from 'next';
import { Intro } from 'components/Intro';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Intro />
    </Container>
  );
};

export default Home;
