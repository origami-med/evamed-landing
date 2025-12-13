<template>
  <div 
    class="feature-card bg-white/90 backdrop-blur-xl border border-card-border rounded-md p-6 transition-all duration-500 relative overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] z-10 group h-[300px]"
    :style="{ counterIncrement: 'feature-counter' }"
    ref="cardRef"
  >
    <div 
      class="absolute bottom-0 left-0 font-display text-[7rem] font-extrabold text-primary opacity-[0.03] -z-10 leading-none pointer-events-none transition-all duration-500 group-hover:opacity-[0.08] group-hover:-translate-y-2.5"
    >
      {{ featureNumber }}
    </div>
    <div 
      class="feature-card-content grid grid-cols-[3fr_2fr] items-center relative z-10"
    >
      <div class="pr-5">
        <span class="feature-tag inline-block font-semibold text-xs uppercase tracking-wider text-primary bg-[rgba(0,201,183,0.1)] px-3 py-1.5 rounded-lg mb-3 border border-[rgba(0,201,183,0.2)]">
          {{ feature.tag }}
        </span>
        <h2 class="font-display text-lg md:text-xl font-extrabold mb-3 text-text-primary leading-[1.2]">
          {{ feature.title }}
        </h2>
        <ul class="list-none mt-1">
          <li 
            v-for="bullet in feature.bullets" 
            :key="bullet"
            class="feature-list-item py-1.5 pl-8 relative text-text-secondary text-sm leading-[1.5] transition-transform duration-300 hover:translate-x-2"
          >
            {{ bullet }}
          </li>
        </ul>
      </div>
      <div 
        class="video-container rounded-md overflow-hidden relative aspect-video bg-black shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] border-2 border-white/50 w-full pl-5"
      >
        <iframe 
          :src="feature.videoUrl" 
          :title="feature.videoTitle" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          class="w-full h-full border-0 block bg-white"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { config } from '../config.js';

const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const cardRef = ref(null);
const featureNumber = computed(() => String(props.index + 1).padStart(2, '0'));


onMounted(() => {
  // Setup intersection observer for animations
  if (cardRef.value) {
    cardRef.value.style.opacity = '0';
    cardRef.value.style.transform = 'translateY(40px) scale(0.95)';
    cardRef.value.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    observer.observe(cardRef.value);
  }
});
</script>

<style scoped>
.feature-card.visible {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
}

.feature-list-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75rem;
  width: 18px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300C9B7' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
}

/* Hover glow effect - only on right and bottom edges */
.feature-card:hover {
  box-shadow: 
    0 4px 20px -2px rgba(0, 0, 0, 0.08),
    20px 20px 60px -12px rgba(0, 143, 189, 0.4),
    20px 20px 50px -10px rgba(0, 201, 183, 0.3),
    0 25px 50px -15px rgba(0, 143, 189, 0.3) !important;
}

@media (max-width: 768px) {
  .feature-card-content {
    grid-template-columns: 1fr !important;
    gap: 1rem;
  }
  .video-container {
    grid-column: 1 !important;
    grid-row: auto !important;
    transform: none !important;
    margin-top: 1rem;
  }
  .feature-list-item {
    padding-left: 1.5rem;
  }
}
</style>

