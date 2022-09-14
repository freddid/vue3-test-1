<script setup>
import { computed, ref } from "vue";
import SelectCurrency from "./blocks/SelectCurrensy.vue";

const props = defineProps({
  currnecies: {
    type: Array,
  },
});

const valSection1 = ref(props.currnecies[0].Value);
const valSection2 = ref(props.currnecies[0].Value);
const valInput = ref(0);

const valОutput = computed(() =>
  parseFloat(
    ((+valInput.value * +valSection1.value) / +valSection2.value).toFixed(5)
  )
);
</script>

<template>
  <div class="flex justify-center">
    <div class="flex items-center space-x-10px">
      <div class="w-300px">
        <SelectCurrency v-model="valSection1" />
        <input v-model="valInput" type="number" />
      </div>
      <span @click="valInput = valОutput"> ⇄ </span>
      <div class="w-300px">
        <SelectCurrency v-model="valSection2" />
        <input :value="valОutput" type="number" readonly />
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  @apply border border-black/10 py-15px px-15px text-35px font-bold outline-none w-full;
}
span {
  @apply text-30px cursor-pointer hover:text-black/50;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
