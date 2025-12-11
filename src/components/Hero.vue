<template>
  <section class="hero min-h-screen flex items-center justify-center pt-[calc(80px+6rem)] px-8 pb-24 relative overflow-hidden bg-gradient-hero">
    <!-- Background Video -->
    <video 
      ref="heroVideo"
      class="hero-video"
      autoplay 
      muted 
      loop 
      playsinline
      preload="auto"
      aria-label="Background gradient video"
    >
      <source src="https://video.wixstatic.com/video/f3848c_da20cad6e741454e8f2e240db58d4d40/720p/mp4/file.mp4" type="video/mp4">
    </video>
    
    <!-- Subtle Overlay for Text Readability -->
    <div class="hero-video-overlay absolute inset-0"></div>
    
    <!-- Text Focus Glow - Pulsing Aura -->
    <div class="hero-text-glow absolute inset-0 flex items-center justify-center pointer-events-none z-10"></div>
    
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
          :target="btn.target || undefined"
          :rel="btn.target === '_blank' ? 'noopener noreferrer' : undefined"
          :class="[
            'cta-button inline-block w-[220px] py-[1.125rem] no-underline font-semibold text-lg font-body rounded-full transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg text-center',
            btn.isPrimary 
              ? 'bg-gradient-orange text-white shadow-md orange-glow hover:orange-glow-strong' 
              : 'bg-white text-primary shadow-md border-2 border-[rgba(0,201,183,0.2)] hover:shadow-glow-strong'
          ]"
        >
          {{ btn.text }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { config } from '../config.js';

const heroVideo = ref(null);

onMounted(() => {
  if (heroVideo.value) {
    heroVideo.value.playbackRate = 0.5; // Half speed playback
  }
});
</script>

<style scoped>
/* Background Video */
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: 0;
  opacity: 0.6;
}

.hero-video-overlay {
  background: linear-gradient(
    135deg,
    rgba(224, 247, 250, 0.3) 0%,
    rgba(225, 245, 254, 0.25) 50%,
    rgba(227, 242, 253, 0.3) 100%
  );
  z-index: 1;
  pointer-events: none;
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
  animation: highlightGlow 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes highlightGlow {
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(0, 201, 183, 0.15));
  }
  50% {
    filter: drop-shadow(0 0 10px rgba(0, 201, 183, 0.2));
  }
}


/* Text Focus Glow - Pulsing Aura Around Content */
.hero-text-glow::before {
  content: '';
  position: absolute;
  width: 1000px;
  height: 800px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 201, 183, 0.18) 0%,
    rgba(0, 143, 189, 0.12) 20%,
    rgba(0, 101, 195, 0.08) 40%,
    transparent 60%
  );
  border-radius: 50%;
  animation: textGlowPulse 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  filter: blur(60px);
  will-change: transform;
}

.hero-text-glow::after {
  content: '';
  position: absolute;
  width: 1200px;
  height: 900px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 201, 183, 0.15) 0%,
    rgba(0, 143, 189, 0.1) 30%,
    rgba(0, 101, 195, 0.06) 45%,
    transparent 60%
  );
  border-radius: 50%;
  animation: textGlowPulse 18s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: 3s;
  filter: blur(80px);
  will-change: transform;
}

@keyframes textGlowPulse {
  0%, 100% {
    transform: scale(1) translateY(0);
  }
  50% {
    transform: scale(1.08) translateY(-5px);
  }
}

/* Orange glow effect for Contact Us button */
.orange-glow {
  box-shadow: 0 0 20px rgba(255, 140, 66, 0.3), 0 4px 12px rgba(255, 107, 53, 0.2);
}

.orange-glow-strong {
  box-shadow: 0 0 30px rgba(255, 140, 66, 0.4), 0 6px 20px rgba(255, 107, 53, 0.3);
}
</style>

