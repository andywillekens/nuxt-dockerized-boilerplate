export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/fonts', '@nuxt/icon'],
  runtimeConfig: {
    public: {
      API_URL:
        `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}` || 'http://localhost:8080'
    }
  },

  router: { options: { strict: true } },
  srcDir: 'src/',
  tailwindcss: {
    css: ['~/assets/css/tailwind.css']
  }
})
