<template>
  <section class="bg-slate-50 py-24 px-6">
      <NuxtParticles
        id="tsparticles"
        :options="options"
        class="absolute inset-0 z-0"
      />
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold text-purple-700 mb-4">Innovating & Re-imagining the Future with Artificial Intelligence</h2>
      <p class="text-xl text-gray-700 mb-8">
       <i>Turning bold ideas into AI-powered applications that push boundaries.</i>
      </p>
      <div class="flex justify-center gap-4">
        <NuxtLink to="/portfolio" class="px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800">
            View Portfolio
        </NuxtLink>
        <NuxtLink to="/resume" class="px-6 py-3 border border-purple-700 text-purple-700 rounded-lg font-semibold hover:bg-purple-50">
            View Resume
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="bg-purple-50 py-10 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Before the Buzzwords</h3>
      <p class="text-gray-700 text-md leading-relaxed mb-4">
        I’m a certified PMP with over 10 years of experience leading digital product delivery in government and public-sector innovation teams. I specialize in AI integration, mobile UX, and building tools that actually get used — not just presented.
      </p>
        <p class="text-gray-700 text-md leading-relaxed mb-4">
        I’ve led the design, development and deployment of National mobile apps, CMS platforms, and generative AI prototypes for real-world services. I manage small technical teams, write code when needed, and drive projects from research to launch.
      </p>
        <p class="text-gray-700 text-md leading-relaxed mb-4">
        Currently focused on AI capability planning, conversational UX, and how to scale practical digital transformation inside slow-moving systems — without burning out the team.
      </p>
    </div>
  </section>

  <section class="bg-white py-20 px-6">
  <div class="max-w-4xl mx-auto text-center">
    <h3 class="text-2xl font-bold text-gray-800 mb-4">Designing the Future of Intelligent Experience</h3>
    <p class="text-gray-700 text-lg mb-6">
      Building immersive, responsive digital platforms where artificial intelligence, interaction, and creative storytelling converge. Each solution is crafted to scale intuitively, feel emotionally resonant, and support real-time user participation.
    </p>
    <div class="grid md:grid-cols-3 gap-6 text-left">
      <div>
        <h4 class="font-semibold text-purple-700 mb-2">🧠 Applied AI Design</h4>
        <p class="text-sm text-gray-600">Projects are driven by practical applications of AI—including content-aware systems, chatbots, and adaptive workflows that serve real users in real contexts.</p>
      </div>
      <div>
        <h4 class="font-semibold text-purple-700 mb-2">🎮 Mobile-First Thinking</h4>
        <p class="text-sm text-gray-600">Mobile platforms are treated as the primary canvas, ensuring every solution is optimized for responsive, scalable, and human-centered interaction.</p>
      </div>
      <div>
        <h4 class="font-semibold text-purple-700 mb-2">🎨 Interactive Storytelling</h4>
        <p class="text-sm text-gray-600">Design systems prioritize agency and emotional pacing, allowing users to shape outcomes, explore narratives, and feel seen within the experience.</p>
      </div>
    </div>
  </div>
</section>

<section class="py-20 px-6 bg-purple-50">
  <div class="max-w-4xl mx-auto text-center">
    <h3 class="text-2xl font-bold text-gray-800 mb-6">How I Approach Innovation</h3>
    <p class="text-lg text-gray-700 mb-10">
      I build systems that are just structured enough to move ideas forward — without crushing the creativity that sparked them.
    </p>
    <div class="grid md:grid-cols-3 gap-6 text-left">
      <div>
        <h4 class="font-semibold text-purple-700 mb-2">🔍 Context-First Design</h4>
        <p class="text-sm text-gray-600">Every project starts with understanding who it’s for, how it fits, and what success actually looks like — before we touch a single tool.</p>
      </div>
      <div>
        <h4 class="font-semibold text-purple-700 mb-2">📦 Systems Over Scramble</h4>
        <p class="text-sm text-gray-600">I don’t believe in reinventing the wheel. I believe in building reusable frameworks that save time, reduce errors, and scale with confidence.</p>
      </div>
      <div>
        <h4 class="font-semibold text-purple-700 mb-2">🎯 Strategy You Can Ship</h4>
        <p class="text-sm text-gray-600">No “innovation theater.” I work with teams to break ideas into testable, buildable pieces — so great ideas actually make it to users.</p>
      </div>
    </div>
  </div>
</section>


  <section class="py-20 px-6 bg-slate-50">
    <div class="max-w-4xl mx-auto">
      <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Project Management</h3>
     <p class="text-gray-700 text-lg mb-6 text-center">Great projects don’t happen by accident. They need structure, communication, and constant iteration. I use agile methodologies to align people, priorities, and problems — balancing technical feasibility with user needs.</p>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-slate-100 p-6 rounded-xl shadow">
          <h4 class="text-lg font-semibold text-purple-700 mb-2">Strategic Needs Analysis & Cross-Functional Collaboration</h4>
          <p class="text-sm text-gray-700">Skilled at working with diverse stakeholders to surface, evaluate, and synthesize user and business needs—then translating them into actionable product strategy.</p>
        </div>
        <div class="bg-slate-100 p-6 rounded-xl shadow">
          <h4 class="text-lg font-semibold text-purple-700 mb-2">Solution-Oriented Planning & Team Enablement</h4>
          <p class="text-sm text-gray-700">Known for turning ambiguity into clarity through roadmap creation, feature prioritization, and real-time coaching of small, high-impact development teams.</p>
        </div>
        <div class="bg-slate-100 p-6 rounded-xl shadow">
          <h4 class="text-lg font-semibold text-purple-700 mb-2">Stakeholder Alignment & Delivery Execution</h4>
          <p class="text-sm text-gray-700">Excels at navigating complex environments, balancing technical constraints with user goals, and delivering production-ready platforms with confidence and clarity.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const options = {
 fullScreen: { enable: false }, 
  particles: {
    color: { value: "#000000" },
    fpsLimit: 120,
    links: { color: "#000000", enable: false},
    move: {
      direction: 'bottom',
      enable: true,
      outModes: 'bounce',
      random: false,
      speed: 0.40,
      straight: false
    },
    number: { value: 100 },
    size: { value: {min: 1, max:1.9} },
    opacity: { value: 0.2 }
  }
}
</script>