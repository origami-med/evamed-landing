<template>
  <section class="features bg-bg-primary py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative" id="features">
    <div class="container max-w-[1400px] mx-auto">
      <h2 class="section-title text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 md:mb-8 text-text-primary leading-[1.2] tracking-[-0.02em] relative inline-block w-full">
        {{ config.features.title }}
        <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-accent rounded-sm opacity-60"></span>
      </h2>
      <p class="section-subtitle text-center text-[clamp(1rem,2vw,1.2rem)] text-text-secondary max-w-[700px] mx-auto mb-8 md:mb-12 leading-[1.7]">
        {{ config.features.subtitle }}
      </p>
      <div class="features-grid flex flex-col gap-10 md:gap-12 mt-10 md:mt-12 max-w-[1000px] mx-auto" style="counter-reset: feature-counter;">
        <FeatureCard 
          v-for="(feature, index) in config.features.items" 
          :key="index"
          :feature="feature"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config.js';
import FeatureCard from './FeatureCard.vue';
</script>


