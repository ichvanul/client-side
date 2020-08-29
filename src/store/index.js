import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: []
  },
  mutations: {
    GET_MENU (state, data) {
      state.menu = data
    }
  },
  actions: {
    getApi (context) {
      axios.get('http://localhost:5000/api/v1/menu/')
        .then((res) => {
          context.commit('GET_MENU', res.data.result)
        })
    }
  },
  modules: {
  }
})
