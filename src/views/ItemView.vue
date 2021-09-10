<template>
  <div>
    <section>
      <!-- 짛문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchItems.user}`">{{ fetchItems.user }}</router-link> 
          <div class="time">
            {{ fetchItems.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ fetchItems.title }}</h2>
    </section>
    <section>
      <div v-html="fetchItems.content" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ItemView',
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