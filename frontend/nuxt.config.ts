export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  runtimeConfig: {
    public: {
      API_URL:
        `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}` || 'http://localhost:8080'
    }
  },

  router: { options: { strict: true } },
  srcDir: 'src/',
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/fonts', '@nuxt/icon']
})