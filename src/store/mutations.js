export default {
  ADD_CURRENCIES (state, currnecies) {
    state.currnecies = state.filterCurrencies = Object.values(currnecies)
  },
  SWITC_ACTIVE_COMPONENT (state, param) {
    state.activeComponent = param
  },
  FILTER_CURRENCIES (state, param) {
    state.filterCurrencies = state.currnecies.filter(
      el =>
        el.CharCode.toUpperCase().includes(param.toUpperCase()) ||
        el.Name.toUpperCase().includes(param.toUpperCase()) ||
        el.NumCode.includes(param)
    )
  }
}
