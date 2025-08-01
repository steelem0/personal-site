<template>
  <HeroBanner 
    headline="Modular Systems & Interactive Building Blocks" 
    :subheading="'A showcase of modular design — reusable components, microapplications, and scalable architectures driving flexibility, creativity, and innovation in interactive worlds.'" 
  />

  <section class="bg-white py-10 px-6">
    <div class="max-w-5xl mx-auto text-left">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Modular Systems & Interactive Worlds
      </h1>
      <p class="text-sm text-gray-700 mb-4">
        Modular design sits at the heart of modern digital ecosystems, enabling teams to move faster, innovate boldly, and deliver seamless user experiences. Through reusable components, microapplications, and composable architectures, I explore how to build interactive systems that are adaptable, maintainable, and playful — from AI-driven storytelling engines to scalable learning tools.
      </p>
      <p class="text-sm text-gray-700 mb-4">
        This collection highlights how small, intentional building blocks come together to create engaging, future-ready digital experiences, blending technology, creativity, and systems thinking.
      </p>
    </div>
  </section>

  <section class="py-12 px-6 bg-slate-50">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in components"
          :key="index"
          class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
        >
          <div class="h-40 bg-gray-200 flex items-center justify-center">
            <span class="text-gray-500 text-sm">[ Screenshot / Demo ]</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h2 class="text-lg font-semibold text-purple-700 mb-2">{{ item.title }}</h2>
            <p class="text-sm text-gray-600 mb-4 flex-1">
              {{ item.description }}
            </p>
            <button
              class="mt-auto text-purple-700 hover:text-purple-900 font-medium text-sm"
              @click="openModal(item)"
            >
              View Example →
            </button>
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
            <span class="text-gray-500 text-sm">[ Insert Screenshot / Demo ]</span>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section class="bg-gradient-to-br from-teal-50 to-white py-16 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Ready to Launch Responsibly?</h3>
      <p class="text-gray-700 mb-6 text-sm">
        Adopting generative AI is not just a tech decision—it’s a strategic one. Take the time to assess readiness across people, data, tools, and policy. Treat AI like any other critical tool: with structure, intent, and respect for its limitations.
      </p>
      <a 
        href="https://ca.linkedin.com/in/marcy-s-98425567" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition">
        → Connect with Me on LinkedIn
      </a>
    </div>
  </section>

</template>

<script setup>
import { ref } from 'vue'

const selected = ref(null)

const components = [
  {
    title: 'AI Story Generator',
    description: 'Modular narrative engine combining LLM prompts, random events, and player choices.',
    detail: 'Explores how modular story nodes, reusable scene templates, and AI-generated dialogue create adaptive, replayable experiences.'
  },
  {
    title: 'Procedural Map Builder',
    description: 'Composable system generating dynamic game maps or environments.',
    detail: 'Demonstrates reusable algorithms and UI patterns to construct randomized yet coherent game worlds.'
  },
  {
    title: 'Interactive Dialogue Component',
    description: 'Reusable front-end module for player-NPC conversations.',
    detail: 'Features modular dialogue trees, adaptive responses, and backend integration with AI or static datasets.'
  },
  {
    title: 'Micro Frontend Quiz Engine',
    description: 'Decoupled learning tool with pluggable question sets and adaptive feedback.',
    detail: 'Designed as a microapp that integrates easily into larger learning ecosystems while maintaining standalone deployability.'
  },
  {
    title: 'Dynamic UI Toolkit',
    description: 'Library of design system components for rapid prototyping.',
    detail: 'Ensures visual consistency and scalability across interactive applications through modular buttons, cards, modals, and forms.'
  },
  {
    title: 'API-Connected AI Widget',
    description: 'Live component fetching data or LLM responses in real time.',
    detail: 'Integrates backend APIs with front-end display logic, designed for plug-and-play reuse across projects.'
  }
]

function openModal(item) {
  selected.value = item
}

function closeModal() {
  selected.value = null
}
</script>
