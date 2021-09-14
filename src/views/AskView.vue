<template>
  <div> 
   <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem'
import { mapState } from 'vuex'

export default {
  name:"AskView",
  components: {
    ListItem
  },
  computed: {
    ...mapState(['ask'])  
  },
  created(){
    this.$store.dispatch('FETCH_ASK')
  },
}
</script>