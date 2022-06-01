import { useEffect } from 'react';
import * as S from './style';

export function Intro() {
  const scrollLogic = ({ allText }: { allText: NodeListOf<Element> }) => {
    const scrollBox = document.querySelector('.scroll-box') as Element;
    const dis = window.pageYOffset / ((scrollBox.offsetHeight - window.innerHeight) / 4);
    const gap = 1;
    allText.forEach(function (arr: any, index) {
      arr.style = '--progress:' + Math.max(0, dis - index * gap) + '';
    });
  };

  useEffect(() => {
    const allText = document.querySelectorAll('.text');

    window.addEventListener('scroll', () => scrollLogic({ allText }));

    return () => window.removeEventListener('scroll', () => scrollLogic({ allText }));
  }, []);

  return (
    <S.Container className="scroll-box">
      <S.Wrapper>
        <p className="text a">염상권</p>
        <p className="text b">Yemmy-sk</p>
        <p className="text c">Front End Developer</p>
        <p className="text d">Fuck up</p>
      </S.Wrapper>
    </S.Container>
  );
}
