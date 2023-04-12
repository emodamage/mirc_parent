<template>
  <div>
    <div ref="echarts" style="width: 800px; height: 400px;">
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'BaiduTestEcharts',

  data() {
    return {
      
    };
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      const myChart = echarts.init(this.$refs.echarts)
      const option = {
        legend: {},
        tooltip: {
          trigger: 'axis',

          // 提示框自定义
          // formatter: `
          //   {a} {a1}<br> test1 test2
          //   {b} {b1}<br> Mon Mon ...
          //   {c} {c1}  120 120 ...
          // `
          formatter(params) {
            // console.log(params)
            // let tip = `
            //   提示框<br>
            //   ${params[0].marker} ${params[0].axisValue} ${params[0].seriesName} ${params[0].data}<br>
            //   ${params[1].marker} ${params[1].axisValue} ${params[1].seriesName} ${params[1].data}
            // `
            let tip = `
              提示框<br>
            `
            params.forEach(item => {
              tip += `${item.marker} ${item.axisValue} ${item.seriesName} ${item.data}<br>`
            })

            return tip
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            // 文字倾斜
            rotate: 30
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'test1',
            data: [120, 20, 50, 80, 70, 110, 130],
            type: 'bar'
          },
          {
            name: 'test2',
            data: [120, 200, 150, 80, 70, 110, 230],
            type: 'bar'
          }
        ]
      }
      myChart.setOption(option)
    }
  },
};
</script>

<style lang="scss" scoped>

</style>