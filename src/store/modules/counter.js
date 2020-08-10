import { setTimeout } from 'timers'

const state = {
  counter: 0
}
const getters = {
  doubleCounter: state => state.counter * 2,
  stringCounter: state => state.counter + ' Clicks'
}

const mutations = {
  increment: (state, payload) => { state.counter += payload },
  decrement: state => state.counter--
}

const actions = {
  increment: ({ commit }, payload) => {
    console.log(payload)
    commit('increment', payload)
  },
  decrement: ({ commit }) => {
    commit('decrement')
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit('increment', payload.by)
    }, payload.duration)
  },
  asyncDecrement: ({ commit }) => {
    setTimeout(() => {
      commit('decrement')
    }, 1000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
