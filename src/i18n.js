import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ku from './locales/ku.json'
import ko from './locales/ko.json'

// Get saved language from localStorage (or default to 'en')
const savedLanguage = localStorage.getItem('language') || 'en'

// Define language directions
const langDirections = {
  en: 'ltr',
  ku: 'rtl',
  ko: 'ltr' // Korean is LTR
}

// Function to update the direction and class
const updateDirection = (locale) => {
  const dir = langDirections[locale] || 'ltr'
  document.documentElement.setAttribute('dir', dir)
  document.body.setAttribute('dir', dir)

  // Apply Tailwind classes for alignment
  if (dir === 'rtl') {
    document.body.classList.add('text-right')
    document.body.classList.remove('text-left')
  } else {
    document.body.classList.add('text-left')
    document.body.classList.remove('text-right')
  }
}

// Initialize i18n
const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'en',
  messages: { en, ku, ko },
  globalInjection: true
})

// Apply direction on load
updateDirection(savedLanguage)

// Watch for language change
i18n.global.watchLocale = (newLocale) => {
  localStorage.setItem('language', newLocale)
  updateDirection(newLocale)
}

export default i18n
