import i18next from 'i18next'
import { eng } from './en'
import { esp } from './es'

const lg = localStorage.getItem('lng') || 'es'
i18next.init({
    interpolation: {
        escapeValue: false
    },
    lng: lg,
    resources: {
        en: {
            translation: eng
        },
        es: {
            translation: esp
        }
    }
})

export default i18next