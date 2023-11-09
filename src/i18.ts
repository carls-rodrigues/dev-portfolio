import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: {
        translation: {
          menu_who_i_am: 'About me',
          menu_portfolio: 'Portfolio',
          menu_contact: 'Contact',
          hero_title: "Hi, I'm",
          hero_subtitle: 'Developer Expert',
          hero_description:
            'I have worked on several front-end projects, from small websites to large web applications. This practical experience has allowed me to develop skills that help me create efficient and effective solutions.',
          hero_call_to_action: "Let's start a project"
        }
      },
      pt: {
        translation: {
          menu_who_i_am: 'Quem sou',
          menu_portfolio: 'Cases',
          menu_contact: 'Contato',
          hero_title: 'Olá, eu sou o',
          hero_subtitle: 'Especialista em Desenvolvimento',
          hero_description:
            'Trabalhei em diversos projetos front-end, desde pequenos websites até grandes aplicações web. Essa experiência prática me permitiu desenvolver habilidades que me ajudam a criar soluções eficientes e eficazes.',
          hero_call_to_action: 'Entre em contato'
        }
      }
    }
  })
