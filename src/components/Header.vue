<template>
  <header 
    id="header" 
    class="fixed top-0 left-0 right-0 z-[1000] py-5 px-8 bg-[rgba(250,250,250,0.85)] backdrop-blur-2xl border-b border-[rgba(229,229,229,0.6)] transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
    :class="{ 'scrolled': isScrolled }"
  >
    <nav class="max-w-[1400px] mx-auto flex justify-between items-center">
      <a href="#" class="flex items-center gap-2 no-underline text-text-primary font-display text-2xl font-bold transition-all duration-300 hover:-translate-y-0.5">
        <div class="relative w-10 h-10 rounded-sm bg-logo-gradient flex items-center justify-center shadow-md shadow-glow transition-all duration-300 overflow-hidden group hover:rotate-3 hover:scale-110 hover:shadow-lg hover:shadow-glow-strong">
          <div class="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/20 to-transparent rotate-45 animate-shine"></div>
          <img :src="config.site.logoUrl" :alt="`${config.site.brandName} Logo`" class="h-9 w-9 object-contain relative z-10">
        </div>
        <span class="logo-text font-bold">{{ config.site.brandName }}</span>
      </a>
      <ul class="hidden md:flex gap-8 list-none items-center">
        <li v-for="item in config.navigation.header" :key="item.href">
          <a 
            :href="item.href" 
            :class="[
              'nav-link',
              item.isCta 
                ? 'px-6 py-2.5 bg-gradient-orange text-white rounded-full font-semibold shadow-md orange-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:orange-glow-strong' 
                : 'text-text-secondary no-underline font-medium text-[0.95rem] transition-all duration-300 relative py-2 hover:text-primary after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-accent after:transition-all after:duration-300 hover:after:w-full'
            ]"
            @click.prevent="handleNavClick($event, item.href)"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
      <button 
        class="md:hidden bg-transparent border-0 text-text-primary text-2xl cursor-pointer p-2 transition-transform duration-300"
        :class="{ 'rotate-90': mobileMenuOpen }"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span v-if="!mobileMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </nav>
    <div 
      class="md:hidden fixed top-20 left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-card-border/80 p-8 shadow-lg transition-all duration-300"
      :class="{ 'translate-y-0 opacity-100': mobileMenuOpen, '-translate-y-full opacity-0': !mobileMenuOpen }"
      v-show="mobileMenuOpen"
    >
      <ul class="list-none flex flex-col gap-4">
        <li v-for="item in config.navigation.header" :key="item.href">
          <a 
            :href="item.href" 
            :class="[
              'mobile-nav-link',
              item.isCta 
                ? 'block px-6 py-2.5 bg-gradient-orange text-white rounded-full font-semibold shadow-md orange-glow text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:orange-glow-strong' 
                : 'block text-text-secondary no-underline font-medium text-lg p-4 rounded-lg transition-all duration-300 hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10'
            ]"
            @click.prevent="handleNavClick($event, item.href)"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { config } from '../config.js';

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const handleNavClick = (e, href) => {
  if (href === '#' || href === '#!') return;
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const header = document.getElementById('header');
    const headerHeight = header?.offsetHeight || 80;
    const targetPosition = target.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // Close mobile menu
    mobileMenuOpen.value = false;
  }
};

const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 201, 183, 0.05);
  background: rgba(250, 250, 250, 0.95);
  padding: calc(0.5rem + 2px) 2rem;
}

/* Orange glow effect for Contact Us button - matching Hero */
.orange-glow {
  box-shadow: 0 0 20px rgba(255, 140, 66, 0.3), 0 4px 12px rgba(255, 107, 53, 0.2);
}

.orange-glow-strong {
  box-shadow: 0 0 30px rgba(255, 140, 66, 0.4), 0 6px 20px rgba(255, 107, 53, 0.3);
}
</style>

