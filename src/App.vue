<template>
  <div>
    <div>
      <h2> slot을 이용하지 않은 방법</h2>
      <ul>
        <not-slot-item v-for="(item, index) in items" :key="index" :item="item"></not-slot-item>
      </ul>
    </div>
    <div>
      <h2>slot을 사용한 벙법</h2>
      <ul>
        <item v-for="(item, index) in items" :key="index">{{ item }}</item>
      </ul>
    </div>
    <div>
      <h2>slot의 유용한 활용</h2>
      <item>
        아이템1
      </item>
      <item>
        <h3>버튼 추가</h3>
        <div>
          아이템 2
          <button type="button">click</button>
        </div>
      </item>
      <item>
        <h3>이미지 추가</h3>
        <div>
          아이템3
        </div>
        <img src="./assets/endgame.png" alt="엔드게임" style="width: 100px">
      </item>
      <item>
        <h3>스타일을 상위 컴포넌트에서 지정 가능</h3>
        <div style="color: blue; font-size: 30px;">
          아이템4
        </div>
      </item>
    </div>
  </div>
</template>

<script>
import Item from './components/Item.vue';
import NotSlotItem from './components/NotSlotItem'
export default {
  components: {
    Item,
    NotSlotItem
  },
  data(){
    return {
      items: [ '아이템1','아이템2','아이템3','아이템4', '아이템5']
    }
  },
}
</script>
