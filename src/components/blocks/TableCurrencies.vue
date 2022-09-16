<script setup>
import { ref } from "vue";

const props = defineProps({
  activeCurrencies: Array,
});

const headerTable = [
  "Цифр. код",
  "Букв. код",
  "Единиц",
  "Валюта",
  "Курс ↺",
  "Изменение",
];

const switchEls = ref([]);

const switchCurrensy = (id) => {
  const idx = switchEls.value.indexOf(id);

  if (idx === -1) {
    switchEls.value.push(id);
  } else {
    switchEls.value.splice(idx, 1);
  }
};
</script>

<template>
  <table class="data w-full">
    <tbody>
      <tr>
        <th :key="el" v-for="el in headerTable">
          {{ el }}
        </th>
      </tr>
      <tr v-for="currnecy in activeCurrencies" :key="currnecy.ID">
        <td>{{ currnecy.NumCode }}</td>
        <td>{{ currnecy.CharCode }}</td>
        <td>{{ currnecy.Nominal }}</td>
        <td>{{ currnecy.Name }}</td>
        <td @click="switchCurrensy(currnecy.ID)" class="cursor-pointer">
          <span class="text-indigo-500" v-if="switchEls.includes(currnecy.ID)"
            >{{ (1 / currnecy.Value).toFixed(5) }}
          </span>
          <span v-else>{{ currnecy.Value }}</span>
        </td>
        <td>
          <span class="text-blue-600" v-if="currnecy.Value > currnecy.Previous">
            ᐱ
          </span>
          <span v-else class="text-red-600">ᐯ</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
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
