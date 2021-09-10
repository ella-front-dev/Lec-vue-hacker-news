<template>
  <div>
    <p v-for="(item, index) in jobs" :key="index">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{item.time_ago}}, {{ item.domain }}</small>
    </p>
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