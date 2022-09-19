<script setup>
import { useStore } from "vuex";
import TheNavbar from "./components/layout/TheNavbar.vue";
import CurrencyList from "./components/currency-list/CurrencyList.vue";
import Convert from "./components/convert/Convert.vue";

const store = useStore();
store.dispatch("GET_CURRENCY");
</script>

<template>
  <TheNavbar />

  <Convert v-if="store.state.activeComponent" />
  <CurrencyList v-else />
</template>
