<template>
  <div> 
   <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem'
import ListMixin from '../mixins/ListMixin.js'

export default {
  name:"AskView",
  mixins: [ListMixin],
  components: {
    ListItem
  },
}
</script>