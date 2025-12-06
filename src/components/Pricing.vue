<template>
  <section class="pricing bg-bg-secondary py-24 px-8 relative" id="pricing">
    <div class="container max-w-[1400px] mx-auto">
      <h2 class="section-title text-center font-display text-[clamp(2.25rem,5.5vw,4rem)] font-bold mb-8 text-text-primary leading-[1.2] tracking-[-0.02em] relative inline-block w-full">
        {{ config.pricing.title }}<br>{{ config.pricing.titleLine2 }}
        <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-accent rounded-sm opacity-60"></span>
      </h2>
      <div class="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 max-w-[1200px] mx-auto">
        <PricingCard 
          v-for="plan in config.pricing.plans" 
          :key="plan.name"
          :plan="plan"
        />
      </div>
      <p class="pricing-note text-xs text-text-muted mt-8 mb-0 text-center italic leading-[1.4]">
        {{ config.pricing.globalNote }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config.js';
import PricingCard from './PricingCard.vue';
</script>

