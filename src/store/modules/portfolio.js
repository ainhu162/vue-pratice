const state = {
  funds: 10000,
  stocks: []
}
const mutations = {
  'BUY_STOCK' (state, { stockId, quantity, price }) {
    const record = state.stocks.find(ele => ele.id === stockId)
    if (record) {
      record.quantity += +quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity
      })
    }
    state.funds -= price * quantity
  },
  'SELL_STOCK' (state, { stockId, quantity, price }) {
    const record = state.stocks.find(ele => ele.id === stockId)
    if (record.quantity > quantity) {
      record.quantity -= +quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += price * quantity
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds
    state.stocks = portfolio.stockPortfolio || []
  }
}
const actions = {
  sellStock ({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}
const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(ele => ele.id === stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
