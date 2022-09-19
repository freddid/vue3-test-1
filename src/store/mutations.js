export default {
  // добавляем список валют в store
  ADD_CURRENCIES (state, currnecies) {
    state.currnecies = state.filterCurrencies = Object.values(currnecies)
  },

  // переключаем компоненты главной страницы
  SWITC_ACTIVE_COMPONENT (state, param) {
    state.activeComponent = param
  },

  // фильтрируем список валют по значению из инпута
  FILTER_CURRENCIES (state, param) {
    state.filterCurrencies = state.currnecies.filter(
      el =>
        el.CharCode.toUpperCase().includes(param.toUpperCase()) ||
        el.Name.toUpperCase().includes(param.toUpperCase()) ||
        el.NumCode.includes(param)
    )
  }
}
