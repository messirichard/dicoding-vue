import axios from 'axios'
const indtotal = {
  namespaced: true,
  state: {
    indtotal: []
  },

  getters: {},

  mutations: {
    SET_IT (state, data) {
      state.indtotal = data
      console.log(state.indtotal)
    }
  },

  actions: {
    loadIndtotal ({
      commit
    }) {
      axios.get('https://api.kawalcorona.com/indonesia')
        .then(res => {
          commit('SET_IT', res.data)
        })
        .catch(error => console.log(error))
    }
  }
}

export default indtotal
