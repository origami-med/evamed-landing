<template>
  <div
    class="addon-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-500"
    ref="cardRef"
  >
    <!-- Top accent bar -->
    <div class="h-1 w-full shrink-0" :class="accent.bar"></div>

    <div class="flex flex-1 flex-col p-6 md:p-7">
      <!-- Header: icon + billing badge -->
      <div class="mb-5 flex items-start justify-between gap-4">
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
          :class="accent.iconBg"
        >
          <component :is="iconComponent" class="h-6 w-6" :class="accent.iconColor" />
        </div>
        <span
          v-if="addon.period"
          class="shrink-0 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide"
          :class="accent.badge"
        >
          {{ addon.period.replace(/[()]/g, '') }}
        </span>
      </div>

      <!-- Title & description -->
      <h3 class="font-display text-lg font-extrabold leading-snug text-text-primary md:text-xl">
        {{ addon.title }}
      </h3>
      <p class="mt-2 grow text-sm leading-relaxed text-text-secondary">
        {{ addon.description }}
      </p>

      <!-- Usage / detail lines -->
      <ul
        v-if="addon.usageLines?.length"
        class="mt-4 space-y-2 rounded-md border px-4 py-3"
        :class="accent.detailBox"
      >
        <li
          v-for="(line, lineIndex) in addon.usageLines"
          :key="`${addon.title}-usage-${lineIndex}`"
          class="flex items-start gap-2.5 text-xs leading-relaxed text-text-secondary"
        >
          <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" :class="accent.dot"></span>
          <span>{{ line }}</span>
        </li>
      </ul>

      <!-- Price panel -->
      <div
        class="addon-price-panel mt-5 rounded-md border px-4 py-4"
        :class="accent.priceBox"
      >
        <div class="flex flex-wrap items-end gap-x-2 gap-y-1">
          <span
            v-if="addon.strikethrough"
            class="text-sm font-medium text-text-muted line-through opacity-70"
          >
            {{ addon.strikethrough }}
          </span>
          <span
            class="font-body text-[2rem] font-extrabold leading-none"
            :class="isFree ? 'text-success' : 'text-primary'"
          >
            {{ addon.price }}
          </span>
          <span
            v-if="addon.pricePeriod"
            class="pb-0.5 text-sm font-semibold text-text-muted"
            :class="addon.pricePeriodClass || ''"
          >
            {{ addon.pricePeriod }}
          </span>
          <span
            v-if="addon.inlineNote"
            class="pb-0.5 text-sm font-medium italic text-text-muted"
          >
            {{ addon.inlineNote }}
          </span>
        </div>
        <p v-if="addon.taxNote" class="mt-2 text-[0.65rem] italic text-text-muted opacity-75">
          {{ addon.taxNote }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, h } from 'vue';

const props = defineProps({
  addon: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
});

const cardRef = ref(null);

const isFree = computed(() => props.addon.price?.toLowerCase() === 'free');

const ACCENTS = [
  {
    bar: 'bg-gradient-to-r from-[#25D366] to-logo-teal',
    iconBg: 'bg-[rgba(37,211,102,0.12)]',
    iconColor: 'text-[#128C7E]',
    badge: 'bg-[rgba(37,211,102,0.1)] text-[#128C7E]',
    detailBox: 'border-[rgba(37,211,102,0.2)] bg-[rgba(37,211,102,0.04)]',
    dot: 'bg-[#25D366]',
    priceBox: 'border-[rgba(37,211,102,0.15)] bg-[rgba(37,211,102,0.04)]',
  },
  {
    bar: 'bg-gradient-accent',
    iconBg: 'bg-[rgba(0,143,189,0.1)]',
    iconColor: 'text-primary',
    badge: 'bg-[rgba(0,143,189,0.1)] text-primary',
    detailBox: 'border-[rgba(0,143,189,0.15)] bg-[rgba(0,143,189,0.04)]',
    dot: 'bg-primary',
    priceBox: 'border-[rgba(0,143,189,0.15)] bg-[rgba(0,143,189,0.04)]',
  },
  {
    bar: 'bg-gradient-warm',
    iconBg: 'bg-[rgba(255,140,66,0.12)]',
    iconColor: 'text-accent',
    badge: 'bg-[rgba(255,140,66,0.1)] text-accent',
    detailBox: 'border-[rgba(255,140,66,0.2)] bg-[rgba(255,140,66,0.04)]',
    dot: 'bg-accent',
    priceBox: 'border-[rgba(255,140,66,0.15)] bg-[rgba(255,140,66,0.04)]',
  },
  {
    bar: 'bg-gradient-to-r from-logo-blue to-primary',
    iconBg: 'bg-[rgba(0,101,195,0.1)]',
    iconColor: 'text-logo-blue',
    badge: 'bg-[rgba(0,101,195,0.1)] text-logo-blue',
    detailBox: 'border-[rgba(0,101,195,0.15)] bg-[rgba(0,101,195,0.04)]',
    dot: 'bg-logo-blue',
    priceBox: 'border-[rgba(0,101,195,0.15)] bg-[rgba(0,101,195,0.04)]',
  },
];

const accent = computed(() => ACCENTS[props.index % ACCENTS.length]);

const ICONS = [
  // WhatsApp
  () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' }),
  ]),
  // Pharmacy
  () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('path', { d: 'M10.5 20.5L3.5 13.5C1.5 11.5 1.5 8.2 3.5 6.2C5.5 4.2 8.8 4.2 10.8 6.2L12 7.4' }),
    h('path', { d: 'M13.5 3.5L20.5 10.5C22.5 12.5 22.5 15.8 20.5 17.8C18.5 19.8 15.2 19.8 13.2 17.8L12 16.6' }),
    h('line', { x1: '12', y1: '8', x2: '12', y2: '16' }),
    h('line', { x1: '8', y1: '12', x2: '16', y2: '12' }),
  ]),
  // AI / Sparkles
  () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('path', { d: 'M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1' }),
    h('circle', { cx: '12', cy: '12', r: '3' }),
  ]),
  // Cloud storage
  () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
    h('path', { d: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z' }),
    h('polyline', { points: '12 16 12 12 14 14' }),
  ]),
];

const iconComponent = computed(() => ICONS[props.index % ICONS.length]);

onMounted(() => {
  if (!cardRef.value) return;

  cardRef.value.style.opacity = '0';
  cardRef.value.style.transform = 'translateY(32px)';
  cardRef.value.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

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
  box-shadow:
    0 12px 40px -8px rgba(0, 143, 189, 0.18),
    0 4px 24px -4px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 201, 183, 0.35);
}

.addon-card.visible:hover {
  transform: translateY(-6px) !important;
}
</style>
