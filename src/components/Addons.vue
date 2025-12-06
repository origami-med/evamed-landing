<template>
  <section class="addons bg-bg-primary py-24 px-8 relative" id="addons">
    <div class="container max-w-[1400px] mx-auto">
      <h2 class="section-title text-center font-display text-[clamp(2.25rem,5.5vw,4rem)] font-bold mb-8 text-text-primary leading-[1.2] tracking-[-0.02em] relative inline-block w-full">
        {{ config.addons.title }} <span class="gradient-text">{{ config.addons.titleHighlight }}</span> {{ config.addons.titleSuffix }}
        <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-accent rounded-sm opacity-60"></span>
      </h2>
      <div class="addons-grid grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 max-w-[1000px] mx-auto">
        <AddonCard 
          v-for="addon in config.addons.items" 
          :key="addon.title"
          :addon="addon"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config.js';
import AddonCard from './AddonCard.vue';
</script>

