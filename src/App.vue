<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <div slot-scope="{response, loading}">
        <!-- 여기서만  response, loading 를 쓸 수 있다.-->
        <div v-if="!loading">
          <p>{{ response.name }}</p>
          <p>{{ response.email }}</p>
        </div>
        <div v-if="loading">
          Loading....
        </div>
      </div>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue'
export default {
  components: {
    FetchData
  },
}
</script>