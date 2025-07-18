<template>
    <HeroBanner headline=" Experiential Learning & Playful Exploration" subheading="A showcase of hands-on projects where experimentation, creativity, and curiosity drive learning and innovation"/>
    <section class="py-12 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
        <p class="text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            This collection highlights the role of play in sparking new ideas, testing boundaries, and shaping more meaningful digital experiences.
        </p>

        <!-- Grid of playful projects -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 fade-in">
            <div
            v-for="(item, index) in projects"
            :key="index"
            class="bg-slate-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
            <div class="h-40 bg-gray-200 flex items-center justify-center">
     
              <NuxtImg
              v-if="item.image"
                fit="cover"
                :src="'/assets/images/'+item.image"
                alt="image"
                width="400"
                height="150"
            />


              <span v-else class="text-gray-500 text-sm">[ Optional Image or Demo GIF ]</span>
            </div>
            <div class="p-4 flex flex-col flex-1">
                <h2 class="text-lg font-semibold text-purple-700 mb-2">{{ item.title }}</h2>
                <p class="text-sm text-gray-600 mb-4 flex-1">
                {{ item.description }}
                </p>
                <button
                v-if="item.type === 'modal'"
                @click="openModal(item)"
                class="mt-auto text-purple-700 hover:text-purple-900 font-medium text-sm"
                >
                View Example →
                </button>
                <NuxtLink
                v-if="item.type == 'page'"
               :to="item.link"
                class="mt-auto button text-purple-700 hover:text-purple-900 font-medium text-sm"
                >
                View Example →
                </NuxtLink>
            </div>
            </div>
        </div>

        <!-- Modal -->
        <div
            v-if="selected"
            class="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            @click.self="closeModal"
        >
            <div class="bg-white max-w-lg w-full rounded-lg shadow-lg p-6 relative">
            <button
                class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                @click="closeModal"
                aria-label="Close modal"
            >
                ✕
            </button>
            <h3 class="text-xl font-semibold text-purple-700 mb-4">{{ selected.title }}</h3>
            <p class="text-sm text-gray-700 mb-4">{{ selected.detail }}</p>
            <div class="w-full h-48 bg-gray-100 rounded flex items-center justify-center">
                <span class="text-gray-500 text-sm">[ Example Image / Interactive Demo ]</span>
                <span v-if="selected.title == 'Motion & Interaction Demos'"></span>
            </div>
            </div>
        </div>
        </div>
    </section>
 
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const selected = ref(null);
import { computed } from 'vue'

function getImageUrl(imageName) {
  if (!imageName) return ''
  return "`../../assets/images/${imageName}`"
}


const projects = [
  {
    title: 'Mythbit (AI D&D Microgame)',
    type: 'page',
    link: 'experience/mythbit',
    image: 'myth.png',
    description: 'A playful, AI-powered storytelling game that invites users to create fast, dynamic D&D-style adventures.',
    detail: 'Mythbit integrates LLM-generated narratives, random scene generation, and interactive choices — designed as a microexperience to test how AI can support player-driven storytelling.'
  },
  {
    title: 'Catzap (Meme Generator)',
    type: 'page',
    link: 'experience/catzap',
    image: 'ZAP.png',
    description: 'A lightweight tool for generating random cat memes using public APIs and custom image overlays.',
    detail: 'Built as an experiment in rapid prototyping and humor-driven engagement, Catzap explores the intersection of play, social media culture, and generative content.'
  },
  {
    title: 'Motion & Interaction Demos',
    type: 'page',
    image: 'hci.png',
    link: 'experience/interaction',
    description: 'A collection of micro-interactions, hover animations, and motion experiments exploring UI responsiveness.',
    detail: 'Focused on testing subtle, meaningful motion design principles to enhance usability and create emotional resonance without overwhelming the user experience.'
  }
]
function openModal(item) {
  selected.value = item
}
function closeModal() {
  selected.value = null
}
</script>
<style scoped>

</style>