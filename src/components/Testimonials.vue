<template>
  <section class="testimonials bg-bg-secondary py-24 px-8 relative" id="testimonials">
    <div class="container max-w-[1400px] mx-auto">
      <h2 class="section-title text-center font-display text-[clamp(2.25rem,5.5vw,4rem)] font-bold mb-8 text-text-primary leading-[1.2] tracking-[-0.02em] relative inline-block w-full">
        {{ config.testimonials.title }}
        <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-accent rounded-sm opacity-60"></span>
      </h2>
      <p class="section-subtitle text-center text-[clamp(1rem,2vw,1.2rem)] text-text-secondary max-w-[700px] mx-auto mb-16 leading-[1.7]">
        {{ config.testimonials.subtitle }}
      </p>
      <div class="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
        <TestimonialCard 
          v-for="testimonial in config.testimonials.items" 
          :key="testimonial.author"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config.js';
import TestimonialCard from './TestimonialCard.vue';
</script>


