import { Chart, LinearScale, BarElement, BarController, CategoryScale,LineController, LineElement, PointElement, Title } from 'chart.js';
Chart.register( LinearScale,BarElement, BarController, CategoryScale, LineController, LineElement, PointElement, Title);

// 공통적으로 사용하고 있는 것들 
export default {

  install(Vue){
    Vue.prototype.$_Chart = Chart;
    // prototype:특정 메소드나 어떤 객체의 속성을 확장하는 것
      
    //App.vue
    this.$_Chart

    //LineChart.vue
    this.$_Chart
  }
}