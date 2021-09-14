<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem'
import ListMixin from '../mixins/ListMixin.js'

export default {  
  name: 'NewsView',
  mixins: [ListMixin],
  components: {
    ListItem
  },
  // created(){
  //   bus.$emit('start:spinner')
  //   setTimeout(()=>{
  //     this.$store.dispatch('FETCH_NEWS')
  //     .then(()=>{
  //       console.log('fetched')
  //       bus.$emit('end:spinner')
  //     })
  //     .catch((error)=>{
  //       console.log(error)
  //     })
  //   },3000)
  // }
}
</script>