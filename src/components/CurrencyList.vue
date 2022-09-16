<script setup>
import { computed, ref } from "vue";
import TableCurrencies from "./blocks/TableCurrencies.vue";

const props = defineProps({
  currnecies: Array,
});

const searchVal = ref("");

const activeCurrencies = computed(() =>
  props.currnecies.filter(
    (el) =>
      el.CharCode.toUpperCase().includes(searchVal.value.toUpperCase()) ||
      el.Name.toUpperCase().includes(searchVal.value.toUpperCase()) ||
      el.NumCode.includes(searchVal.value)
  )
);
</script>

<template>
  <div class="p-10px">
    <div class="flex pb-10px justify-center">
      <input
        class="input-search"
        v-model="searchVal"
        placeholder="Поиск валюты"
        type="text"
      />
    </div>
    <TableCurrencies :activeCurrencies="activeCurrencies" />
  </div>
</template>

<style scoped>
.input-search {
  @apply border border-black/10 rounded-5px p-10px text-20px outline-none;
}
</style>
