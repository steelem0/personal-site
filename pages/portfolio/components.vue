<template>
    <HeroBanner headline=" Components & Microapplications" :subheading="'A showcase of modular system design — including reusable UI components, scalable architecture patterns, and microapplications driving flexibility, maintainability, and innovation'"/>

   <section class="bg-white py-10 px-6">
      <div class="max-w-5xl mx-auto text-left">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Components & Microapplications</h1>
        <p class="text-sm text-gray-700 mb-4">
            Modular design through components and microapplications has become foundational in advancing responsive, scalable, and maintainable digital ecosystems. By breaking down complex systems into discrete, reusable building blocks, teams can accelerate development, ensure consistency, and enable parallel workstreams across platforms.
        </p>
        <p class="text-sm text-gray-700 mb-4">
        Components provide a reliable pattern for usability, accessibility, and visual coherence, while microapplications push scalability further by allowing independent deployment, targeted feature delivery, and easier system upgrades. Together, they promote code reuse, reduce maintenance overhead, and support rapid innovation, making them indispensable tools for building adaptable, future-ready user experiences.
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
            <span class="text-gray-500 text-sm">[ Placeholder ]</span>
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
</template>

<script setup>
import { ref } from 'vue'

const selected = ref(null)

const components = [
  {
    title: 'Placeholder',
    description: 'Reusable Vue and Nuxt components crafted for consistency.',
    detail: 'Detailed explanation of design system setup, props, slots, and how components are integrated across multiple applications.'
  },
  {
    title: 'Placeholder Micro Frontends',
    description: 'Decoupled frontend modules enabling scalable architecture.',
    detail: 'Example: breaking large apps into independently deployed micro frontends, improving team autonomy and release cycles.'
  },
  {
    title: 'Placeholder API-Connected Widgets',
    description: 'Interactive components integrated with backend or AI services.',
    detail: 'Example: chat components, live data widgets, or LLM-powered modules connecting to external APIs.'
  }
]

function openModal(item) {
  selected.value = item
}

function closeModal() {
  selected.value = null
}
</script>
