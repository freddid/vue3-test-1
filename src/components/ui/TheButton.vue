<script setup>
const props = defineProps({
  btnTxt: String,
});
</script>

<template>
  <button>
    {{ btnTxt }}
  </button>
</template>

<style scoped>
button {
  @apply rounded-5px p-10px cursor-pointer border border-slate-500 text-black;
}
button.active {
  @apply bg-slate-500 text-white;
}
</style>
