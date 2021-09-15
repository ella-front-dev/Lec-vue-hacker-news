<template>
  <div>
    <button @click="loginUser">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { handleException } from './utils'

export default {
  data(){
    return {
      items: []
    }
  },
  methods: {
    loginUser(){
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=>{
          if(response.data.id === 1){
            // 사용자 인증
            console.log('사용자 인증됨')
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then((response)=>{
                this.items = response.data
              })
              .catch((err)=>{
                console.log(err)
              })
          }
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    async loginUser1(){
      try{
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        if(response.data.id === 1){
          console.log('사용자 인증됨')
          let list = await axios.get('https://jsonplaceholder.typicode.com/todos')
          this.items = list.data
        }
      }catch(err){
        // 공통적으로 나타나는 에러들 처리 
        handleException(err)
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>