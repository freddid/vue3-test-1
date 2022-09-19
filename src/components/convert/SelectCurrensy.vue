<script setup>
import { useStore } from "vuex";
const { state } = useStore();

const props = defineProps({
  modelValue: [String, Number],
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <select
    @input="emit('update:modelValue', $event.target.value)"
    :value="modelValue"
  >
    <option
      v-for="currnecy in state.currnecies"
      :key="currnecy.ID"
      class="p-5px text-14px"
      :value="currnecy.Value / currnecy.Nominal"
    >
      1 {{ currnecy.CharCode }} ---
      {{ (currnecy.Value / currnecy.Nominal).toFixed(5) }} RUB
    </option>
  </select>
</template>

<style scoped>
select {
  @apply w-full mb-10px border font-bold border-black/10 outline-none py-10px px-5px;
}
</style>
