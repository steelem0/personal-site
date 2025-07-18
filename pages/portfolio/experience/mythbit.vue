<template>
   <HeroBanner headline="Mythbit" subheading="A Generative AI interactive experience - Made by Marcy"/>
  <section class="min-h-screen py-12 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 items-start">
        <!-- INFO PANEL --> 
        <div class="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <h3 class="text-3xl font-bold text-gray-800 ">Mythbit</h3>
          
          <p class="text-gray-800">
            Mythbit is an experimental AI-driven web game delivering fast-paced, D&D-inspired adventures. Players interact with the storyteller (a Generative AI bot), battle randomized monsters, and cast spells — all guided by Groq's LLM, which dynamically generates the narrative and adapts to in-game events.
          </p>

          <div>
            <h4 class="text-xl font-semibold text-gray-700 mb-2">How I Built It</h4>
            <p class="text-gray-800">
              At the core, Mythbit uses a custom-built Model Context Protocol (MCP) to orchestrate LLM interactions, control context memory, and sharply reduce prompt injection risks. I implemented an optional player text input specifically to stress-test system boundaries, ensuring user input only affects the game within safe, predefined limits.
            </p>
            <p class="text-gray-800">
              On the frontend, I built Mythbit with Nuxt 3 and Tailwind CSS, using PrimeVue components to create a polished, responsive UI with animations and interactive elements. Server-side rendering (SSR) is leveraged to ensure fast, SEO-friendly delivery and to keep all sensitive AI orchestration securely handled server-side, protecting API keys and system prompts.
            </p>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-gray-700 mb-2">Tech Stack</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Frontend: Nuxt 3, Tailwind CSS, PrimeVue</li>
              <li>Backend: <a href="https://groq.com/" target="_blank" class="underline hover:text-indigo-600">Groq</a> LLM + custom MCP layer</li>
              <!--li>Animation: Sprite.js with dynamic UI handlers</li-->
              <li>Data Sources: <a href="https://www.dnd5eapi.co/docs/" target="_blank" class="underline hover:text-indigo-600">D&D 5e API</a> (for monsters, spells, lore)</li>
              <li>Hosting: VPS/Unbuntu/Node</li>
            </ul>
          </div>

          <!--div>
            <h4 class="text-xl font-semibold text-gray-700 mb-2">AI Integration & Challenges</h4>
            <p class="text-gray-800">
              Mythbit’s biggest technical challenge was balancing rich, dynamic AI storytelling with compute cost constraints. To manage this, sessions are intentionally capped at ~3 minutes, letting players experience quick, replayable adventures while keeping LLM usage efficient. I also engineered the prompt flow to stay within the LLM context window even when blending real-time game state and external API data.
            </p>
          </div-->

          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://github.com/steelem0/mythbit" target="_blank" class="w-full px-6 py-3 bg-purple-700 text-white text-center rounded-lg font-semibold hover:bg-purple-800 transition">
              View Source Code
            </a>
            <a href="http://portfolio.marcysteele.com/mythbit/" target="_blank" class="w-full px-6 py-3 border border-purple-700 text-purple-700 text-center rounded-lg font-semibold hover:bg-purple-800 transition">
              Play Demo in New Window
            </a>
          </div>
        </div>

        <!-- APP PANEL -->
        <div class="px-4 sm:px-0 md:flex md:justify-center">
          <div class="relative w-full md:max-w-xs bg-black p-2 rounded-[2.5rem] shadow-lg flex flex-col items-center mt-10"
              style="height: 725px;">
              
            <!-- Top bezel (fake speaker area) -->
            <div class="md:block w-16 h-2 bg-gray-700 rounded-full mt-2 mb-2"></div>
            
            <!-- iframe -->
            <iframe
              src="http://portfolio.marcysteele.com/mythbit/"
              class="w-full flex-1 rounded-xl shadow-inner"
              frameborder="0"
            ></iframe>

            <!-- Bottom bezel space -->
            <div class="md:block h-4"></div>

            <!-- Outer phone border -->
            <div class="md:block absolute inset-0 border-8 border-gray-700 rounded-[2.5rem] pointer-events-none"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script></script>