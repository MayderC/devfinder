import { createStore } from 'vuex'
import api from '../api/getData'

export default createStore({
  state: {
    info : {},
    isLight : false
  },
  mutations: {
    getInfo(state, devName){
      api.getData(devName)
      .then(res => state.info = res)
      .catch(err => new Error("error en la peticion", err))
    }
  },
  actions: {
  },
  modules: {
  }
})
