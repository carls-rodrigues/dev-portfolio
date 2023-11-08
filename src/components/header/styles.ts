import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 10rem;
  background: linear-gradient(0deg, #050610 0%, #050610 100%),
    rgba(255, 255, 255, 0.02);
`
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoWrapper = styled.div`
  width: 20.8rem;
  height: 3.456rem;
`
export const MenuWrapper = styled.div`
  height: 100%;
  max-height: 1.6rem;
  display: flex;
  align-items: center;
  gap: 4.8rem;
`
export const MenuItem = styled.a``
export const Divider = styled.div`
  width: 0.1rem;
  height: 100%;
  background: #1e1f29;
`
export const LanguagesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const LanguageButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  svg {
    width: 1.8rem;
  }
`
