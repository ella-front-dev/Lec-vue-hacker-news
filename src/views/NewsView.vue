<template>
<div>
  <div v-for="(item, index) in this.$store.state.news" :key="index">{{ item.title }}</div>
</div>
</template>

<script>

export default {  
  name: 'NewsView',
  data(){
    return {
      news: []
    }
  },
  created(){
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style>

</style>