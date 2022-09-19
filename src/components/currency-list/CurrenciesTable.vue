<script setup>
import CurrenciesEls from "./CurrenciesEls.vue";

// заголовки столбцов
const headerTable = [
  "Цифр. код",
  "Букв. код",
  "Единиц",
  "Валюта",
  "Курс ↺",
  "Изменение",
];
</script>

<template>
  <table class="data w-full">
    <tbody>
      <tr>
        <th :key="el" v-for="el in headerTable">
          {{ el }}
        </th>
      </tr>
      <CurrenciesEls />
    </tbody>
  </table>
</template>

<style>
table.data td,
table.data th {
  @apply border-b border-slate-400/40 py-12px px-8px font-medium text-left text-14px;
}

table.data tr:hover {
  @apply bg-black/5;
}

table.data td {
  @apply font-normal;
}
</style>
