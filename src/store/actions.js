export default {
  // fetch запрос для получение валют
  async GET_CURRENCY ({ commit }) {
    const currneciesData = await fetch(
      'https://www.cbr-xml-daily.ru/daily_json.js'
    )

    const { Valute } = await currneciesData.json()
    commit('ADD_CURRENCIES', Valute)
  }
}
