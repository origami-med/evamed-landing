<template>
  <article
    class="addon-card flex h-full flex-col rounded-lg border border-card-border bg-white p-5 text-center shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] transition-all duration-300"
    ref="cardRef"
  >
    <h3 class="font-display text-[0.95rem] font-extrabold leading-snug text-text-primary md:text-base">
      {{ addon.title }}
    </h3>

    <p class="mt-3 text-sm leading-relaxed text-text-secondary">
      {{ addon.description }}
    </p>

    <p v-if="addon.period" class="mt-2 text-xs italic text-text-muted">
      {{ addon.period }}
    </p>

    <!-- Multi-tier pricing (Storage) -->
    <div v-if="addon.pricingTiers?.length" class="mt-4 space-y-3">
      <div
        v-for="(tier, i) in addon.pricingTiers"
        :key="i"
        :class="i > 0 ? 'border-t border-card-border pt-3' : ''"
      >
        <p class="text-[0.65rem] font-semibold uppercase tracking-wide text-text-muted">
          {{ tier.label }}
        </p>
        <div class="mt-1 flex flex-wrap items-end justify-center gap-x-1.5">
          <span v-if="tier.strikethrough" class="text-sm text-text-muted line-through">
            {{ tier.strikethrough }}
          </span>
          <span
            class="font-body text-2xl font-extrabold text-primary"
            :class="tier.price?.toLowerCase() === 'free' ? 'text-success' : ''"
          >
            {{ tier.price }}
          </span>
        </div>
        <p v-if="tier.suffix" class="mt-0.5 text-xs text-text-muted">{{ tier.suffix }}</p>
      </div>
    </div>

    <!-- Single price -->
    <div v-else class="addon-price mt-4 flex flex-wrap items-end justify-center gap-x-1.5">
      <span v-if="addon.strikethrough" class="text-sm text-text-muted line-through">
        {{ addon.strikethrough }}
      </span>
      <span class="font-body text-[2rem] font-extrabold leading-none text-primary">
        {{ addon.price }}
      </span>
      <span
        v-if="addon.pricePeriod"
        class="pb-0.5 text-sm font-semibold text-text-muted"
        :class="addon.pricePeriodClass || ''"
      >
        {{ addon.pricePeriod }}
      </span>
    </div>

    <div class="mt-auto pt-3">
      <p
        v-for="(line, i) in addon.usageLines || []"
        :key="i"
        class="text-xs leading-tight text-text-secondary"
      >
        {{ line }}
      </p>
      <p v-if="addon.taxNote" class="mt-2 text-[0.6rem] italic text-text-muted opacity-75">
        {{ addon.taxNote }}
      </p>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineProps({
  addon: { type: Object, required: true },
});

const cardRef = ref(null);

onMounted(() => {
  if (!cardRef.value) return;

  cardRef.value.style.opacity = '0';
  cardRef.value.style.transform = 'translateY(24px)';
  cardRef.value.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(cardRef.value);
});
</script>

<style scoped>
.addon-card.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.addon-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 201, 183, 0.35);
  box-shadow:
    0 4px 20px -2px rgba(0, 0, 0, 0.08),
    20px 20px 60px -12px rgba(0, 143, 189, 0.4),
    20px 20px 50px -10px rgba(0, 201, 183, 0.3),
    0 25px 50px -15px rgba(0, 143, 189, 0.3);
}

.addon-card.visible:hover {
  transform: translateY(-6px) !important;
}
</style>
