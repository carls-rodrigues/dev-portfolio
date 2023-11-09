import { ArrowRight } from 'react-huge-icons/outline'
import { useTranslation } from 'react-i18next'

import Typography from '@/components/typography'

import * as S from './styles'

type Props = {
  roles: string[]
}

export default function LeftHeroContent({ roles }: Props) {
  const { t, i18n } = useTranslation()

  return (
    <S.LeftWrapper>
      <S.WelcomeWrapper>
        <div>
          <Typography color="#9A9D9E" font="poppins">
            {t('hero_title')}{' '}
            <Typography color="#F6F6F6" as="span" weight="600">
              Carlos Rodrigues 👋🏻
            </Typography>
          </Typography>
        </div>
        <S.TitleWrapper>
          <Typography
            color="#F6F6F6"
            size={64}
            weight="600"
            font="poppins"
            style={{ marginTop: '0.8rem' }}
          >
            {i18n.language !== 'en' && t('hero_subtitle')}
            <div>
              {roles.map((role, index) => (
                <div key={index}>
                  <Typography color="#F6F6F6" as="span" weight="600" size={64}>
                    {role}
                  </Typography>
                </div>
              ))}
            </div>
            {i18n.language === 'en' && t('hero_subtitle')}
          </Typography>
        </S.TitleWrapper>
        <S.DescriptionWrapper>
          <Typography color="#9A9D9E" size={18}>
            {t('hero_description')}
          </Typography>
        </S.DescriptionWrapper>
        <div>
          <S.Link href="#">
            <Typography color="#F6F6F6" weight="600">
              {t('hero_call_to_action')}
            </Typography>
            <ArrowRight width={24} height={24} color="#F6F6F6" />
          </S.Link>
        </div>
      </S.WelcomeWrapper>
    </S.LeftWrapper>
  )
}
