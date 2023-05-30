import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLoaderStore = defineStore("loader", () => {
  const _loading = ref(false);

  const loading = computed({
    get() {
      return _loading.value;
    },
    set(value) {
      _loading.value = value;
    },
  });

  function load(value: boolean) {
    _loading.value = value;
  }

  function toggle() {
    _loading.value = !_loading.value;
  }

  return { loading, load, toggle };
});
