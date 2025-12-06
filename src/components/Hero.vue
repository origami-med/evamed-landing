<template>
  <section class="hero min-h-screen flex items-center justify-center pt-[calc(80px+6rem)] px-8 pb-24 relative overflow-hidden bg-gradient-hero">
    <div class="hero-bg-pattern absolute top-0 left-0 w-full h-full opacity-30"></div>
    <div class="absolute -top-[40%] -right-[15%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,201,183,0.12)_0%,transparent_65%)] rounded-full animate-float blur-[40px]"></div>
    <div class="absolute -bottom-[25%] -left-[8%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,101,195,0.1)_0%,transparent_65%)] rounded-full animate-float blur-[40px]" style="animation-direction: reverse; animation-duration: 30s;"></div>
    <div class="hero-content max-w-[1200px] text-center z-10 relative">
      <h1 class="font-display text-[clamp(3rem,8vw,6.5rem)] font-bold mb-8 text-text-primary leading-[1.15] tracking-[-0.03em] animate-fadeInUp drop-shadow-[0_2px_20px_rgba(0,201,183,0.1)]">
        {{ config.hero.title }}<br>
        <span class="highlight block relative animate-fadeInUp" style="animation-delay: 0.1s; animation-fill-mode: both;">
          {{ config.hero.titleHighlight }}
        </span>
      </h1>
      <p class="text-[clamp(1.1rem,2vw,1.4rem)] text-text-secondary max-w-[900px] mx-auto mb-16 leading-[1.8] font-normal animate-fadeInUp" style="animation-delay: 0.2s; animation-fill-mode: both;">
        {{ config.hero.subtitle }}
      </p>
      <div class="hero-buttons flex gap-8 justify-center flex-wrap animate-fadeInUp" style="animation-delay: 0.4s; animation-fill-mode: both;">
        <a 
          v-for="btn in config.hero.buttons" 
          :key="btn.href"
          :href="btn.href" 
          :class="[
            'cta-button inline-block px-11 py-[1.125rem] no-underline font-semibold text-lg font-body rounded-full transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-glow-strong',
            btn.isPrimary 
              ? 'bg-gradient-accent text-white shadow-md shadow-glow' 
              : 'bg-white text-primary shadow-md border-2 border-[rgba(0,201,183,0.2)]'
          ]"
        >
          {{ btn.text }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { config } from '../config.js';
</script>

