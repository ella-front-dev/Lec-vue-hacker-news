import { fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUserInfo, fetchItemData } from '../api/index'

export default {
  async FETCH_NEWS({commit}){
    try{
      let response = await fetchNewsList()
      commit('SET_NEWS', response.data)
      return response  // return 을 햐주자 않으면 화면에서의 비동기처리 순서를 보장할 수 없기때문에 꼭 해야한다.
    }catch(err){
      console.log(err)
    }
  },
  async FETCH_JOBS({ commit }){
      let response = await fetchJobsList()
      commit('SET_JOBS', response.data)
      return response
  },
  async FETCH_ASK({ commit }){
    try{
      let response = await fetchAskList()
      commit('SET_ASK', response.data)
      return response
    }catch(err){
      console.log(err)
    }
  },

  async FETCH_LIST({ commit }, pageName){
    let response = await fetchList(pageName)
    commit('SET_LIST', response.data)
    return response
  },
  async FETCH_USER({ commit }, name){
    try{
      let response = await fetchUserInfo(name)
      commit('SET_USER', response.data)
      return response
    }catch(err){
      console.log(err)
    }
  }, 
  async FETCH_ITEM({ commit }, id){
    try{
      let response = await fetchItemData(id)
      commit('SET_ITEM', response.data)
      return response 
    }catch(err){
      console.log(err)
    }
  },

}