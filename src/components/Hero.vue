<template>
  <section class="hero min-h-screen flex items-center justify-center pt-[calc(80px+6rem)] px-8 pb-24 relative overflow-hidden bg-gradient-hero">
    <!-- Animated Background Pattern -->
    <div class="hero-bg-pattern absolute top-0 left-0 w-full h-full opacity-20"></div>
    
    <!-- Subtle Animated Mesh Gradient -->
    <div class="hero-mesh absolute inset-0 opacity-20"></div>
    
    <!-- Floating Gradient Orbs - Subtle -->
    <div class="hero-orb hero-orb-1 absolute -top-[40%] -right-[15%] w-[700px] h-[700px] rounded-full blur-[60px]"></div>
    <div class="hero-orb hero-orb-2 absolute -bottom-[25%] -left-[8%] w-[600px] h-[600px] rounded-full blur-[60px]"></div>
    <div class="hero-orb hero-orb-3 absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full blur-[70px]"></div>
    
    <!-- Subtle Floating Particles -->
    <div class="hero-particle hero-particle-1"></div>
    <div class="hero-particle hero-particle-2"></div>
    <div class="hero-particle hero-particle-3"></div>
    <div class="hero-particle hero-particle-4"></div>
    
    <div class="hero-content max-w-[1200px] text-center z-20 relative">
      <h1 class="hero-title font-display text-[clamp(3rem,8vw,6.5rem)] font-bold mb-8 text-text-primary leading-[1.15] tracking-[-0.03em] drop-shadow-[0_2px_20px_rgba(0,201,183,0.1)]">
        {{ config.hero.title }}<br>
        <span class="highlight block relative">
          {{ config.hero.titleHighlight }}
        </span>
      </h1>
      <p class="hero-subtitle text-[clamp(1.1rem,2vw,1.4rem)] text-text-secondary max-w-[900px] mx-auto mb-16 leading-[1.8] font-normal">
        {{ config.hero.subtitle }}
      </p>
      <div class="hero-buttons flex gap-8 justify-center flex-wrap">
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

<style scoped>
/* Subtle Animated Mesh Gradient */
.hero-mesh {
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 201, 183, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 101, 195, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 143, 189, 0.05) 0%, transparent 60%);
  animation: meshMove 30s ease-in-out infinite;
  filter: blur(80px);
}

@keyframes meshMove {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.2;
  }
  33% {
    transform: translate(30px, -30px) scale(1.05);
    opacity: 0.25;
  }
  66% {
    transform: translate(-20px, 20px) scale(0.98);
    opacity: 0.22;
  }
}

/* Hero Orb Animations - Subtle */
.hero-orb-1 {
  background: radial-gradient(circle, rgba(0, 201, 183, 0.12) 0%, rgba(0, 201, 183, 0.05) 40%, transparent 70%);
  animation: floatOrb1 35s ease-in-out infinite;
  opacity: 0.6;
}

.hero-orb-2 {
  background: radial-gradient(circle, rgba(0, 101, 195, 0.1) 0%, rgba(0, 101, 195, 0.04) 40%, transparent 70%);
  animation: floatOrb2 40s ease-in-out infinite;
  opacity: 0.5;
}

.hero-orb-3 {
  background: radial-gradient(circle, rgba(0, 143, 189, 0.08) 0%, rgba(0, 143, 189, 0.03) 40%, transparent 70%);
  animation: floatOrb3 45s ease-in-out infinite;
  opacity: 0.4;
}

@keyframes floatOrb1 {
  0%, 100% { 
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 0.6;
  }
  33% { 
    transform: translate(25px, -25px) scale(1.08) rotate(3deg);
    opacity: 0.7;
  }
  66% { 
    transform: translate(-15px, 15px) scale(0.96) rotate(-3deg);
    opacity: 0.55;
  }
}

@keyframes floatOrb2 {
  0%, 100% { 
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 0.5;
  }
  33% { 
    transform: translate(-20px, 20px) scale(1.06) rotate(-2deg);
    opacity: 0.6;
  }
  66% { 
    transform: translate(18px, -18px) scale(0.97) rotate(2deg);
    opacity: 0.45;
  }
}

@keyframes floatOrb3 {
  0%, 100% { 
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 0.4;
  }
  50% { 
    transform: translate(15px, -15px) scale(1.1) rotate(2deg);
    opacity: 0.5;
  }
}

/* Floating Particles - Subtle */
.hero-particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(25px);
}

.hero-particle-1 {
  width: 120px;
  height: 120px;
  top: 15%;
  left: 20%;
  background: radial-gradient(circle, rgba(0, 201, 183, 0.1) 0%, rgba(0, 201, 183, 0.04) 50%, transparent 70%);
  animation: floatParticle1 28s ease-in-out infinite;
}

.hero-particle-2 {
  width: 90px;
  height: 90px;
  top: 60%;
  right: 25%;
  background: radial-gradient(circle, rgba(0, 101, 195, 0.08) 0%, rgba(0, 101, 195, 0.03) 50%, transparent 70%);
  animation: floatParticle2 32s ease-in-out infinite;
}

.hero-particle-3 {
  width: 100px;
  height: 100px;
  bottom: 30%;
  right: 15%;
  background: radial-gradient(circle, rgba(0, 143, 189, 0.09) 0%, rgba(0, 143, 189, 0.04) 50%, transparent 70%);
  animation: floatParticle3 30s ease-in-out infinite;
}

.hero-particle-4 {
  width: 80px;
  height: 80px;
  top: 40%;
  left: 15%;
  background: radial-gradient(circle, rgba(0, 201, 183, 0.08) 0%, rgba(0, 201, 183, 0.03) 50%, transparent 70%);
  animation: floatParticle4 26s ease-in-out infinite;
}

@keyframes floatParticle1 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  50% { transform: translate(25px, -25px) scale(1.15); opacity: 0.45; }
}

@keyframes floatParticle2 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
  50% { transform: translate(-20px, 20px) scale(1.1); opacity: 0.4; }
}

@keyframes floatParticle3 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  50% { transform: translate(18px, 18px) scale(1.12); opacity: 0.45; }
}

@keyframes floatParticle4 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.28; }
  50% { transform: translate(-15px, -15px) scale(1.08); opacity: 0.4; }
}

/* Very Subtle Text Animations - Minimal */
.hero-title {
  animation: gentlePulse 10s ease-in-out infinite;
}

.hero-subtitle {
  animation: subtleFloat 12s ease-in-out infinite;
}

.hero-buttons {
  animation: subtleFloat 14s ease-in-out infinite;
}

@keyframes gentlePulse {
  0%, 100% { 
    transform: scale(1) translateY(0);
    filter: drop-shadow(0 2px 20px rgba(0, 201, 183, 0.1));
  }
  50% { 
    transform: scale(1.001) translateY(-1px);
    filter: drop-shadow(0 2px 22px rgba(0, 201, 183, 0.12));
  }
}

@keyframes subtleFloat {
  0%, 100% { 
    transform: translateY(0);
  }
  50% { 
    transform: translateY(-1px);
  }
}

/* Subtle highlight animation */
.highlight {
  animation: highlightGlow 8s ease-in-out infinite;
}

@keyframes highlightGlow {
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(0, 201, 183, 0.15));
  }
  50% {
    filter: drop-shadow(0 0 12px rgba(0, 201, 183, 0.25));
  }
}
</style>

