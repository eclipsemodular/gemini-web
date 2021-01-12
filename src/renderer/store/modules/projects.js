let state = {
  projects: {
    
    fakeProject: {
      id: "fakeProject",
      name: "Fake Project",
      modified: {
        date: "01/10/2021",
        time: "03:01",
      },
      note:"A fake project, don't believe it",

      UUID: "20210110023445", //yyyymmddhhmmss
      path: "Q:/1 Projects/some project/fakeProject.json"
      
    }
    
  },
  recent: "",
}

let mutations = {
  addProject(state, data) {
    state.projects[data.id] = {
      data
    }
  },

  setRecent(state, data) {
    state.recent = data
  },
}

let actions = {
  addProject({ commit }, data) {
    commit("addProject", data)
  },

  setRecent({ commit }, data) {
    commit("setRecent", data)
    console.log("aaaaaaaa")
  },
}

export default {
  state,
  mutations,
  actions
}
