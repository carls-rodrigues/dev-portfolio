import { BR, US } from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next'

import Container from '@/components/container'
import Typography from '@/components/typography'

import * as S from './styles'

export default function Header() {
  const { t, i18n } = useTranslation()
  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
  return (
    <S.Wrapper>
      <Container>
        <S.ContentWrapper>
          <S.LogoWrapper />
          <S.MenuWrapper>
            <S.MenuItem href="#">
              <Typography color="#f6f6f6">{t('menu_who_i_am')}</Typography>
            </S.MenuItem>
            <S.MenuItem href="#">
              <Typography color="#f6f6f6">{t('menu_portfolio')}</Typography>
            </S.MenuItem>
            <S.MenuItem href="#">
              <Typography color="#f6f6f6">{t('menu_contact')}</Typography>
            </S.MenuItem>
            <S.Divider />
            <S.LanguagesWrapper>
              <S.LanguageButton onClick={() => handleChangeLanguage('pt')}>
                <BR title="Braz" />
                <Typography color="#f6f6f6">PT</Typography>
              </S.LanguageButton>
              <Typography color="#f6f6f6">/</Typography>
              <S.LanguageButton onClick={() => handleChangeLanguage('en')}>
                <US title="United States" />
                <Typography color="#f6f6f6">EN</Typography>
              </S.LanguageButton>
            </S.LanguagesWrapper>
          </S.MenuWrapper>
        </S.ContentWrapper>
      </Container>
    </S.Wrapper>
  )
}
