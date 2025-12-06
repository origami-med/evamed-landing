<template>
  <div 
    class="pricing-card bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-8 transition-all duration-500 relative shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden group"
    :class="[
      plan.isFeatured 
        ? 'featured' 
        : ''
    ]"
    ref="cardRef"
  >
    <div 
      v-if="plan.badge"
      class="popular-badge absolute top-0 right-0 bg-gradient-accent text-white text-xs font-bold px-6 py-2 shadow-[-2px_2px_10px_rgba(0,0,0,0.1)] uppercase tracking-wider"
    >
      {{ plan.badge }}
    </div>
    <div class="pricing-header text-center mb-4 pb-4 border-b border-card-border">
      <h3 class="font-display text-2xl font-extrabold mb-1 text-text-primary">
        {{ plan.name }}
      </h3>
      <div class="pricing-price text-[2.5rem] font-extrabold text-primary leading-none my-1 font-body flex items-baseline justify-center text-center gap-1">
        <template v-if="plan.price === 'Free'">
          Free
        </template>
        <template v-else>
          {{ plan.price }}<span v-if="plan.pricePeriod" class="text-sm text-text-muted font-medium">{{ plan.pricePeriod }}</span>
        </template>
      </div>
      <div v-if="plan.period" class="pricing-period text-sm text-text-muted font-medium">
        {{ plan.period }}
      </div>
    </div>
    <div v-if="plan.pricingDetails" class="pricing-details my-4 bg-[rgba(0,201,183,0.08)] border border-[rgba(0,201,183,0.15)] rounded-lg p-4 grid grid-cols-[1fr_auto] gap-1 items-center">
      <template v-for="(detail, idx) in plan.pricingDetails" :key="idx">
        <div class="pricing-label text-text-secondary font-semibold text-sm whitespace-nowrap">
          {{ detail.label }}
        </div>
        <div class="pricing-value text-text-primary font-extrabold text-base text-right flex flex-row gap-2 items-baseline justify-end whitespace-nowrap">
          <span v-if="detail.strikethrough" class="pricing-strikethrough line-through text-text-muted mr-1 text-sm font-medium opacity-80">
            {{ detail.strikethrough }}
          </span>
          {{ detail.value }}
        </div>
        <div v-if="idx < plan.pricingDetails.length - 1" class="pricing-divider col-span-2 h-px bg-[rgba(0,201,183,0.15)] my-1"></div>
      </template>
    </div>
    <ul class="pricing-features list-none my-4 flex-grow">
      <li 
        v-for="feature in plan.features" 
        :key="feature"
        class="pricing-feature-item py-1 flex items-start gap-3 text-text-secondary text-sm leading-[1.4] mb-0.5"
      >
        {{ feature }}
      </li>
    </ul>
    <div v-if="plan.note" class="pricing-note text-xs text-text-muted mt-2 mb-4 text-center italic leading-[1.4]">
      {{ plan.note }}
    </div>
    <div v-if="plan.taxNote" class="pricing-tax-note text-[0.7rem] text-text-muted -mt-1 mb-4 text-center opacity-80">
      {{ plan.taxNote }}
    </div>
    <a 
      :href="plan.ctaHref" 
      :class="[
        'cta-button w-full text-center mt-auto inline-block px-11 py-[1.125rem] no-underline font-semibold text-lg font-body rounded-full transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-glow-strong',
        plan.isFeatured 
          ? 'bg-gradient-accent text-white shadow-md shadow-glow' 
          : 'bg-white text-primary shadow-md border-2 border-[rgba(0,201,183,0.2)]'
      ]"
    >
      {{ plan.ctaText }}
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  plan: {
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
.pricing-card.visible {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
}

.pricing-card.featured {
  background: rgba(255, 255, 255, 0.9) !important;
  border: 2px solid var(--color-primary) !important;
  transform: scale(1.05);
  box-shadow: 
    0 20px 50px -10px rgba(0, 0, 0, 0.15),
    0 0 40px rgba(0, 201, 183, 0.2) !important;
  z-index: 2;
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.pricing-card:not(.featured):hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 
    0 20px 40px -10px rgba(0, 0, 0, 0.1),
    0 0 30px rgba(0, 201, 183, 0.15);
  border-color: rgba(0, 201, 183, 0.3);
}

.pricing-feature-item::before {
  content: '';
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 0.2em;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300C9B7' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
}

.popular-badge {
  border-bottom-left-radius: var(--radius-md);
}
</style>

