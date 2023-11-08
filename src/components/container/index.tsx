import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return <S.Wrapper>{children}</S.Wrapper>
}
