<template>
  <div id="graficoTipos"></div>
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
        const tipos = !this.list ? [] : this.scheduleList.map(item => item.tbTipo)
        const dataTipos = tipos.filter(function (element) {
          return element !== undefined
        })
        const baseTipos = _(dataTipos)
          .countBy()
          .map((value, key) => ({ key, value }))
          .orderBy(['value'], ['desc'])
          .value()

        let teste = []
        const categoriesTipos = baseTipos.map(item => item.key)
        const valuesTipos = baseTipos.map(item => item.value)
        categoriesTipos.forEach(function (value) {
          switch (value) {
            case '0':
              teste.push('Primeira consulta')
              break
            case '1':
              teste.push('Consulta')
              break
            case '2':
              teste.push('Exame')
              break
            case '3':
              teste.push('Retorno')
              break
            case '4':
              teste.push('Cirurgia')
              break
            case '5':
              teste.push('Agendamento web')
              break
            case '9':
              teste.push('**Agenda Bloqueada**')
              break
          }
        })
        this.setup({teste, valuesTipos})
      },
      setup (obj) {
        const { teste, valuesTipos } = obj
        Highcharts.chart('graficoTipos', {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Tipos'
          },
          subtitle: {
            text: 'Fonte: Risc Sistemas em Saúde'
          },
          xAxis: {
            categories: teste,
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
            data: valuesTipos
          }]
        })
      }
    }
  }
</script>
