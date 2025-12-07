<template>
  <div 
    class="testimonial-card bg-white/90 backdrop-blur-xl border border-card-border rounded-lg p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] transition-all duration-500 relative group hover:-translate-y-2 hover:shadow-lg hover:border-primary/50 flex flex-col"
    ref="cardRef"
  >
    <div class="absolute top-3 left-4 text-4xl font-display text-primary opacity-15 leading-none">"</div>
    <p class="testimonial-text text-text-secondary text-sm italic mb-4 leading-[1.6] relative z-10 flex-grow">
      {{ testimonial.text }}
    </p>
    <div class="testimonial-author-section flex items-center gap-3 mt-auto pt-2">
      <div v-if="testimonial.avatar" class="testimonial-avatar flex-shrink-0">
        <img 
          :src="testimonial.avatar" 
          :alt="testimonial.author"
          class="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
        />
      </div>
      <p class="testimonial-author font-semibold text-sm text-text-primary font-display">
        {{ testimonial.author }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
});

const cardRef = ref(null);

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
.testimonial-card.visible {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
}
</style>


