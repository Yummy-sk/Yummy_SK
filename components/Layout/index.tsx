import * as S from './style';

export function Layout({ children }: { children: React.ReactNode }) {
  return <S.Container>{children}</S.Container>;
}
