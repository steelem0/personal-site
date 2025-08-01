<template>
  <HeroBanner 
    headline="Innovation Delivery Toolkit" 
    subheading="A collection of practical templates and strategic frameworks for digital project leaders"
  />

  <section class="bg-white py-10 px-6">
    <div class="max-w-5xl mx-auto">
      <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Plan, Launch, and Scale with Confidence</h3>
      <div class="bg-slate-50 p-6 rounded-2xl shadow-xl">
        <p class="text-sm text-gray-700 mb-4">
          These resources are designed to support digital innovation, product development, and AI integration by offering structured starting points. They reflect real-world project work and are tailored for fast-moving, design-aware, and outcome-driven environments.
        </p>
        <p class="text-sm text-gray-600">
          Use them to reduce ambiguity, align teams, and create repeatable patterns for successful delivery.
        </p>
      </div>
    </div>
  </section>

  <!-- Grid of Tools -->
  <section class="bg-white py-10 px-6">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
        <div>
          <h4 class="font-semibold text-purple-700 mb-2">📄 Project Charter Template</h4>
          <p class="text-sm text-gray-600 mb-4">
            A modular charter for scoping, stakeholder alignment, and delivery framing. Includes example language and success criteria templates.
          </p>
        </div>
        <NuxtLink to="/portfolio/pm-toolkit/" class="text-center px-4 py-3 border border-purple-700 text-purple-700 rounded-lg font-semibold hover:bg-purple-50">
          Open Template
        </NuxtLink>
      </div>

      <div class="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
        <div>
          <h4 class="font-semibold text-purple-700 mb-2">✅ Feasibility Checklist</h4>
          <p class="text-sm text-gray-600 mb-4">
            A quick-start guide to help assess technical, budgetary, and operational feasibility of innovation initiatives.
          </p>
        </div>
        <NuxtLink to="/portfolio/pm-toolkit/technically-feasible" class="text-center px-4 py-3 border border-purple-700 text-purple-700 rounded-lg font-semibold hover:bg-purple-50">
          Review Criteria
        </NuxtLink>
      </div>

      <div class="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
        <div>
          <h4 class="font-semibold text-purple-700 mb-2">🧠 AI Capability Planning Guide</h4>
          <p class="text-sm text-gray-600 mb-4">
            A business-focused guide to preparing teams, systems, and strategies for effective, responsible AI adoption.
          </p>
        </div>
        <NuxtLink to="/portfolio/pm-toolkit/ai-project-readiness-guide" class="text-center px-4 py-3 border border-purple-700 text-purple-700 rounded-lg font-semibold hover:bg-purple-50">
          View Guide
        </NuxtLink>
      </div>

      <div class="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
        <div>
          <h4 class="font-semibold text-purple-700 mb-2">🔁 Agile Feature Breakdown</h4>
          <p class="text-sm text-gray-600 mb-4">
            A simple format to decompose digital products into user-focused features and epics across iterative delivery cycles.
          </p>
        </div>
        <NuxtLink to="/portfolio/pm-toolkit/technically-agile" class="text-center px-4 py-3 border border-purple-700 text-purple-700 rounded-lg font-semibold hover:bg-purple-50">
          Explore Framework
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- CTA Footer -->
  <section class="bg-gradient-to-br from-teal-50 to-white py-16 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Need a Smarter Starting Point?</h3>
      <p class="text-gray-700 mb-6 text-sm">
        Whether you're kicking off a digital initiative, aligning a cross-functional team, or just tired of reinventing the wheel, this toolkit offers practical structure for creative work. Let's make delivery smarter, not harder.
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
import HeroBanner from '@/components/hero-banner'
</script>

<style scoped>
/* Styled to match existing site aesthetic */
</style>
