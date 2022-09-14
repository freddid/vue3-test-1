<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import CurrencyList from "./components/CurrencyList.vue";
import Convert from "./components/Convert.vue";

const store = useStore();
store.dispatch("GET_CURRENCY");

const activeComp = ref(0);
</script>

<template>
  <header class="py-30px">
    <div class="flex justify-center space-x-10px">
      <button
        :key="e"
        @click="activeComp = i"
        v-for="(e, i) in ['Список валют', 'Конвертер']"
        :class="activeComp == i ? 'bg-slate-500 text-white' : 'text-black'"
      >
        {{ e }}
      </button>
    </div>
  </header>

  <Convert v-if="activeComp" :currnecies="store.state.currnecies" />
  <CurrencyList v-else :currnecies="store.state.currnecies" />
</template>

<style scoped>
button {
  @apply rounded-5px p-10px cursor-pointer border border-slate-500;
}
</style>
