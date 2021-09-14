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
}
</script>