import { createStore } from "vuex";

const store = createStore({
  state: {
    currnecies: [],
  },

  mutations: {
    ADD_CURRENCIES(state, currnecies) {
      state.currnecies = Object.values(currnecies);
    },
  },

  actions: {
    async GET_CURRENCY({ commit }) {
      const currneciesData = await fetch(
        "https://www.cbr-xml-daily.ru/daily_json.js"
      );

      const { Valute } = await currneciesData.json();
      commit("ADD_CURRENCIES", Valute);
    },
  },
});

export default store;
