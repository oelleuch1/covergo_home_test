import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    setUser({ commit, state }, payload) {
      commit('setUser', {
        ...state.user,
        ...payload,
      })
    }
  },
})
