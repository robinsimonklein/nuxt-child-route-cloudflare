// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-auth-utils"],
  routeRules: {
    '/': {
      prerender: true
    },
    '/dashboard/**': {
      appMiddleware: 'auth'
    }
  }
})