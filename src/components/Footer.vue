<template>
  <footer class="bg-bg-secondary border-t border-card-border py-12 px-8">
    <div class="footer-content max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <div class="footer-brand flex flex-col gap-4">
        <a href="#" class="footer-logo flex items-center gap-4 no-underline text-text-primary font-display text-2xl font-bold mb-4">
          <div class="logo-container w-22 h-22 rounded-md bg-logo-gradient flex items-center justify-center">
            <img :src="config.site.logoUrl" :alt="`${config.site.brandName} Logo`" class="w-20 h-20 object-contain">
          </div>
        </a>
        <p class="text-text-secondary text-sm">{{ config.footer.description }}</p>
      </div>
      <div>
        <h3 class="font-display mb-4 text-text-primary">Quick Links</h3>
        <ul class="footer-links list-none flex flex-col gap-2">
          <li v-for="link in config.navigation.footer.quickLinks" :key="link.href">
            <a :href="link.href" class="text-text-secondary no-underline transition-colors duration-300 hover:text-primary">
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-display mb-4 text-text-primary">Legal</h3>
        <ul class="footer-links list-none flex flex-col gap-2">
          <li v-for="link in config.navigation.footer.legal" :key="link.text">
            <a 
              :href="link.href" 
              class="legal-link text-text-secondary no-underline transition-colors duration-300 hover:text-primary"
              :data-modal="link.modalId"
              @click.prevent="openModal(link.modalId)"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col">
        <h3 class="font-display mb-4 text-text-primary">Connect</h3>
        <div class="footer-social flex gap-4 flex-wrap">
          <a 
            v-for="social in config.footer.social" 
            :key="social.name"
            :href="social.href" 
            :target="social.target || undefined"
            :rel="social.target === '_blank' ? 'noopener noreferrer' : undefined"
            class="social-icon w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-text-secondary no-underline transition-all duration-300 border-0 hover:-translate-y-1 hover:shadow-md overflow-hidden p-2"
            :aria-label="social.ariaLabel"
          >
            <img 
              v-if="social.imageUrl" 
              :src="social.imageUrl" 
              :alt="social.name"
              class="w-full h-full object-contain"
            />
            <span v-else>{{ social.icon }}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center pt-8 border-t border-card-border text-text-muted text-sm">
      <p>{{ config.footer.copyright }}</p>
    </div>
  </footer>
</template>

<script setup>
import { config } from '../config.js';

const emit = defineEmits(['open-modal']);

const openModal = (modalId) => {
  emit('open-modal', modalId);
};
</script>

