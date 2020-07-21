import * as fs from 'graceful-fs'

const state = {
  mapData: {
    mapName: 'Default',
    mapPath:'./maps/',
    connections: {
      default: {
        name: 'default card',
        midiAddr: 'no midi addr',
        oscAddr: 'no osc addr',


      }
    }
  }
}

const mutations = {
  updateMapFile(state) {
    let data = JSON.stringify(state.mapData)
    let path = data.mapPath + data.mapName
    console.log(path)
    fs.writeFileSync(path, data)
  },
  newConnection({ dispatch }, state, data) {
    let key = data.midiAddr + data.oscAddr
    data.key = key
    state.connections[key] = data
    dispatch('updateMapFile')
  }
}

const actions = {
  updateMapFile({ commit }) {
    //quick delay to make sure that the state is updated from last call. Prob not needed
    setTimeout(() => {commit('updateMapFile')}, 10)
  },
  newConnection({ commit }, data) {
    commit('newConnection', data)
  }
}

export default {
  state,
  mutations,
  actions
}
