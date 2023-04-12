import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    infos: {
      name: 'zyx',
      age: 18
    },
    names: '1112'
  },
  modules: {
    user
  }
})

export default store