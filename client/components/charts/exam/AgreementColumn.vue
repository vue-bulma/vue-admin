<template>
  <div id="graficoConvenios"></div>
</template>

<script>
  import Highcharts from 'highcharts'
  import { mapGetters, mapState } from 'vuex'
  import _ from 'lodash'

  export default {
    name: 'Charts-Convenios',
    computed: {
      ...mapState({
        list: state => state.scheduleList
      }),
      ...mapGetters({
        scheduleList: 'scheduleList'
      })
    },
    props: ['categories', 'value'],
    watch: {
      list () {
        this.dataSource()
      }
    },
    methods: {
      dataSource () {
        const convenios = !this.scheduleList ? [] : this.scheduleList.map(item => item.tbConvenio)
        const data = convenios.filter(function (element) {
          return element !== undefined
        })
        const base = _(data)
          .countBy()
          .map((value, key) => ({ key, value }))
          .orderBy(['value'], ['desc'])
          .value()
        const categories = base.map(item => item.key)
        const values = base.map(item => item.value)
        this.setup({ categories, values })
      },
      setup (obj) {
        const { categories, values } = obj
        Highcharts.chart('graficoConvenios', {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Convênios'
          },
          subtitle: {
            text: 'Fonte: Risc Sistemas em Saúde'
          },
          xAxis: {
            categories: categories,
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Quantidade'
            }
          },
          series: [{
            name: 'Quantidade',
            data: values

          }]
        })
      }
    }
  }
</script>
