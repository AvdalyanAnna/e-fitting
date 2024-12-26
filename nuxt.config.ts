// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  darkMode: false,
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  css: [
    '~/assets/styles/main.scss', // Add your SCSS file here
  ],
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        // Explicitly set the theme to light for the HTML document
        'data-theme': 'light'
      }
    }
  }
})
