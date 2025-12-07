<template>
  <div 
    class="testimonial-card bg-card-bg border-[1.5px] border-card-border rounded-3xl p-16 shadow-sm transition-all duration-500 relative group hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-glow hover:border-primary"
    ref="cardRef"
  >
    <div class="absolute top-4 left-6 text-6xl font-display text-primary opacity-15 leading-none">"</div>
    <p class="testimonial-text text-text-secondary italic mb-8 leading-[1.8] relative z-10">
      {{ testimonial.text }}
    </p>
    <p class="testimonial-author font-semibold text-text-primary font-display">
      — {{ testimonial.author }}
    </p>
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


