<template>
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  props:[ 'propsdata' ],
  mounted(){
    // 인스턴트가 화면에 붙고 나서 실행되어야하믄로 mouted 훅 사용
    //var ctx = document.getElementById('barChart');
    var myChart = new this.$_Chart(this.$refs.barChart, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: this.propsdata
        },
        options: {
          plugins: {
            title: {
                display: true,
                text: '# of Votes'
            }
          },
          scales: {
            y: {
                beginAtZero: true
            }
          },
          // 이벤트 속성 (예시)
          onClick: function(){
            this.$emit('refresh:chart')
          }
        }
    });
    console.log(myChart)
  }
}
</script>

<style>

</style>