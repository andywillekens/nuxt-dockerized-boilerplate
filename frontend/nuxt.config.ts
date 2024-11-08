export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/fonts', '@nuxt/icon'],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL
    }
  },
  router: { options: { strict: true } },
  srcDir: 'src/',
  tailwindcss: {
    css: ['~/assets/css/tailwind.css']
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
