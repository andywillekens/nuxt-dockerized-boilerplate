export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/fonts', '@nuxt/icon'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      API_URL: `${process.env.APP_URL}${process.env.API_ENDPOINT}`
    }
  },
  router: { options: { strict: true } },
  srcDir: 'src/',
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  compatibilityDate: '2024-11-07',
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  }
})
