<template>
  <section class="pricing bg-bg-secondary py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative" id="pricing">
    <div class="container max-w-[1400px] mx-auto">
      <h2 class="section-title text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 md:mb-8 text-text-primary leading-[1.2] tracking-[-0.02em] relative inline-block w-full">
        {{ config.pricing.title }}<br>{{ config.pricing.titleLine2 }}
        <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-accent rounded-sm opacity-60"></span>
      </h2>
      <div class="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 mt-10 md:mt-16 max-w-[850px] mx-auto relative">
        <PricingCard 
          v-for="plan in config.pricing.plans" 
          :key="plan.name"
          :plan="plan"
        />
      </div>
      <p class="pricing-note text-xs text-text-muted mt-6 md:mt-8 mb-0 text-center italic leading-[1.4] px-4">
        {{ config.pricing.globalNote }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config.js';
import PricingCard from './PricingCard.vue';
</script>


