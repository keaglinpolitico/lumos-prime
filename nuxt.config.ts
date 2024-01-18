// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  typescript: {
    shim: false
  },
  ui: {
    global: true,
  },
  modules: [
    '@nuxt/ui',
  ]
})
