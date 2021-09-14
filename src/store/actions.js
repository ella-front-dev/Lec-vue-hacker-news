import { fetchList, fetchUserInfo, fetchItemData } from '../api/index'

export default {
  FETCH_LIST({ commit }, pageName){
    fetchList(pageName)
    .then(({data}) => {
      commit('SET_LIST', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  FETCH_USER({ commit }, name){
    fetchUserInfo(name)
    .then(({data}) => {
      commit('SET_USER', data)
    })
    .catch(err => {
      console.log(err)
    })
  }, 
  FETCH_ITEM({ commit }, id){
    fetchItemData(id)
    .then(({data}) => {
      commit('SET_ITEM', data)
    })
    .catch(err => {
      console.log(err)
    })
  },

}