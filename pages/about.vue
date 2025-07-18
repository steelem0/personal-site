<script setup lang="ts"></script>

<template>
  <HeroBanner headline="Hi, I'm Marcy" subheading=" Senior Developer and PMI–PMP® Certified Project Manager with ITIL 4 foundations and over 10 years of experience in IT, specializing in human-centered design, modular architecture, and scalable digital ecosystems. Extensive experience delivering government and military solutions, leading cross-functional teams, and crafting innovative, AI-driven platforms built for real-world complexity"/>
  <section class="bg-slate-50 py-24 ">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold text-purple-700 ">About Me</h2>
    </div>

    <div class="max-w-5xl mx-auto grid gap-12">

      <!-- Tech Stack -->
      <div>
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Tech Stack</h3>
        <ul class="flex flex-wrap gap-4 text-sm text-gray-700">
          <li class="bg-purple-100 px-3 py-1 rounded">Vue</li>
          <li class="bg-purple-100 px-3 py-1 rounded">Nuxt</li>
          <li class="bg-purple-100 px-3 py-1 rounded">Tailwind CSS</li>
          <li class="bg-purple-100 px-3 py-1 rounded">Angular</li>
          <li class="bg-purple-100 px-3 py-1 rounded">Directus</li>
          <li class="bg-purple-100 px-3 py-1 rounded">MySQL</li>
          <li class="bg-purple-100 px-3 py-1 rounded">LangChain</li>
          <li class="bg-purple-100 px-3 py-1 rounded">Azure</li>
        </ul>
      </div>

    <!-- Project Management -->
    <div class="bg-white-50 p-8 rounded-2xl shadow-md">
      <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Project & Delivery Leadership</h3>

      <div class="grid md:grid-cols-2 gap-8 text-sm text-gray-700 leading-relaxed">
        
        <div>
          <p>
            Delivers high-impact digital solutions from initial discovery through to production launch. Combines design thinking, technical depth, and strategic planning to guide modular, scalable systems into reality.
          </p>
          <p class="mt-4">
            Experienced in stakeholder alignment, systems mapping, and needs evaluation across government, military, and cross-sector innovation teams.
          </p>
        </div>

        <div>
          <p>
            Leads Agile product teams with clarity and flexibility—building workflows that prioritize outcomes over rituals. Known for transforming ambiguity into action and keeping momentum when others stall.
          </p>
          <p class="mt-4">
           Delivered platforms trusted by the military, shaped by AI, and built to adapt—each one crafted for durability, clarity, and user impact.
          </p>
        </div>

      </div>
    </div>

      <!-- Lexi Cameo -->
      <div class="bg-white p-6 rounded-2xl shadow-xl">
        <h3 class="text-2xl font-bold text-purple-700 mb-2">Lexi, My 130lb Creative Director</h3>
        <div class="flex flex-col md:flex-row gap-6 items-center">
          <img
            src="/assets/images/lexi.jpg"
            alt="Lexi the Cane Corso"
            class="w-48 h-48 object-cover rounded-full border-4 border-purple-700"
          />
          <div>
            <p class="italic text-gray-600 mb-2">
              “I only approve projects with cheeseburgers in the budget. And don’t pitch me unless you’ve had a walk.”
            </p>
            <p class="text-sm text-gray-700 mb-2">
              Lexi is my Cane Corso and full-time morale officer. She keeps my schedule balanced, protects my workflow, and is always down for a vibe check before a client call.
            </p>
            <ul class="list-disc list-inside text-sm text-gray-700">
              <li>Obsessed with cheeseburgers</li>
              <li>Wears a purple collar like a crown</li>
              <li>Besties with a smoky grey pitbull named Lola</li>
              <li>Believes in chasing goals and squirrels</li>
              <li>Taller than most toddlers</li>
            </ul>
          </div>
        </div>
      </div>

    <!-- Fun Facts -->
    <div class="bg-white p-8 rounded-2xl shadow-md">
      <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Fun Facts</h3>
      <div class="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
        
        <div class="flex items-start gap-4">
          <span class="text-purple-600 text-xl">🖤</span>
          <p>
            Once managed the floor of a tattoo studio, booked clients, and made coffee for the world’s most tattooed man before heading off to sell ink and machines at international conventions. Now briefs military generals and government leaders on innovation and digital transformation.
          </p>
        </div>
        
        <div class="flex items-start gap-4">
          <span class="text-purple-600 text-xl">👗</span>
          <p>
            Deeply passionate about reselling thrift fashion—curating unique garments that reflect identity, story, and self-expression. Wears what she sells and believes clothing should feel as bold as the person wearing it.
          </p>
        </div>
        
        <div class="flex items-start gap-4">
          <span class="text-purple-600 text-xl">🐾</span>
          <p>
            Works under the watchful eye of Lexi, a 130lb Cane Corso CEO.
          </p>
        </div>
        
        <div class="flex items-start gap-4">
          <span class="text-purple-600 text-xl">🌊</span>
          <p>
            Feels more productive after touching the ocean. Weirdly, this is true.
          </p>
        </div>

      </div>
    </div>


    </div>
  </section>
</template>


<style scoped></style>
