import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: []
  },
  getters: {
    fetchJobs(state){
      return state.jobs;
    }
  },
  mutations,
  actions
})