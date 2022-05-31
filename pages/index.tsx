import type { NextPage } from 'next';
import styled from 'styled-components';

const Temp = styled.div`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <Temp>
      <h1>Hello World</h1>
    </Temp>
  );
};

export default Home;
