import { fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUserInfo, fetchItemData } from '../api/index'

export default {
  FETCH_NEWS({commit}){
    fetchNewsList()
    .then(({ data }) => {
      commit('SET_NEWS', data)
      return data
    })
    .catch(err => {
      console.log(err)
    })
  },
  FETCH_JOBS({ commit }){
    fetchJobsList()
    .then(({data}) => {
      commit('SET_JOBS', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  FETCH_ASK({ commit }){
    fetchAskList()
    .then(({data}) => {
      commit('SET_ASK', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
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