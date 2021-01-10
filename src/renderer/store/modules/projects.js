// import midi from 'midi'

const state = {
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
    
  }
}

const mutations = {
  addProject(state, data) {
    state.projects[data.id] = {
      data
    }
  }
}

const actions = {
  addProject({commit},data) {
    commit("addProject", data)
  }
}

export default {
  state,
  mutations,
  actions
}
