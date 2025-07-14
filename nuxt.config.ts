import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['nuxt-particles'],
    build: {
    transpile: ['tsparticles', 'tsparticles-shape-char']
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
