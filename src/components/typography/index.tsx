import { ReactNode } from 'react'

import * as S from '@/components/typography/styles'

export type Props = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
  weight?: '400' | '500' | '600' | '700'
  size?: number
  font?: 'poppins' | 'inter'
  color?: string
}

export default function Typography({
  children,
  as = 'p',
  weight = '400',
  size = 16,
  font = 'inter',
  color
}: Props) {
  return (
    <S.Wrapper color={color} font={font} size={size} weight={weight} as={as}>
      {children}
    </S.Wrapper>
  )
}
