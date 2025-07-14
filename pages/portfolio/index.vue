<template>
<HeroBanner headline="Making Magic Happen" :subheading="'A curated collection of apps, platforms, and AI-powered solutions is currently being polished for your viewing pleasure'"/>
<section class="bg-white py-10 px-6">
  <div class="max-w-5xl mx-auto text-left">
    <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Advancing Digital Interaction, Adaptability, and Learning</h3>
    <div class="bg-slate-50 p-6 rounded-2xl shadow-xl">
      <p class="text-sm text-gray-700 mb-4">
        Highlighting key areas of expertise in advancing digital interaction, adaptive system design, and innovation through experiential learning. This collection presents real-world applications, prototypes, and research-driven approaches shaping modern digital environments.
      </p>
      <div class="grid md:grid-cols-3 gap-6 text-left">
        <div class="flex flex-col justify-between bg-white p-5 rounded">
          <div class="">
            <h4 class="font-semibold text-purple-700 mb-2">🔍 Designing for Engagement</h4>
            <p class="text-sm text-gray-600 mb-4">
              Exploration of design strategies that foster curiosity, sustain user attention, and promote meaningful interaction across digital platforms.
            </p>
          </div>
        <NuxtLink to="portfolio/engagement" class="text-center px-3 py-3 border border-purple-700 text-purple-700 rounded-lg font-semibold hover:bg-purple-50">
            View Engagement Insights
        </NuxtLink>
        </div>

        <div class="flex flex-col justify-between bg-white p-5 rounded">
          <div>
            <h4 class="font-semibold text-purple-700 mb-2">⚙️ Microapplications & Component Architecture</h4>
            <p class="text-sm text-gray-600 mb-4">
               Highlighting modular system design through microapplications, reusable components, and scalable architecture. Focused on creating flexible, maintainable, and high-performance digital ecosystems.
            </p>
          </div>
          <NuxtLink to="portfolio/components" class="text-center px-3 py-3 border border-purple-700 text-purple-700 rounded-lg font-semibold hover:bg-purple-50">
            Explore Component Architecture
          </NuxtLink>
        </div>

        <div class="flex flex-col justify-between bg-white p-5 rounded">
          <div>
            <h4 class="font-semibold text-purple-700 mb-2">💡 Play and Experiential Learning</h4>
            <p class="text-sm text-gray-600 mb-4">
              Exploring play as a space for experimentation, creativity, and testing what’s possible — where hands-on interaction drives innovation, sparks new ideas, and turns learning into something dynamic and meaningful.
            </p>
          </div>
          <NuxtLink to="portfolio/experience" class="text-center px-3 py-3 border border-purple-700 text-purple-700 rounded-lg font-semibold hover:bg-purple-50">
            Experiential Design & Gaming
          </NuxtLink>
        </div>


      </div>
    </div>
  </div>
</section>


  <section class="bg-slate-50 py-25 px-6">
    <div class="max-w-5xl mx-auto text-left">
     <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">AI Innovations & Creative Systems</h3>
     <p class="text-sm text-gray-700 mb-4">
        This section highlights applied research and development work at the intersection of artificial intelligence, human-computer interaction, and creative technology. 
        It addresses core challenges in designing adaptive, responsive, and user-centered systems, exploring how experimentation, rapid prototyping, and cross-disciplinary thinking drive meaningful innovation.
      </p>
      <p class="text-sm text-gray-700">
        The following projects illustrate practical applications of these principles, demonstrating how complex technologies can be shaped into accessible, engaging, and effective user experiences across diverse platforms.
      </p>
    </div>
  </section>

<section class="py-10 px-6 bg-white">
  <div class="max-w-5xl mx-auto">
    <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Project Management Expertise</h3>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-slate-100 p-6 rounded-xl shadow">
        <h4 class="text-lg font-semibold text-purple-700 mb-2">Enterprise-Scale Strategy & Cross-Functional Leadership</h4>
        <p class="text-sm text-gray-700">
          PMP-certified project management professional with nearly a decade of experience aligning stakeholders, business goals, and technical teams to deliver scalable, high-impact solutions in dynamic environments.
        </p>
      </div>
      <div class="bg-slate-100 p-6 rounded-xl shadow">
        <h4 class="text-lg font-semibold text-purple-700 mb-2">Agile Transformation & High-Performance Teams</h4>
        <p class="text-sm text-gray-700">
          Drives agile adoption, roadmap planning, and sprint delivery, enabling lean, adaptive teams to meet evolving requirements in fast-paced digital and AI-enabled product landscapes.
        </p>
      </div>
      <div class="bg-slate-100 p-6 rounded-xl shadow">
        <h4 class="text-lg font-semibold text-purple-700 mb-2">Digital Innovation, Risk Management & Delivery Excellence</h4>
        <p class="text-sm text-gray-700">
          Leads complex digital transformation initiatives with a focus on innovation, risk mitigation, stakeholder alignment, and delivery of production-ready systems that meet enterprise standards and user expectations.
        </p>
      </div>
    </div>
  </div>
</section>




</template>

<script setup>
import HeroBanner from '@/components/hero-banner';

</script>
