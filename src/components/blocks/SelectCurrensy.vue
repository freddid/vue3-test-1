<script setup>
import { useStore } from "vuex";
const store = useStore();

const currnecies = store.state.currnecies;
const emit = defineEmits(["update:modelValue"]);

function updateValue(value) {
  emit("update:modelValue", value);
}
</script>

<template>
  <select @input="updateValue($event.target.value)">
    <option
      v-for="currnecy in currnecies"
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
