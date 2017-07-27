<template>
  <div class="">
    <div id="chartProceDone"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts'
  import { mapState } from 'vuex'
  import _ from 'lodash'

  export default {
    name: 'Charts-Proce',
    computed: mapState({
      list: state => state.proceDoneList
    }),
    props: ['categories', 'value'],
    watch: {
      list () {
        this.dataSource()
      }
    },
    methods: {
      dataSource () {
        if (this.list === undefined) {
          // return
        }
        const convenios = this.list.map(item => item.tbConvenio)
        const data = convenios.filter(function (element) {
          return element !== undefined
        })
        const base = _(data)
          .countBy()
          .map((y, name) => ({ y, name }))
          .orderBy(['y'], ['desc'])
          .value()

        const subset = base.slice(0, 5)

        const total = subset.reduce((acc, item) => {
          return acc + item.y
        }, 0)

        const finalData = subset.map(item => {
          item.y = (item.y / total) * 100
          return item
        })

        this.setup({ finalData })
      },
      setup (obj) {
        const { finalData } = obj
        Highcharts.chart('chartProceDone', {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: 'Convênios'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
              }
            }
          },
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: finalData
          }]
        })
      }
    }
  }
</script>
