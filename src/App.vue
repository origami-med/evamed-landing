<template>
  <div id="app">
    <div class="bg-pattern"></div>
    <Header />
    <main>
      <Hero />
      <Features />
      <Pricing />
      <Addons />
      <Testimonials />
      <ContactForm />
    </main>
    <Footer @open-modal="openModal" />
    <Modal 
      modal-type="privacy" 
      :is-open="modals.privacy" 
      :legal="config.legal.privacyPolicy"
      @close="closeModal('privacy')"
    />
    <Modal 
      modal-type="terms" 
      :is-open="modals.terms" 
      :legal="config.legal.termsAndConditions"
      @close="closeModal('terms')"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { config } from './config.js';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import Pricing from './components/Pricing.vue';
import Addons from './components/Addons.vue';
import Testimonials from './components/Testimonials.vue';
import ContactForm from './components/ContactForm.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';

const modals = ref({
  privacy: false,
  terms: false,
});

const openModal = (modalId) => {
  if (modalId === 'privacy') {
    modals.value.privacy = true;
  } else if (modalId === 'terms') {
    modals.value.terms = true;
  }
};

const closeModal = (modalId) => {
  if (modalId === 'privacy') {
    modals.value.privacy = false;
  } else if (modalId === 'terms') {
    modals.value.terms = false;
  }
};

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modals.value.privacy) {
      closeModal('privacy');
    }
    if (modals.value.terms) {
      closeModal('terms');
    }
  }
});
</script>


