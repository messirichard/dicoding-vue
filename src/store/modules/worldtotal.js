import axios from 'axios'
const worldtotal = {
  namespaced: true,
  state: {
    worldtotal: []
  },

  getters: {
  },

  mutations: {
    SET_WT (state, data) {
      state.worldtotal = data
    }
  },

  actions: {
    loadWorldtotal ({commit}) {
      axios.get('https://api.covid19api.com/world/total')
        .then(res => {
          commit('SET_WT', res.data)
        })
        .catch(error => console.log(error))
    }
  }
}

export default worldtotal
