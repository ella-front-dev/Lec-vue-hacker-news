import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreateListView.js'
import bus from '../utils/bus.js'
import { store } from '../store/index.js'
import AsyncAwait from '../_etc/AsyncAwait.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // url #값  제거
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: (to,from, next) =>{
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
        .then(()=> next())
        .catch((error)=>{
          console.log(error)
        })
      }
      //component: createListView('NewsView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to,from, next) =>{
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
        .then(()=> next())
        .catch((error)=>{
          console.log(error)
        })
      }
      //component: createListView('JobsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to,from, next) =>{
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
        .then(()=> next())
        .catch((error)=>{
          console.log(error)
        })
      }
      //component: createListView('AskView'),
    },
    {
      path: '/item/:id',
      component: ItemView
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/example1',
      component: AsyncAwait
    },
  ]
})

  
 