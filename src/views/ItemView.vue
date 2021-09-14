<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="fetchItems">
        <router-link  slot="username" :to="`/user/${fetchItems.user}`">{{ fetchItems.user }}</router-link> 
        <template slot="time">
          {{ 'Posted '+ fetchItems.time_ago }}
        </template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchItems.title }}</h2>
    </section>
    <section>
      <div v-html="fetchItems.content" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
  name: 'ItemView',
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['fetchItems'])
  },
  created(){
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>
  .user-container{
    display:flex;
    align-content: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 2.5rem
  }
  .user-description {
    padding-left: 8px;
  }
  .time {font-size: 0.7rem; }
</style>