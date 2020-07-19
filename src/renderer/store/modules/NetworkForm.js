const state = {
  netOut: {
    ip: '127.0.0.1',
    port: '8001'
  }
}

const mutations = {
  setOutIP (state, data) {
    state.netOut.ip = data
  },
  setOutPort (state, data) {
    state.netOut.port = data
  }
}

const actions = {
  setOutIP ({ commit }, data) {
    commit('setOutIP', data)
  },
  setOutPort ({ commit }, data) {
    commit('setOutPort', data)
  },
  setNetData ({ dispatch }, data) {
    dispatch('setOutIP', data.ip)
    dispatch('setOutPort', data.port)
  }
}

export default {
  state,
  mutations,
  actions
}
