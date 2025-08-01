import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['nuxt-particles', '@nuxt/image', 'nuxt-gtag'],
    build: {
    transpile: ['tsparticles', 'tsparticles-shape-char']
    },
 gtag: {
    id: 'G-0MXJXJV0BX', 
    config: {
      anonymize_ip: true,
    },
    debug: false, 
  },
  compatibilityDate: '2025-05-15',
    ssr: true,
    nitro: {
    preset: 'static'
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
    vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  
})