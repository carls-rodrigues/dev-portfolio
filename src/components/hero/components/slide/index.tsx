import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as S from './styles'

type Props = {
  images?: string[]
}

export default function HeroSlide({ images = [] }: Props) {
  return (
    <S.Wrapper>
      <S.SlideWrapper>
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000
          }}
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{ width: '100%' }}>
              <S.ImageWrapper>
                <S.Image src={image} />
              </S.ImageWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SlideWrapper>
    </S.Wrapper>
  )
}
