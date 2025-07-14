<script setup>


import { defineProps } from 'vue'


const props = defineProps({
  headline: { type: String, required: true },
  subheading: { type: String, required: true }
})
const options = {
 fullScreen: { enable: false }, 
  particles: {
    color: { value: "#000000" },
    fpsLimit: 120,
    links: { color: "#000000", enable: false},
    move: {
      direction: 'bottom',
      enable: true,
      outModes: 'bounce',
      random: false,
      speed: 0.40,
      straight: false
    },
    number: { value: 32 },
    size: { value: {min: 1, max:1.9} },
    opacity: { value: 0.2 }
  }
}

</script>

<template>

 <section class="relative bg-slate-50 py-24 px-6 min-h-[30vh] flex items-center justify-center">
   <!-- Particles background layer -->
  <NuxtParticles
    id="tsparticles"
    :options="options"
    class="absolute inset-0 z-0"
  />
    <div class="max-w-4xl mx-auto text-center fade-in">
      <h2 class="text-4xl font-extrabold text-purple-700 mb-4">{{ props?.headline }}</h2>
      <p class="text-xl text-gray-700 mb-8">
       <i>{{ props?.subheading }}.</i>
      </p>
      <div class="flex justify-center gap-4">

      </div>
    </div>
  </section>

</template>

<style scoped>
/* Optional: smooth fade-in for the hero text */
.relative.z-10 {
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
