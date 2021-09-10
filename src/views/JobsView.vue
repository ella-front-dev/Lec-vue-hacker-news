<template>
  <div>
    <div v-for="(job, index) in jobs" :key="index">{{ job.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name:"JobView",
  computed: {
    ...mapGetters({
      jobs: 'fetchJobs'
    }),
    // #2
    // ...mapState({ 
    //   jobs: state => state.jobs
    // }),
    // #1
    // jobs(){
    //   return this.$store.state.jobs
    // }
  },
  created(){
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>