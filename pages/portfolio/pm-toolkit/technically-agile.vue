<template>
  <HeroBanner 
    headline="Agile Feature Breakdown" 
    subheading="A fast, flexible way to turn your big idea into buildable, testable, user-focused chunks."
  />

  <section class="py-10 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Break It Down to Build It Right</h3>
      <div class="bg-slate-50 p-6 rounded-2xl shadow-xl">
        <p class="text-sm text-gray-700 mb-4">
          Whether you're planning an MVP, rebuilding a legacy tool, or just need to untangle the spaghetti in your backlog, this guide will help you break features into valuable, testable chunks.
        </p>
        <p class="text-sm text-gray-600">
          No agile jargon walls. No 40-column spreadsheets. Just a clean framework to move from product vision → epics → features → stories — without losing your team’s will to live.
        </p>
      </div>
    </div>
  </section>

  <section class="py-12 px-6 bg-white">
    <div class="max-w-5xl mx-auto space-y-10">

      <!-- Step 1 -->
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="text-xl font-semibold text-purple-700 mb-3">🧠 Step 1: Start With the Why</h4>
        <p class="text-sm text-gray-700 mb-3">
          Before you even think about features, ask: What problem are we solving? Who is this for? What should this experience feel like? Make sure your team has a shared understanding of the goal.
        </p>
        <ul class="list-disc list-inside text-sm text-gray-600">
          <li>What outcome are we enabling?</li>
          <li>Who are our primary users?</li>
          <li>What is the key user journey?</li>
        </ul>
      </div>

      <!-- Step 2 -->
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="text-xl font-semibold text-purple-700 mb-3">📦 Step 2: Define Epics</h4>
        <p class="text-sm text-gray-700 mb-3">
          Epics are your high-level themes — think of them like swim lanes. Each epic represents a functional area or major user goal.
        </p>
        <ul class="list-disc list-inside text-sm text-gray-600">
          <li>Authentication</li>
          <li>Profile & Personalization</li>
          <li>Data Insights</li>
          <li>Notifications & Feedback Loops</li>
        </ul>
      </div>

      <!-- Step 3 -->
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="text-xl font-semibold text-purple-700 mb-3">🔍 Step 3: Break Epics Into Features</h4>
        <p class="text-sm text-gray-700 mb-3">
          Each epic can be broken into features — tangible, user-facing functionality that brings value. These should be independently testable.
        </p>
        <ul class="list-disc list-inside text-sm text-gray-600">
          <li>"Login with Email" under Authentication</li>
          <li>"Dark Mode Toggle" under Preferences</li>
          <li>"Download Report as PDF" under Insights</li>
        </ul>
      </div>

      <!-- Step 4 -->
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="text-xl font-semibold text-purple-700 mb-3">✍️ Step 4: Write the Stories</h4>
        <p class="text-sm text-gray-700 mb-3">
          User stories are the bite-sized work units. Use the classic format — but tailor it to your audience.
        </p>
        <ul class="list-disc list-inside text-sm text-gray-600">
          <li>As a user, I want to reset my password so I don’t lose access</li>
          <li>As an analyst, I want to filter by region so I can focus my report</li>
          <li>As a new user, I want onboarding steps so I know where to begin</li>
        </ul>
      </div>

    </div>
  </section>

  <!-- CTA Footer -->
  <section class="bg-gradient-to-br from-purple-50 to-white py-16 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Want Help Breaking It Down?</h3>
      <p class="text-gray-700 mb-6 text-sm">
        Whether you're launching an MVP or navigating scope chaos, I’ve helped teams map features and ship real things—without the agile theater. Let’s make it doable.
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
