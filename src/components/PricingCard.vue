<template>
  <div 
    class="pricing-card bg-white/90 backdrop-blur-xl border rounded-md transition-all duration-500 relative shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden group"
    :class="[
      plan.isFeatured 
        ? 'featured border-2 border-primary shadow-[0_8px_30px_-5px_rgba(0,143,189,0.25)]' 
        : 'border border-card-border'
    ]"
    ref="cardRef"
  >
    <!-- Popular Badge - Top right positioning -->
    <div 
      v-if="plan.badge"
      class="popular-badge absolute top-0 right-0 bg-gradient-accent text-white text-[0.7rem] font-bold px-3 py-1.5 shadow-lg uppercase tracking-wider rounded-bl-2xl z-10"
    >
      {{ plan.badge }}
    </div>
    
    <!-- Slimmer padding: p-4 for narrower cards -->
    <div class="p-4 flex flex-col h-full">
      <!-- Header with better hierarchy -->
      <div class="pricing-header text-center mb-4 pt-7">
        <h3 class="font-display text-lg font-extrabold mb-2.5 text-text-primary">
          {{ plan.name }}
        </h3>
        
        <!-- Price - More prominent -->
        <div class="pricing-price-wrapper mb-2">
          <div class="pricing-price text-[2.5rem] font-extrabold text-primary leading-none font-body flex items-baseline justify-center gap-1.5">
            <template v-if="plan.price === 'Free'">
              <span class="text-2xl">Free</span>
            </template>
            <template v-else>
              <span>{{ plan.price }}</span>
              <span v-if="plan.pricePeriod" class="text-sm text-text-muted font-semibold">{{ plan.pricePeriod }}</span>
            </template>
          </div>
          <div v-if="plan.period" class="pricing-period text-xs text-text-muted font-medium mt-1">
            {{ plan.period }}
          </div>
        </div>
      </div>

      <!-- Pricing Details - Slimmer and more compact -->
      <div v-if="plan.pricingDetails" class="pricing-details mb-4 bg-gradient-to-br from-[rgba(0,201,183,0.06)] to-[rgba(0,143,189,0.04)] border border-[rgba(0,201,183,0.2)] rounded p-3">
        <template v-for="(detail, idx) in plan.pricingDetails" :key="idx">
          <div class="grid grid-cols-[1fr_auto] gap-2 items-center py-1.5">
            <div class="pricing-label text-text-secondary font-semibold text-xs">
              {{ detail.label }}
            </div>
            <div class="pricing-value text-text-primary font-extrabold text-sm text-right flex flex-row gap-1.5 items-baseline justify-end">
              <span v-if="detail.strikethrough" class="pricing-strikethrough line-through text-text-muted text-xs font-medium opacity-70">
                {{ detail.strikethrough }}
              </span>
              <span class="text-primary">{{ detail.value }}</span>
            </div>
          </div>
          <div v-if="idx < plan.pricingDetails.length - 1" class="pricing-divider h-px bg-[rgba(0,201,183,0.2)] my-1.5"></div>
        </template>
      </div>

      <!-- Features - Tighter spacing -->
      <ul class="pricing-features list-none mb-4 flex-grow space-y-1">
        <li 
          v-for="feature in plan.features" 
          :key="feature"
          class="pricing-feature-item flex items-start gap-2 text-text-secondary text-sm leading-[1.5]"
        >
          {{ feature }}
        </li>
      </ul>

      <!-- Notes - More compact -->
      <div v-if="plan.note" class="pricing-note text-[0.7rem] text-text-muted mb-3 text-center leading-[1.4]">
        {{ plan.note }}
      </div>

      <!-- CTA Button - More prominent -->
      <a 
        :href="plan.ctaHref" 
        :class="[
          'cta-button w-full text-center mt-auto inline-block px-5 py-2.5 no-underline font-bold text-sm font-body rounded-lg transition-all duration-300 relative overflow-hidden',
          plan.isFeatured 
            ? 'bg-gradient-accent text-white shadow-md shadow-glow hover:shadow-lg hover:shadow-glow-strong hover:-translate-y-0.5' 
            : 'bg-white text-primary shadow-sm border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5'
        ]"
      >
        {{ plan.ctaText }}
      </a>
    </div>
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

/* Featured card - elevated above others */
.pricing-card.featured {
  background: rgba(255, 255, 255, 0.98) !important;
  transform: scale(1.08) translateY(-12px);
  z-index: 10;
  position: relative;
  box-shadow: 
    0 20px 60px -12px rgba(0, 143, 189, 0.4),
    0 0 50px rgba(0, 201, 183, 0.3),
    0 8px 25px -5px rgba(0, 0, 0, 0.15) !important;
}

/* Non-featured cards - lower z-index */
.pricing-card:not(.featured) {
  z-index: 1;
  position: relative;
}

.pricing-card.featured:hover {
  transform: scale(1.08) translateY(-16px);
  box-shadow: 
    0 25px 70px -10px rgba(0, 143, 189, 0.5),
    0 0 60px rgba(0, 201, 183, 0.4),
    0 12px 35px -8px rgba(0, 0, 0, 0.2) !important;
}

/* Non-featured cards - subtle hover */
.pricing-card:not(.featured):hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 
    0 8px 30px -5px rgba(0, 0, 0, 0.12),
    0 0 20px rgba(0, 201, 183, 0.1);
  border-color: rgba(0, 201, 183, 0.4);
  z-index: 2;
}

/* Feature checkmark - smaller and cleaner */
.pricing-feature-item::before {
  content: '';
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 0.15em;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300C9B7' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* Popular badge styling - top right corner */
.popular-badge {
  box-shadow: -2px 2px 10px rgba(0, 201, 183, 0.3);
  letter-spacing: 0.05em;
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

/* Constrain card width for slimmer appearance */
.pricing-card {
  max-width: 100%;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .pricing-card {
    padding: 1rem !important;
  }
  
  .pricing-card.featured {
    transform: scale(1) translateY(0);
    box-shadow: 
      0 10px 30px -5px rgba(0, 143, 189, 0.25),
      0 0 30px rgba(0, 201, 183, 0.2) !important;
  }
  
  .pricing-card.featured:hover {
    transform: translateY(-4px);
  }
  
  .pricing-card:not(.featured):hover {
    transform: translateY(-4px);
  }
  
  .pricing-price {
    font-size: 2rem !important;
  }
  
  .popular-badge {
    font-size: 0.65rem !important;
    padding: 0.4rem 0.8rem !important;
  }
}

@media (max-width: 480px) {
  .pricing-card {
    padding: 0.875rem !important;
  }
  
  .pricing-price {
    font-size: 1.75rem !important;
  }
}
</style>

