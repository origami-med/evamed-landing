<template>
  <div 
    class="addon-card bg-card-bg border-[1.5px] border-card-border rounded-3xl p-16 transition-all duration-500 shadow-sm relative overflow-hidden text-center group hover:-translate-y-3 hover:scale-[1.02] hover:border-primary hover:shadow-xl hover:shadow-glow"
    ref="cardRef"
  >
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-accent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
    <h3 class="font-display text-[1.75rem] font-bold mb-4 text-text-primary">
      {{ addon.title }}
    </h3>
    <p class="text-text-secondary mb-8 leading-[1.7]">
      {{ addon.description }}
    </p>
    <p class="pricing-note text-xs text-text-muted mb-2 italic">
      {{ addon.period }}
    </p>
    <div class="addon-price text-2xl font-extrabold text-primary font-display">
      <span v-if="addon.strikethrough" class="pricing-strikethrough line-through text-text-muted mr-1 text-sm font-medium opacity-80">
        {{ addon.strikethrough }}
      </span>
      {{ addon.price }}<span class="text-base font-medium">{{ addon.pricePeriod }}</span>
    </div>
    <p class="pricing-note text-xs text-text-muted mt-4 italic">
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
</style>


