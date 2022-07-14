import { nanoid } from 'nanoid';
import { FadeInOut, ProgressBar } from 'components';
import * as S from './style';

const fonts: Array<string> = ['Sang Kwon Yeum', 'Yeummy-sk', 'Front End'];

export function Intro() {
  return (
    <S.Container>
      {fonts.map(font => (
        <FadeInOut key={nanoid()} font={font} />
      ))}
      <ProgressBar />
    </S.Container>
  );
}
