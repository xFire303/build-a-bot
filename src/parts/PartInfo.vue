<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePartsStore } from '@/stores/partsStore';

const partsStore = usePartsStore();

const props = defineProps(['partType', 'id']);

const part = computed(() => partsStore.parts[props.partType].find((part1) => part1.id === +props.id));
</script>
