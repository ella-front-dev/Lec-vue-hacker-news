<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  name: 'App',
  components: {
    ToolBar,
    Spinner
  },
  data(){
    return {
      loadingStatus: false
    }
  },
  created(){
    console.log(process.env.VUE_APP_TITLE);
    bus.$on('start:spinner', ()=>{ this.loadingStatus = true })
    bus.$on('end:spinner', ()=>{ this.loadingStatus = false })
  },
  beforeDestroy(){
    bus.$off('start:spinner', ()=>{ this.loadingStatus = true })
    bus.$off('end:spinner', ()=>{ this.loadingStatus = false })
  },
  methodS: {
    startSpinner(){
      this.loadingStatus = true
    },
    endSpinner(){
      this.loadingStatus = false
    }
  }
}
</script>
<style>
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: #35495e;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a.router-link-exact-active {
    text-decoration: underline;
  }

  .page-enter-active, page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, page-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
