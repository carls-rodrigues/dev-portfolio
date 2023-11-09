import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const SlideWrapper = styled.div`
  width: 100%;
  .swiper-pagination {
    &-bullet {
      cursor: pointer;
      width: 13rem;
      height: 0.2rem;
      display: inline-block;
      background: ${({ theme }) => theme.colors.gray[700]};
      box-shadow: none;
      transition: all 0.4s ease 0s;
      &:hover,
      &-active {
        background: ${({ theme }) => theme.colors.gray[100]};
        opacity: 1;
      }
    }
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
`
export const ImageWrapper = styled.div`
  width: 52rem;
  height: 62.7rem;
`
