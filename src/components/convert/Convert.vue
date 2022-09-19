<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import SelectCurrency from "./SelectCurrensy.vue";

const { state } = useStore();

const section1 = ref(state.currnecies[0].Value); // значение первого раздела
const section2 = ref(state.currnecies[0].Value); // значение второго раздела
const valInput = ref(0); // значение активного инпута

// конвертация валюты. Значение воторого инпута
const valОutput = computed(() =>
  parseFloat(((+valInput.value * +section1.value) / +section2.value).toFixed(5))
);
</script>

<template>
  <div class="flex justify-center">
    <div class="flex items-center space-x-10px">
      <div class="w-300px">
        <SelectCurrency v-model="section1" />
        <input v-model="valInput" type="number" />
      </div>
      <span @click="[section1, section2] = [section2, section1]"> ⇄ </span>
      <div class="w-300px">
        <SelectCurrency v-model="section2" />
        <input :value="valОutput" type="number" readonly />
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  @apply border border-black/10 py-15px px-15px text-35px font-bold outline-none w-full;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    @apply appearance-none m-0;
  }
}
span {
  @apply text-30px cursor-pointer hover:text-black/50;
}
</style>
