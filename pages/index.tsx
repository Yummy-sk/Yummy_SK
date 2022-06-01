import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 1rem;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
    </Container>
  );
};

export default Home;
