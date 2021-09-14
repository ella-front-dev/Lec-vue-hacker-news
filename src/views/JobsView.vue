<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ListItem from '../components/ListItem'

export default {
  name:"JobView",
    components: {
    ListItem
  },
  computed: {
    ...mapGetters({
      jobs: 'fetchJobs'
    }),
  },
  created(){
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>