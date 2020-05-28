import axios from 'axios'
const listcountry = {
  namespaced: true,
  state: {
    listcountry: []
  },

  getters: {
    getData: (state) => state.listcountry
  },
  
  mutations: {
    SET_LC (state, data) {
      state.listcountry = data
      console.log(state.listcountry)
    }
  },

  actions: {
    loadListcountry ({
      commit
    }) {
      axios.get('https://api.covid19api.com/summary')
        .then(res => {
          commit('SET_LC', res.data.Countries)
        })
        .catch(error => console.log(error))
    }
  }
}

export default listcountry
