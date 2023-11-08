import styled, { css } from 'styled-components'

import { Props } from '.'

type WrapperProps = Omit<Props, 'children' | 'as'>

export const Wrapper = styled.p<WrapperProps>`
  ${({ theme, color, size, weight, font }) => css`
    font-family: ${theme.fonts.family[font!]};
    font-size: ${size! / 10}rem;
    font-style: normal;
    font-weight: ${weight!};
    line-height: 120%;
    color: ${color ?? theme.colors.gray[900]};
  `}
`
