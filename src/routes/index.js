import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreateListView.js'

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
      component: NewsView
      //component: createListView('NewsView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      //component: createListView('JobsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
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
  ]
})

  
 