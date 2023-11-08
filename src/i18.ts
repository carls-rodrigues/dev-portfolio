import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          menu_who_i_am: 'About me',
          menu_portfolio: 'Portfolio',
          menu_contact: 'Contact'
        }
      },
      pt: {
        translation: {
          menu_who_i_am: 'Quem sou',
          menu_portfolio: 'Cases',
          menu_contact: 'Contato'
        }
      }
    }
  })
