<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
const { state } = useStore();

// массив обратных значений валют
const switchEls = ref([]);

// переключатель значения валюты
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
  <tr v-for="currnecy in state.filterCurrencies" :key="currnecy.ID">
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
</template>
