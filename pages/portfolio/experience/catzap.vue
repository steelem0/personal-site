<template>
  <HeroBanner headline="Catzap" subheading="An AI-powered cat meme generator — Made by Marcy" />
  
  <section class="min-h-screen py-12 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 items-start">

        <!-- INFO PANEL --> 
        <div class="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <h3 class="text-3xl font-bold text-gray-800">Catzap</h3>

          <p class="text-gray-800">
            Catzap is a playful AI-powered mobile-first purpose-built application that generates random cat images and overlays them with quirky, mood-matching captions. Users can zap new cats, favorite their top picks, and share memes with friends — all in a snappy, mobile-inspired interface.
          </p>

          <div>
            <h4 class="text-xl font-semibold text-gray-700 mb-2">How I Built It</h4>
            <p class="text-gray-800">
              Catzap is built with Ionic and Angular, styled with custom SCSS and Tailwind layers to deliver a polished, mobile-first experience even on desktop. On the backend, it integrates free cat image APIs and optionally connects to Groq LLM to generate creative, context-aware captions.
            </p>
            <p class="text-gray-800">
              I designed Catzap with playful animations, like heart bursts and sparkles on favoriting, and implemented a local favorites system stored in browser storage.
            </p>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-gray-700 mb-2">Tech Stack</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>APIs: <a href="https://thecatapi.com/" target="_blank" class="underline hover:text-indigo-600">The Cat API</a> (for random cat images)</li>
              <li>Frontend: <a href="https://ionicframework.com/" target="_blank" class="underline hover:text-indigo-600">Ionic Framework</a>, <a href="https://angular.dev/" target="_blank" class="underline hover:text-indigo-600">Angular</a>, custom SCSS</li>
              <li>Backend: <a href="https://groq.com/" target="_blank" class="underline hover:text-indigo-600">Groq LLM</a> captioning</li>
              <li>Hosting: VPS (nginx static hosting)</li>
            </ul>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://github.com/steelem0/capzap" target="_blank" class="w-full px-6 py-3 bg-purple-700 text-white text-center rounded-lg font-semibold hover:bg-purple-800 transition">
              View Source Code
            </a>
            <a href="http://portfolio.marcysteele.com/catzap/" target="_blank" class="w-full px-6 py-3 border border-purple-700 text-purple-700 text-center rounded-lg font-semibold hover:bg-purple-800 transition">
              Launch Catzap
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
              src="http://portfolio.marcysteele.com/catzap/"
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

<script>

</script>
