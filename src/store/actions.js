import Vue from 'vue'

export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(res => res.json())
    .then(data => {
      if (data) {
        const { stocks, funds, stockPortfolio } = data
        commit('SET_PORTFOLIO', { funds, stockPortfolio })
        commit('SET_STOCKS', stocks)
      }
    })
}
