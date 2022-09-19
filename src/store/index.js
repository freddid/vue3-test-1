import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'

const store = createStore({
  state: {
    currnecies: [], // Список валют
    activeComponent: 0, // Активный компонент главной страницы
    filterCurrencies: [] // Фильтрируемы список валют
  },

  mutations,
  actions
})

export default store
