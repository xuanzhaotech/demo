import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.ues(Vuex)
export default new Vuex.Store({
    modules:{
        mutations
    },
    actions
})