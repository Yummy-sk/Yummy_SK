import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { Intro, About } from 'components';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Home: NextPage = () => {
  const [isWhileIntro, setIsWhileIntro] = useState<boolean>(true);

  useEffect(() => {
    const endIntro = () => setIsWhileIntro(false);

    // setTimeout(endIntro, 3000);
  }, []);

  return (
    <Container>
      {isWhileIntro && <Intro />}
      {!isWhileIntro && (
        <>
          <About />
        </>
      )}
    </Container>
  );
};

export default Home;
