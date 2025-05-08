import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  return { cart };
});

export const useCartStoreWithActions = defineStore('cart2');
