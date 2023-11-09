import styled from 'styled-components'

import { Wrapper as Typography } from '@/components/typography/styles'

export const Wrapper = styled.section`
  background: linear-gradient(118deg, #00010c -3.67%, #000107 106.52%), #fff;
  padding: 11.2rem 0;
`
export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LeftWrapper = styled.div``
export const WelcomeWrapper = styled.div`
  width: auto;
  max-width: 64.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`
export const TitleWrapper = styled.div`
  & div {
    height: 8rem;
    overflow: hidden;
    > span {
      /* background: ${({ theme }) => theme.colors.gray[800]}; */
    }

    & div:first-child {
      animation: text-animation 15s infinite;
    }
    @keyframes text-animation {
      0% {
        margin-top: 0;
      }
      7% {
        margin-top: 0;
      }
      15% {
        margin-top: -7.92rem;
      }
      22% {
        margin-top: -7.92rem;
      }
      30% {
        margin-top: -15.84rem;
      }
      37% {
        margin-top: -15.84rem;
      }
      45% {
        margin-top: -23.76rem;
      }
      52% {
        margin-top: -23.76rem;
      }
      60% {
      }
      67% {
        margin-top: -15.84rem;
      }
      75% {
        margin-top: -7.92rem;
      }
      82% {
        margin-top: -7.92rem;
      }
      90% {
        margin-top: 0;
      }
      100% {
        margin-top: 0;
      }
    }
  }
`
export const DescriptionWrapper = styled.div`
  ${Typography} {
    /* animation: lights 5s 750ms linear infinite; */
  }
`
export const Link = styled.a`
  margin-top: 6.4rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;

  animation: bounce 1s infinite alternate;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateX(1.5rem);
    }
  }
`
export const RightWrapper = styled.div`
  width: 52rem;
  height: 67.3rem;
  background: peru;
`
