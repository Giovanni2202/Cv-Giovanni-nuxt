export default defineNuxtConfig({
  srcDir: 'app/',
  modules: ['@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Portafolio | Victor Ordoñez',
      meta: [
        { name: 'description', content: 'Portafolio profesional de Victor Giovanny Ordoñez Romero' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})