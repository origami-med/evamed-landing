<template>
  <section class="addons bg-bg-primary py-16 md:py-24 px-4 sm:px-6 lg:px-8" id="addons">
    <div class="container mx-auto max-w-[1400px]">
      <h2 class="section-title relative mb-10 w-full text-center font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.35] tracking-[-0.02em] text-text-primary md:mb-12">
        {{ config.addons.title }}
        <span class="gradient-text">{{ config.addons.titleHighlight }}</span>
        {{ config.addons.titleSuffix }}
      </h2>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
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
