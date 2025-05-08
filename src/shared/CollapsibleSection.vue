<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open" @keydown.enter="open = !open" tabindex="0"
        ><slot name="collapse">&#x25B2; Collapse</slot></span
      >
      <span v-if="!open" @click="open = !open" @keydown.enter="open = !open" tabindex="0"
        ><slot name="expand">&#x25BC; Expand</slot></span
      >
    </div>

    <slot v-if="open">

    </slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(true);
</script>

<style scoped>
.header {
  cursor: pointer;
  font-size: 22px;
  padding: 3px;
  background-color: #bbb;
}
</style>
