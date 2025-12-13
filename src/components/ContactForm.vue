<template>
  <section class="contact bg-bg-primary py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative" id="contact">
    <div class="container max-w-[1400px] mx-auto">
      <h2 class="section-title text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 md:mb-8 text-text-primary leading-[1.2] tracking-[-0.02em] relative inline-block w-full">
        {{ config.contact.title }}
        <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-accent rounded-sm opacity-60"></span>
      </h2>
      <div class="contact-container max-w-[600px] mx-auto">
        <div 
          class="contact-form bg-white/90 backdrop-blur-xl border-2 border-primary rounded-md p-5 md:p-6 shadow-[0_8px_30px_-5px_rgba(0,143,189,0.25)] relative overflow-hidden" 
        >
          <!-- Success Message -->
          <div v-if="showSuccessMessage" class="success-message text-center py-8">
            <div class="mb-4">
              <svg class="w-16 h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-3">
              Thank you, Doctor, for sharing your details.
            </h3>
            <p class="text-text-secondary text-base">
              We'll reach out soon to schedule a time that works best for your demo.
            </p>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage && !showSuccessMessage" class="error-message mb-5 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
            <p class="text-red-600 text-sm font-medium">{{ errorMessage }}</p>
          </div>

          <!-- Form Fields -->
          <form 
            v-if="!showSuccessMessage"
            @submit.prevent="handleSubmit"
          >
            <div class="form-group mb-5">
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
                  'w-full px-4 py-3 border-2 rounded-lg font-body text-sm text-text-primary bg-bg-primary transition-all duration-300 relative focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,201,183,0.12)] focus:-translate-y-0.5 focus:bg-white',
                  errors.name ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-primary'
                ]"
              >
              <p v-if="errors.name" class="mt-2 text-sm text-red-500">{{ errors.name }}</p>
            </div>
            <div class="form-group mb-5">
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
                  'w-full px-4 py-3 border-2 rounded-lg font-body text-sm text-text-primary bg-bg-primary transition-all duration-300 relative focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,201,183,0.12)] focus:-translate-y-0.5 focus:bg-white',
                  errors.mobile ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-primary'
                ]"
              >
              <p v-if="errors.mobile" class="mt-2 text-sm text-red-500">{{ errors.mobile }}</p>
            </div>
            <div class="form-group mb-5">
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
                  'w-full px-4 py-3 border-2 rounded-lg font-body text-sm text-text-primary bg-bg-primary transition-all duration-300 relative focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,201,183,0.12)] focus:-translate-y-0.5 focus:bg-white',
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-card-border focus:border-primary'
                ]"
              >
              <p v-if="errors.email" class="mt-2 text-sm text-red-500">{{ errors.email }}</p>
            </div>
            <button 
              type="submit" 
              :disabled="isSubmitting"
              :class="[
                'form-submit w-full py-3 bg-gradient-accent text-white border-0 rounded-lg text-base font-bold cursor-pointer transition-all duration-300 shadow-md mt-4',
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              ]"
            >
              {{ isSubmitting ? 'Submitting...' : config.contact.form.submitText }}
            </button>
          </form>
        </div>
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
const showSuccessMessage = ref(false);
const errorMessage = ref('');

// Note: Google Apps Script doesn't support CORS for GET requests
// We rely on localStorage for client-side duplicate prevention
// and the doPost function in Google Apps Script for server-side duplicate checking

// Check for duplicate submissions using localStorage
const checkDuplicateSubmission = (email, mobile) => {
  const storageKey = 'evamed_form_submissions';
  const now = Date.now();
  const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
  
  try {
    const submissions = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    // Filter out old submissions (older than 1 hour)
    const recentSubmissions = submissions.filter(sub => now - sub.timestamp < oneHour);
    
    // Check for duplicate email or mobile
    const isDuplicate = recentSubmissions.some(sub => 
      sub.email.toLowerCase() === email.toLowerCase() || 
      sub.mobile === mobile
    );
    
    if (isDuplicate) {
      return {
        isDuplicate: true,
        message: 'You have already submitted a form with this email or phone number recently. Please wait before submitting again.'
      };
    }
    
    // Save this submission
    recentSubmissions.push({
      email: email.toLowerCase(),
      mobile: mobile,
      timestamp: now
    });
    
    localStorage.setItem(storageKey, JSON.stringify(recentSubmissions));
    
    return { isDuplicate: false };
  } catch (error) {
    console.error('Error checking duplicate:', error);
    // If localStorage fails, allow submission but log error
    return { isDuplicate: false };
  }
};

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

  // Check for duplicate submission (frontend check)
  const duplicateCheck = checkDuplicateSubmission(formData.value.email, formData.value.mobile);
  if (duplicateCheck.isDuplicate) {
    errorMessage.value = duplicateCheck.message;
    showSuccessMessage.value = false;
    return;
  }

  isSubmitting.value = true;
  
  try {
    // Check if API submission is enabled
    if (config.contact.form.submission.useApi && config.contact.form.submission.apiEndpoint) {
      const submissionType = config.contact.form.submission.submissionType || 'formspree';
      
      if (submissionType === 'google-sheets') {
        // Submit to Google Apps Script (Google Sheets)
        const formDataToSend = {
          name: formData.value.name,
          mobile: formData.value.mobile,
          email: formData.value.email,
          timestamp: new Date().toISOString(),
        };

        try {
          // Try with CORS first to detect errors
          const response = await fetch(config.contact.form.submission.apiEndpoint, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataToSend),
          });

          // Check if response is ok
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Server error: ${response.status} ${response.statusText}`);
          }

          const data = await response.json();
          
          // Check if the response indicates success
          if (data.success === false || data.error) {
            errorMessage.value = data.message || data.error || config.contact.form.submission.errorMessage;
            showSuccessMessage.value = false;
            isSubmitting.value = false;
            return;
          }

          // Success
          showSuccessMessage.value = true;
          errorMessage.value = '';
          
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
        } catch (fetchError) {
          // If CORS fails, try with no-cors as fallback
          if (fetchError.message.includes('CORS') || fetchError.message.includes('Failed to fetch')) {
            try {
              // Fallback to no-cors mode (can't read response)
              await fetch(config.contact.form.submission.apiEndpoint, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataToSend),
              });
              
              // With no-cors, we can't verify success, so show success message
              showSuccessMessage.value = true;
              errorMessage.value = '';
              
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
            } catch (noCorsError) {
              // Even no-cors failed
              errorMessage.value = config.contact.form.submission.errorMessage;
              showSuccessMessage.value = false;
            }
          } else {
            // Other error (like 401, 500, etc.)
            errorMessage.value = fetchError.message || config.contact.form.submission.errorMessage;
            showSuccessMessage.value = false;
          }
        }
      } else {
        // Submit to Formspree
        const response = await fetch(config.contact.form.submission.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.value.name,
            mobile: formData.value.mobile,
            email: formData.value.email,
            _subject: `New Contact Form Submission from ${formData.value.name}`,
          }),
        });

        if (!response.ok) {
          throw new Error('Form submission failed');
        }

        const data = await response.json();
        
        // Formspree returns { ok: true } on success
        if (data.ok || response.status === 200) {
          showSuccessMessage.value = true;
          errorMessage.value = '';
          
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
        } else {
          throw new Error('Form submission failed');
        }
      }
    } else {
      // Fallback: just log and show success message (for testing)
      console.log('Form submitted:', formData.value);
      showSuccessMessage.value = true;
      errorMessage.value = '';
      
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
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    errorMessage.value = config.contact.form.submission.errorMessage;
    showSuccessMessage.value = false;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-form:hover {
  transform: none !important;
}
</style>

