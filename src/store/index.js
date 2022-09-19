import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'

const store = createStore({
  state: {
    currnecies: [],
    activeComponent: 0,
    filterCurrencies: []
  },

  mutations,
  actions
})

export default store
