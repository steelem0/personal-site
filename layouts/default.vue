<template>
  <div>
    <header class="sticky top-0 z-50 bg-white shadow-md">
      <nav class="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 class="text-2xl font-bold text-purple-700">Marcy Steele</h1>
        <ul class="flex gap-6 text-gray-800 font-medium">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/resume">Resume</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="text-center py-6 text-sm text-gray-500">
      &copy; 2025 Marcy Steele. Built with Nuxt + Tailwind.
    </footer>
  </div>
</template>