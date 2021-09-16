<template>
  <div>
    <!-- slot 사용  -->
    <!-- <ul>
      <item>아이템 1</item>
      <item>아이템 2</item>
      <item>아이템 3</item>
      <item>아이템 4</item>
      <item>아이템 5</item>
    </ul> -->

    <!-- slot 사용 안함  -->
    <ul>
       <not-slot-item v-for="(item, index) in items" :key="index" :item="item"></not-slot-item>
    </ul>
  </div>
</template>

<script>
//import Item from './components/Item.vue';
import NotSlotItem from './components/NotSlotItem'
export default {
  components: {
    //Item,
    NotSlotItem
  },
  data(){
    return {
      items: [ '아이템1','아이템2','아이템3','아이템4', '아이템5']
    }
  },
}
</script>
