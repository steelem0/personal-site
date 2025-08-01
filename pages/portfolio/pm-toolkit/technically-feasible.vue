<template>
  <HeroBanner 
    headline="Feasibility Checklist" 
    subheading="A playful but practical guide to help you decide if your idea is buildable, scalable, and not secretly a dumpster fire."
  />

  <section class="py-10 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Is This Actually Feasible?</h3>
      <div class="bg-slate-50 p-6 rounded-2xl shadow-xl">
        <p class="text-sm text-gray-700 mb-4">
          Before you build the thing, pitch the thing, or spend two months chasing the thing—run through this quick checklist. It’s designed to save you from scope regret, dev spirals, stakeholder confusion, and “wait, we didn’t think about that?” moments.
        </p>
        <p class="text-sm text-gray-600">
          No red tape. Just real questions. Bring your idea, your coffee, and a little honesty.
        </p>
      </div>
    </div>
  </section>

  <!-- Feasibility Categories -->
  <section class="py-12 px-6 bg-white">
    <div class="max-w-5xl mx-auto space-y-8">

      <!-- Category: Clarity & Vision -->
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="text-xl font-semibold text-purple-700 mb-3">🔭 Clarity & Vision</h4>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Can you describe the project in one sentence?</li>
          <li>Do you know what success looks like (measurably)?</li>
          <li>Have you figured out what this is NOT trying to do?</li>
          <li>Can stakeholders agree on the purpose?</li>
        </ul>
      </div>

      <!-- Category: Technical Feasibility -->
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="text-xl font-semibold text-purple-700 mb-3">💻 Technical Feasibility</h4>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Do you already know the platform(s) or tech stack you’d use?</li>
          <li>Does your team (or network) have the skillset to build it?</li>
          <li>Are there any non-negotiable integrations or APIs?</li>
          <li>Would building this break any known constraints (infra, policies, timelines)?</li>
        </ul>
      </div>

      <!-- Category: People & Capacity -->
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="text-xl font-semibold text-purple-700 mb-3">👩‍💻 People & Capacity</h4>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Is there at least one clear owner?</li>
          <li>Do you have the right roles (or know how to get them)?</li>
          <li>Can the team realistically take this on with current workload?</li>
          <li>Is there senior support (or at least non-obstruction)?</li>
        </ul>
      </div>

      <!-- Category: Time & Momentum -->
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="text-xl font-semibold text-purple-700 mb-3">⏳ Time & Momentum</h4>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Can this be delivered in phases (MVP, then build on it)?</li>
          <li>Is there a time-sensitive need or opportunity?</li>
          <li>What happens if we don’t build it?</li>
          <li>Can we prototype something quickly to test it?</li>
        </ul>
      </div>

      <!-- Category: Risk & Reality Check -->
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="text-xl font-semibold text-purple-700 mb-3">⚠️ Risk & Reality Check</h4>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>What’s the worst-case scenario?</li>
          <li>Is there reputational, legal, or financial risk?</li>
          <li>How reversible is this if it fails?</li>
          <li>Will this project require governance or policy changes?</li>
        </ul>
      </div>

    </div>
  </section>

  <!-- CTA Footer -->
  <section class="bg-gradient-to-br from-purple-50 to-white py-16 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Still Feeling Good About Your Idea?</h3>
      <p class="text-gray-700 mb-6 text-sm">
        If you made it through that list and didn’t break a sweat—you’re probably onto something. If not, let’s workshop it together.
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
/* Match existing site visuals */
</style>
