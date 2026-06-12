<template>
  <section class="addons relative overflow-hidden bg-bg-secondary py-16 md:py-24 px-4 sm:px-6 lg:px-8" id="addons">
    <!-- Subtle background decoration -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[rgba(0,201,183,0.06)] blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[rgba(0,101,195,0.05)] blur-3xl"></div>
    </div>

    <div class="container relative mx-auto max-w-[1100px]">
      <div class="addons-header mb-12 w-full text-center md:mb-16">
        <h2 class="section-title relative inline-block w-full font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.35] tracking-[-0.02em] text-text-primary">
          <span class="block">
            {{ config.addons.title }}
            <span class="gradient-text">{{ config.addons.titleHighlight }}</span>
          </span>
          <span class="mt-2 block">{{ config.addons.titleSuffix }}</span>
        </h2>

        <p
          v-if="config.addons.subtitle"
          class="section-subtitle mt-8 w-full text-[clamp(1rem,2vw,1.2rem)] leading-[1.7] text-text-secondary md:mt-10"
        >
          {{ config.addons.subtitle }}
        </p>
      </div>

      <div class="addons-grid grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        <AddonCard
          v-for="(addon, index) in config.addons.items"
          :key="addon.title"
          :addon="addon"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config.js';
import AddonCard from './AddonCard.vue';
</script>
