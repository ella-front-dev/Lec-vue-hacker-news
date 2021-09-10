<template>
  <div>
    <div v-for="(item, index) in ask" :key="index">{{ item.title }}</div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index';

export default {
  name:"JobView",
  data(){
    return{
      ask: []
    }
  },
  created(){
    console.log('호출전: ', this)
    fetchAskList()
    .then(response => {
      console.log('호출 후: ', this)
      this.ask = response.data
    })
    .catch(err => console.log(err))
  },
}
</script>

<style>

</style>