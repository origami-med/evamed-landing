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
              v-model="formData.name"
              @blur="validateField('name')"
              @input="clearError('name')"
              :class="[
                'w-full px-5 py-4 border-2 rounded-lg font-body text-base text-text-primary bg-bg-primary transition-all duration-300 relative focus:outline-none focus:shadow-[0_0_0_4px_rgba(0,201,183,0.12)] focus:-translate-y-0.5 focus:bg-white hover:border-[rgba(0,201,183,0.3)]',
                errors.name ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-primary'
              ]"
            >
            <p v-if="errors.name" class="mt-2 text-sm text-red-500">{{ errors.name }}</p>
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
              v-model="formData.mobile"
              @blur="validateField('mobile')"
              @input="handleMobileInput"
              maxlength="10"
              :class="[
                'w-full px-5 py-4 border-2 rounded-lg font-body text-base text-text-primary bg-bg-primary transition-all duration-300 relative focus:outline-none focus:shadow-[0_0_0_4px_rgba(0,201,183,0.12)] focus:-translate-y-0.5 focus:bg-white hover:border-[rgba(0,201,183,0.3)]',
                errors.mobile ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-primary'
              ]"
            >
            <p v-if="errors.mobile" class="mt-2 text-sm text-red-500">{{ errors.mobile }}</p>
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
              v-model="formData.email"
              @blur="validateField('email')"
              @input="clearError('email')"
              :class="[
                'w-full px-5 py-4 border-2 rounded-lg font-body text-base text-text-primary bg-bg-primary transition-all duration-300 relative focus:outline-none focus:shadow-[0_0_0_4px_rgba(0,201,183,0.12)] focus:-translate-y-0.5 focus:bg-white hover:border-[rgba(0,201,183,0.3)]',
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-primary'
              ]"
            >
            <p v-if="errors.email" class="mt-2 text-sm text-red-500">{{ errors.email }}</p>
          </div>
          <button 
            type="submit" 
            :disabled="isSubmitting"
            :class="[
              'form-submit w-full py-4 bg-gradient-accent text-white border-0 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-glow',
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            ]"
          >
            {{ isSubmitting ? 'Submitting...' : config.contact.form.submitText }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { config } from '../config.js';

const formData = ref({
  name: '',
  mobile: '',
  email: '',
});

const errors = reactive({
  name: '',
  mobile: '',
  email: '',
});

const isSubmitting = ref(false);

// Validation functions
const validateName = (name) => {
  if (!name || name.trim() === '') {
    return 'Name is required';
  }
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters long';
  }
  if (name.trim().length > 50) {
    return 'Name must be less than 50 characters';
  }
  if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
    return 'Name can only contain letters, spaces, hyphens, and apostrophes';
  }
  return '';
};

const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return 'Email is required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address';
  }
  return '';
};

const validateMobile = (mobile) => {
  if (!mobile || mobile.trim() === '') {
    return 'Mobile number is required';
  }
  // Check if it contains only digits
  if (!/^\d+$/.test(mobile)) {
    return 'Mobile number must contain only digits';
  }
  // Check if it's exactly 10 digits
  if (mobile.length !== 10) {
    return 'Mobile number must be exactly 10 digits';
  }
  return '';
};

const validateField = (fieldName) => {
  switch (fieldName) {
    case 'name':
      errors.name = validateName(formData.value.name);
      break;
    case 'email':
      errors.email = validateEmail(formData.value.email);
      break;
    case 'mobile':
      errors.mobile = validateMobile(formData.value.mobile);
      break;
  }
};

const clearError = (fieldName) => {
  if (errors[fieldName]) {
    errors[fieldName] = '';
  }
};

const handleMobileInput = (event) => {
  // Only allow digits
  const value = event.target.value.replace(/\D/g, '');
  // Limit to 10 digits
  formData.value.mobile = value.slice(0, 10);
  clearError('mobile');
};

const validateForm = () => {
  let isValid = true;
  
  errors.name = validateName(formData.value.name);
  errors.email = validateEmail(formData.value.email);
  errors.mobile = validateMobile(formData.value.mobile);
  
  if (errors.name || errors.email || errors.mobile) {
    isValid = false;
  }
  
  return isValid;
};

const handleSubmit = async () => {
  // Validate all fields
  if (!validateForm()) {
    // Scroll to first error
    const firstErrorField = Object.keys(errors).find(key => errors[key]);
    if (firstErrorField) {
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
    }
    return;
  }

  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Form submitted:', formData.value);
    alert('Thank you for contacting us! We will get back to you soon.');
    
    // Reset form
    formData.value = {
      name: '',
      mobile: '',
      email: '',
    };
    
    // Clear errors
    errors.name = '';
    errors.email = '';
    errors.mobile = '';
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting your form. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

