<template>
  <div 
    class="addon-card bg-white/90 backdrop-blur-xl border border-card-border rounded-lg p-5 transition-all duration-500 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] relative overflow-hidden text-center group"
    ref="cardRef"
  >
    <h3 class="font-display text-lg font-extrabold mb-3 text-text-primary">
      {{ addon.title }}
    </h3>
    <p class="text-text-secondary text-sm mb-4 leading-[1.5]">
      {{ addon.description }}
    </p>
    <p class="pricing-note text-xs text-text-muted mb-2 italic">
      {{ addon.period }}
    </p>
    <div class="addon-price text-[2.25rem] font-extrabold text-primary font-body mb-2">
      <span v-if="addon.strikethrough" class="pricing-strikethrough line-through text-text-muted mr-1 text-sm font-medium opacity-70">
        {{ addon.strikethrough }}
      </span>
      {{ addon.price }}<span class="text-sm font-semibold">{{ addon.pricePeriod }}</span>
    </div>
    <p class="pricing-note text-[0.65rem] text-text-muted mt-2 italic opacity-75">
      {{ addon.taxNote }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  addon: {
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
.addon-card.visible {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
}

/* Hover glow effect - only on right and bottom edges - matching FeatureCard */
.addon-card:hover {
  box-shadow: 
    0 4px 20px -2px rgba(0, 0, 0, 0.08),
    20px 20px 60px -12px rgba(0, 143, 189, 0.4),
    20px 20px 50px -10px rgba(0, 201, 183, 0.3),
    0 25px 50px -15px rgba(0, 143, 189, 0.3) !important;
}
</style>


