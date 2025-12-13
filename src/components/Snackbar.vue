<template>
  <Transition name="snackbar">
    <div
      v-if="visible"
      class="snackbar fixed top-24 left-1/2 -translate-x-1/2 z-[999] min-w-[320px] max-w-[90vw] md:max-w-[520px]"
    >
      <div
        :class="[
          'relative bg-white/90 backdrop-blur-xl border rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 group',
          type === 'success' 
            ? 'border-[rgba(0,201,183,0.2)]'
            : type === 'error'
            ? 'border-[rgba(239,68,68,0.2)]'
            : 'border-card-border'
        ]"
      >
        <!-- Top gradient accent bar -->
        <div
          :class="[
            'absolute top-0 left-0 right-0 h-1 origin-left transition-transform duration-500',
            type === 'success'
              ? 'bg-gradient-accent scale-x-100'
              : type === 'error'
              ? 'bg-gradient-warm scale-x-100'
              : 'bg-primary scale-x-100'
          ]"
        ></div>
        
        <div class="flex items-center gap-4 p-5 pt-6">
          <!-- Icon -->
          <div
            :class="[
              'shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300',
              type === 'success'
                ? 'bg-[rgba(0,201,183,0.1)] border border-[rgba(0,201,183,0.2)]'
                : type === 'error'
                ? 'bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)]'
                : 'bg-[rgba(0,143,189,0.1)] border border-[rgba(0,143,189,0.2)]'
            ]"
          >
            <svg
              v-if="type === 'success'"
              class="w-5 h-5"
              :class="type === 'success' ? 'text-[#00C9B7]' : ''"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <svg
              v-else-if="type === 'error'"
              class="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <!-- Message -->
          <div class="flex-1 min-w-0">
            <p class="text-sm font-body text-text-primary leading-relaxed">
              {{ message }}
            </p>
          </div>
          
          <!-- Close Button -->
          <button
            @click="close"
            class="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-all duration-200"
            aria-label="Close"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Progress Bar -->
        <div
          v-if="autoClose"
          class="absolute bottom-0 left-0 right-0 h-0.5 bg-bg-tertiary overflow-hidden"
        >
          <div
            :class="[
              'h-full origin-left',
              type === 'success'
                ? 'bg-gradient-accent'
                : type === 'error'
                ? 'bg-gradient-warm'
                : 'bg-primary'
            ]"
            :style="{ animation: `snackbar-progress ${duration}ms linear forwards` }"
          ></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'info', // 'success', 'error', 'info'
    validator: (value) => ['success', 'error', 'info'].includes(value),
  },
  duration: {
    type: Number,
    default: 5000, // 5 seconds
  },
  autoClose: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['close']);

const visible = ref(false);
let timeoutId = null;

const show = () => {
  visible.value = true;
  
  if (props.autoClose) {
    timeoutId = setTimeout(() => {
      close();
    }, props.duration);
  }
};

const close = () => {
  visible.value = false;
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  emit('close');
};

// Expose methods
defineExpose({
  show,
  close,
});

// Auto show on mount
onMounted(() => {
  show();
});

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});
</script>

<style scoped>
.snackbar-enter-active,
.snackbar-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.snackbar-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.snackbar-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.snackbar-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.snackbar-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes snackbar-progress {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}
</style>


