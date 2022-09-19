<script setup>
import { useStore } from "vuex";
import TheButton from "../ui/TheButton.vue";

const store = useStore();
</script>

<template>
  <header class="py-30px">
    <div class="flex justify-center space-x-10px">
      <TheButton
        :key="txt"
        v-for="(txt, i) in ['Список валют', 'Конвертер']"
        :btnTxt="txt"
        @click="store.commit('SWITC_ACTIVE_COMPONENT', i)"
        :class="{ active: store.state.activeComponent == i }"
      />
    </div>
  </header>
</template>
