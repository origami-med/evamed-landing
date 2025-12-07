<template>
  <div 
    class="modal fixed top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm z-[2000] items-center justify-center p-8 transition-opacity duration-300"
    :class="{ 'hidden opacity-0': !isOpen, 'flex opacity-100': isOpen }"
    @click.self="close"
  >
    <div 
      class="modal-content bg-card-bg rounded-3xl w-full max-w-[800px] max-h-[85vh] shadow-xl relative transform transition-transform duration-300 flex flex-col overflow-hidden p-0"
      :class="{ 'scale-90': !isOpen, 'scale-100': isOpen }"
    >
      <div class="modal-header p-16 pb-4 flex-shrink-0 flex justify-between items-center bg-card-bg z-10">
        <h2 class="font-display text-3xl mb-0 text-text-primary">{{ title }}</h2>
        <button 
          class="modal-close bg-transparent border-0 text-2xl text-text-secondary cursor-pointer w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-bg-tertiary hover:text-text-primary" 
          @click="close"
        >
          ×
        </button>
      </div>
      <div class="modal-body p-16 pt-0 overflow-y-auto flex-grow">
        <p class="text-text-secondary leading-[1.8] mb-4"><strong>Last Updated:</strong> {{ lastUpdated }}</p>
        <template v-for="(item, index) in content" :key="index">
          <h3 v-if="item.type === 'heading'" class="mt-8 mb-4 font-display text-xl">{{ item.text }}</h3>
          <p v-else-if="item.type === 'paragraph'" class="text-text-secondary leading-[1.8] mb-4">{{ item.text }}</p>
          <ul v-else-if="item.type === 'list'" class="ml-8 text-text-secondary leading-[1.8] mb-4 list-disc">
            <li v-for="(li, liIndex) in item.items" :key="liIndex" class="mb-2">{{ li }}</li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';

const props = defineProps({
  modalType: {
    type: String,
    required: true,
    validator: (value) => ['privacy', 'terms'].includes(value),
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  legal: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['close']);

const title = computed(() => props.modalType === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions');
const lastUpdated = computed(() => props.legal.lastUpdated);
const content = computed(() => props.legal.content);

const close = () => {
  emit('close');
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.modal-body::-webkit-scrollbar {
  width: 8px;
}

.modal-body::-webkit-scrollbar-track {
  background: transparent;
}

.modal-body::-webkit-scrollbar-thumb {
  background-color: rgba(0, 201, 183, 0.2);
  border-radius: 10px;
  transition: background-color 0.3s;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background-color: #008FBD;
}
</style>


