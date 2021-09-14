<template>
  <div>
    <user-profile :info="userInfo"></user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile'

export default {
  name: 'UserView',
  components: {
    UserProfile
  },
  computed: {
    userInfo(){
      return this.$store.state.user;
    }
  },
  created(){
    const userId = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userId)
  }
}
</script>

<style>

</style>