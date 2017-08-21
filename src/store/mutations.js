import getters from './getters'
import {USER_SIGNIN,USER_SIGNOUT} from './types'
const mutations= {
        [USER_SIGNIN](state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        },
        [USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
  
}
export default{
  state,
  mutations,
  getters
}