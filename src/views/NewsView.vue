<template>
<div>
   <p v-for="(item, index) in news" :key="index">
     <a v-bind:href="item.url">{{ item.title }}</a>
     <small>{{item.time_ago}} by 
       <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
   </p>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {  
  name: 'NewsView',
  created(){
    this.$store.dispatch('FETCH_NEWS')
  },
  computed: {
    ...mapState(['news'])
  }
}
</script>

<style>

</style>