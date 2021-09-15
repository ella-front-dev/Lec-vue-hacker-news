<template>
  <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
</template>

<script>
import { Chart, LinearScale, LineController, LineElement, PointElement, Title} from 'chart.js';
Chart.register( LinearScale,LineController, LineElement, PointElement, Title);

export default {
mounted(){
    // 인스턴트가 화면에 붙고 나서 실행되어야하믄로 mouted 훅 사용
    //var ctx = document.getElementById('lineChart');
    var myChart = this.$_Chart(this.$refs.lineChart, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: 'My Color',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
        },
        options: {
          plugins: {
            title: {
                display: true,
                text: 'My Color'
            }
          },
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
    });
    console.log(myChart)
  }
}
</script>

<style>

</style>