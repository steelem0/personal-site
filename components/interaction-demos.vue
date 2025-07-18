<template>
    <section class="py-12 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Motion & Interaction Demos
            </h1>
            <p class="text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            A collection of micro-interactions, animations, and motion experiments designed to enhance usability, deliver feedback, and create meaningful, engaging user experiences. This section explores how purposeful movement can guide attention, signal state changes, and add delight without compromising function.
            </p>

            <div class="bg-slate-50 p-6 rounded-2xl shadow-xl">
                <div class="grid md:grid-cols-3 gap-6 text-left">
                    <div class="flex flex-col justify-between bg-white p-5 rounded">
                        <div
                            class="w-full max-w-sm bg-white rounded-xl shadow transition-transform transform
                                hover:-translate-y-2 hover:shadow-lg
                                focus:-translate-y-2 focus:shadow-lg
                                active:-translate-y-2 active:shadow-lg
                                p-6 cursor-pointer"
                            tabindex="0"
                            @click="showInfo = !showInfo"
                        >
                            <h3 class="text-lg font-semibold text-purple-700 mb-2">Interactive Card</h3>
                            <p class="text-sm text-gray-600">
                            Tap or hover to lift. Mobile users can also tap to reveal extra info.
                            </p>
                            <div v-if="showInfo" class="mt-3 text-xs text-gray-500">
                            💡 Here’s more info shown on tap!
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col bg-white rounded px-5">
                        <div class="my-5">
                        <h3 class="text-lg font-semibold text-purple-700 my-5 mx-2">Simple Motion Toggle</h3>
                        <p class="text-sm text-gray-600">Tap or click to toggle off or on.</p>
                        </div>
                    
                        <div class="items-center space-x-3">
                            
                            <span class="text-sm text-gray-700">Off</span>
                            <button
                            @click="isOn = !isOn"
                            :class="[
                                'relative inline-flex w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-300 focus:outline-none',
                                isOn ? 'bg-purple-600' : 'bg-gray-300'
                            ]"
                            role="switch"
                            :aria-checked="isOn.toString()"
                            >
                            <span
                                :class="[
                                'inline-block h-5 w-5 transform bg-white rounded-full transition duration-300',
                                isOn ? 'translate-x-5' : 'translate-x-0'
                                ]"
                            ></span>
                            </button>
                            <span class="text-sm text-gray-700">On</span>
                        </div>

                    </div>
                    <div class="flex flex-col bg-white rounded px-5">
                        <div class="my-5">
                        <h3 class="text-lg font-semibold text-purple-700 my-2">Simple Animated Button</h3>
                        <p class="text-sm text-gray-600">Tap or click to show animations.</p>
                        </div>
                        <button
                            class="relative overflow-hidden px-6 py-3 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition"
                            @click="createRipple"
                        >
                            Ripple Button
                            <span
                            v-for="(r, i) in ripples"
                            :key="i"
                            class="absolute bg-white/50 rounded-full pointer-events-none"
                            :style="{
                                width: '200px',
                                height: '200px',
                                top: `${r.y}px`,
                                left: `${r.x}px`,
                                transform: 'translate(-50%, -50%)',
                                animation: 'ripple 0.6s ease-out',
                            }"
                            />
                        </button>
                    </div>
                    <div class="flex flex-col bg-white rounded px-5">
                        <div class="my-5">
                        <h3 class="text-lg font-semibold text-purple-700 my-2">Text Preload skeleton</h3>
                        <p class="text-sm text-gray-600">Detail to your user that content is coming. Shows animated shimmer/skeleton loading bars before revealing “real” content.</p>
                        </div>
                        <div class="space-y-4">
                            <div v-if="loading" class="animate-pulse space-y-2">
                            <div class="h-4 bg-gray-300 rounded"></div>
                            <div class="h-4 bg-gray-300 rounded w-5/6"></div>
                            <div class="h-4 bg-gray-300 rounded w-3/4"></div>
                            </div>
                            <div v-else>
                            <p class="text-gray-700">✅ Content loaded! This is the final data.</p>
                            </div>
                            <button
                            class="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                            @click="loadContent"
                            >
                            Reload Demo
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col bg-white rounded px-5">
                        <div class="my-5">
                        <h3 class="text-lg font-semibold text-purple-700 my-2">Draggable Element Demo</h3>
                        <p class="text-sm text-gray-600">A playful drag-and-drop interaction demonstrating responsive motion and direct manipulation. Designed to explore how touch and mouse events create engaging, intuitive user experiences across devices.</p>
                        </div>
                        <div class="relative w-full h-64 bg-gray-100 rounded">
                        <div
                                class="w-16 h-16 bg-purple-600 rounded-full absolute cursor-grab active:cursor-grabbing"
                                :style="{ top: `${position.y}px`, left: `${position.x}px` }"
                                @mousedown="startDrag"
                                @touchstart="startDrag">
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col bg-white rounded px-5">
                        <div class="my-5">
                        <h3 class="text-lg font-semibold text-purple-700 my-2">Magnetic Button with Haptic Feedback</h3>
                        <p class="text-sm text-gray-600">A magnetic button interaction that tracks cursor movement on desktop and simulates haptic feedback with a subtle pulse effect on mobile. Designed to enhance touch responsiveness and create a playful, premium feel across devices.</p>
                        </div>
                        <div
                            ref="magnetWrapper"
                            class="relative w-40 h-16 mx-auto my-10"
                            @mousemove="onMouseMove"
                            @mouseleave="resetPosition"
                            @touchstart="onTouchStart"
                            @touchend="onTouchEnd"
                        >
                            <button
                            class="absolute w-full h-full bg-purple-600 text-white font-semibold rounded-lg shadow transition-transform duration-200 ease-out"
                            :class="{ 'animate-pulse-tap': isPulsing }"
                            :style="{
                                transform: `translate(${bposition.x}px, ${bposition.y}px)`,
                            }"
                            >
                            Magnetic Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isOn = ref(false)

const isVisible = ref(false)
let observer
const section = ref(null)
const showInfo = ref(false)
const ripples = ref([])
const loading = ref(true)


function loadContent() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

// simulate initial load
loadContent()

function createRipple(event) {
  const button = event.currentTarget
  const rect = button.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  ripples.value.push({ x, y })
  setTimeout(() => ripples.value.shift(), 600)
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) isVisible.value = true
    },
    { threshold: 0.1 }
  )
  if (section.value) observer.observe(section.value)
})

onUnmounted(() => {
  if (section.value) observer.unobserve(section.value)
})
const position = ref({ x: 100, y: 100 })
let isDragging = false

function startDrag(event) {
  isDragging = true
  const parent = event.currentTarget.parentElement
  const parentRect = parent.getBoundingClientRect()

  const move = (e) => {
    if (!isDragging) return

    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY

    let x = clientX - parentRect.left - 32
    let y = clientY - parentRect.top - 32

    // clamp X and Y inside parent bounds
    x = Math.max(0, Math.min(x, parentRect.width - 64))
    y = Math.max(0, Math.min(y, parentRect.height - 64))

    position.value = { x, y }
  }

  const stop = () => {
    isDragging = false
    window.removeEventListener('mousemove', move)
    window.removeEventListener('mouseup', stop)
    window.removeEventListener('touchmove', move)
    window.removeEventListener('touchend', stop)
  }

  window.addEventListener('mousemove', move)
  window.addEventListener('mouseup', stop)
  window.addEventListener('touchmove', move)
  window.addEventListener('touchend', stop)
}

const bposition = ref({ x: 0, y: 0 })
const isPulsing = ref(false)
const magnetWrapper = ref(null)

function onMouseMove(e) {
  const rect = magnetWrapper.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const deltaX = (e.clientX - centerX) * 0.2 // magnetic strength
  const deltaY = (e.clientY - centerY) * 0.2

  bposition.value = { x: deltaX, y: deltaY }
}

function resetPosition() {
  bposition.value = { x: 0, y: 0 }
}

function onTouchStart() {
  isPulsing.value = true
}

function onTouchEnd() {
  setTimeout(() => {
    isPulsing.value = false
  }, 200) // end the pulse after 200ms
}

</script>
<style scoped>
@keyframes pulseTap {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.animate-pulse-tap {
  animation: pulseTap 0.3s ease;
}
</style>