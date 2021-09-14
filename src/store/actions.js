import { fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUserInfo, fetchItemData } from '../api/index'

export default {
  FETCH_NEWS({commit}){
    return fetchNewsList()
    .then(({ data }) => {
      commit('SET_NEWS', data)
      return data
    })
    .catch(err => {
      console.log(err)
    })
  },
  FETCH_JOBS({ commit }){
    return fetchJobsList()
    .then(({data}) => {
      commit('SET_JOBS', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  FETCH_ASK({ commit }){
    return fetchAskList()
    .then(({data}) => {
      commit('SET_ASK', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  // #2
  FETCH_LIST({ commit }, pageName){
    // #3
    return fetchList(pageName)
    .then((response) => {

      console.log('#4')
      commit('SET_LIST', response.data)
      return response
    })
    .catch(err => {
      console.log(err)
    })
  },
  FETCH_USER({ commit }, name){
    return fetchUserInfo(name)
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