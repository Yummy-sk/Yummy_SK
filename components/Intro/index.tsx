import { useEffect, useState } from 'react';
import * as S from './style';

export function Intro() {
  const [windowHeight, setWindowHeight] = useState(0);

  const scrollLogic = ({ texts }: { texts: NodeListOf<Element> }) => {
    const scrollBox = document.querySelector('.scroll-box') as Element;
    const dis = window.pageYOffset / ((scrollBox.offsetHeight - window.innerHeight) / 4);
    const gap = 1;
    texts.forEach((text: Element, index: number) => {
      text.style = '--progress:' + Math.max(0, dis - index * gap) + '';
    });
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    console.log(windowHeight);
    const texts = document.querySelectorAll('.text');

    window.addEventListener('scroll', () => scrollLogic({ texts }));

    return () => window.removeEventListener('scroll', () => scrollLogic({ texts }));
  }, [windowHeight]);

  return (
    <S.Container className="scroll-box" height={Number(windowHeight) * 5}>
      <S.Wrapper>
        <p className="text a">염상권</p>
        <p className="text b">Yemmy-sk</p>
        <p className="text c">Front End Developer</p>
        <p className="text d">Fuck up</p>
      </S.Wrapper>
    </S.Container>
  );
}
