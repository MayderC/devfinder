import { createStore } from 'vuex'
import api from '../api/getData'

export default createStore({
  state: {
    info : {},
    isLight : false
  },
  // fix mutations, not async
  mutations: {
    
    setInfo(state, info){
      state.info = info
    },

    changeTheme(state){
      state.isLight = !state.isLight
    }

  },
  actions: {

    getInfo({commit} ,devName){


      api.getData(devName)
      .then(res => {
        commit('setInfo', res)
      })
      .catch(err => new Error("error en la peticion", err))
    },


    theme({commit}){

      commit('changeTheme')

    }

  },


  modules: {
  }
})
