<template>
  <section class="contact bg-bg-primary py-32 px-8 relative" id="contact">
    <div class="container max-w-[1400px] mx-auto">
      <h2 class="section-title text-center font-display text-[clamp(2.25rem,5.5vw,4rem)] font-bold mb-8 text-text-primary leading-[1.2] tracking-[-0.02em] relative inline-block w-full">
        {{ config.contact.title }}
        <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-accent rounded-sm opacity-60"></span>
      </h2>
      <div class="contact-container max-w-[800px] mx-auto">
        <form 
          class="contact-form bg-card-bg border-2 border-card-border rounded-3xl p-24 shadow-md relative overflow-hidden group" 
          @submit.prevent="handleSubmit"
        >
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-accent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
          <div class="form-group mb-8">
            <label for="name" class="block mb-2 text-text-primary font-medium text-sm">
              {{ config.contact.form.name.label }}
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              :placeholder="config.contact.form.name.placeholder"
              required
              v-model="formData.name"
              class="w-full px-5 py-4 border-2 border-card-border rounded-lg font-body text-base text-text-primary bg-bg-primary transition-all duration-300 relative focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(0,201,183,0.12)] focus:-translate-y-0.5 focus:bg-white hover:border-[rgba(0,201,183,0.3)]"
            >
          </div>
          <div class="form-group mb-8">
            <label for="mobile" class="block mb-2 text-text-primary font-medium text-sm">
              {{ config.contact.form.mobile.label }}
            </label>
            <input 
              type="tel" 
              id="mobile" 
              name="mobile" 
              :placeholder="config.contact.form.mobile.placeholder"
              required
              v-model="formData.mobile"
              class="w-full px-5 py-4 border-2 border-card-border rounded-lg font-body text-base text-text-primary bg-bg-primary transition-all duration-300 relative focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(0,201,183,0.12)] focus:-translate-y-0.5 focus:bg-white hover:border-[rgba(0,201,183,0.3)]"
            >
          </div>
          <div class="form-group mb-8">
            <label for="email" class="block mb-2 text-text-primary font-medium text-sm">
              {{ config.contact.form.email.label }}
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              :placeholder="config.contact.form.email.placeholder"
              required
              v-model="formData.email"
              class="w-full px-5 py-4 border-2 border-card-border rounded-lg font-body text-base text-text-primary bg-bg-primary transition-all duration-300 relative focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(0,201,183,0.12)] focus:-translate-y-0.5 focus:bg-white hover:border-[rgba(0,201,183,0.3)]"
            >
          </div>
          <button 
            type="submit" 
            class="form-submit w-full py-4 bg-gradient-accent text-white border-0 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-glow"
          >
            {{ config.contact.form.submitText }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { config } from '../config.js';

const formData = ref({
  name: '',
  mobile: '',
  email: '',
});

const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
  alert('Thank you for contacting us! We will get back to you soon.');
  formData.value = {
    name: '',
    mobile: '',
    email: '',
  };
};
</script>

