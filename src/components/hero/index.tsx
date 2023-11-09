import Image1 from '@/assets/images/image1.jpeg'
import Image2 from '@/assets/images/image2.jpeg'
import Image3 from '@/assets/images/image3.jpeg'
import Container from '@/components/container'
import LeftHeroContent from '@/components/hero/components/left-content'
import HeroSlide from '@/components/hero/components/slide'

import * as S from './styles'

export default function Hero() {
  const roles = ['Front-end', 'Back-end', 'Fullstack', 'Mobile']
  const images = [Image1, Image2, Image3]
  return (
    <S.Wrapper>
      <Container>
        <S.HeroWrapper>
          <LeftHeroContent roles={roles} />
          <S.RightWrapper>
            <HeroSlide images={images} />
          </S.RightWrapper>
        </S.HeroWrapper>
      </Container>
    </S.Wrapper>
  )
}
