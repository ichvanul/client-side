import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    selectedItem: []
  },
  mutations: {
    GET_MENU (state, data) {
      state.menu = data
    },
    selectedItem (state, { item, count }) {
      const items = state.selectedItem
        .find((clicked) => clicked.item.id === item.id)
      if (!items) {
        state.selectedItem.push({ item, count })
      }
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
  getters: {
    countCart: (state) => state.selectedItem.length
  },
  modules: {
  }
})
