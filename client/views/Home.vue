<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-stethoscope proced"></i> Procedimentos</p>
          <p class="subtitle">{{ procedCount }}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-heartbeat exame"></i> Exames</p>
          <p class="subtitle">{{ examCount }}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-user-md"></i> Cirurgias</p>
          <p class="subtitle">{{ surgeryCount }}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-calendar calendar"></i> Agenda</p>
          <p class="subtitle">{{ scheduleCount }}</p>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Agenda - <datepicker v-model="value" placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true, defaultDate: today }"></datepicker></h4>
          <table class="table">
            <thead>
            <tr>
              <th>Hora</th>
              <th>Paciente</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="list in schedule">
                <td>{{list.tbHora.substring(0, 5)}}</td>
                <td>{{list.tbNome}}</td>
                <td class="is-icon">
                  <a href="#">
                    <div v-if="list.tbNome !== undefined">
                      <tooltip label="top" placement="top">
                        <div class="has-text-centered">
                          <i class="fa fa-heartbeat" :class="{ type1: list.tbTipo == 1, type2: list.tbTipo == 2, type3: list.tbTipo == 3, type4: list.tbTipo == 4 }"></i>
                        </div>
                      </tooltip>
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>

    <div class="chart">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-6">
          <article class="tile is-child box">
            <h4 class="title">Convênios</h4>
            <div class="content">
              <div id="grafico">

              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-6">
          <article class="tile is-child box">
            <h4 class="title">Tipo</h4>
            <div class="content">
              <chart-new :categories="categoriesTipo"></chart-new>
            </div>
          </article>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Chart from 'vue-bulma-chartjs'
  import Datepicker from 'vue-bulma-datepicker'
  import Tooltip from 'vue-bulma-tooltip'
  import API_URL from '../../config/dev.env'
  import moment from 'moment'
  import _ from 'lodash'
  import Highcharts from 'highcharts'
  import ChartNew from '../components/charts/Charts'

  moment.locale('pt-BR')

  const api = API_URL.API_URL + ':8091/teste'

  export default {
    components: {
      Chart,
      Datepicker,
      Tooltip,
      ChartNew
    },
    data () {
      return {
        schedule: [],
        value: '',
        counter: 0,
        client: 0,
        crm: 0,
        scheduleCount: 0,
        examCount: 0,
        procedCount: 0,
        surgeryCount: 0,
        categoriesTipo: 0,
        valuesTipo: 0
      }
    },
    methods: {
      loadData (client, crm, date) {
        this.schedule = []
        this.$db.ref('server/customer/' + client + '/service/schedule/professional/' + crm + '/date/' + date).on('value', data => {
          const obj = data.val()
          if (obj !== null) {
            this.schedule = []
            this.scheduleCount = 0 + !obj.scheduleTotal ? 0 : obj.scheduleTotal
            this.examCount = 0 + !obj.examCount ? 0 : obj.examCount
            this.procedCount = 0 + !obj.countProced ? 0 : obj.countProced
            this.surgeryCount = 0 + !obj.surgeryCount ? 0 : obj.surgeryCount
            this.schedule = !obj.list ? [] : obj.list
            const convenios = this.schedule.map(item => item.tbConvenio)
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

            const tipos = this.schedule.map(item => item.tbTipo)
            const dataTipos = tipos.filter(function (element) {
              return element !== undefined
            })
            const baseTipos = _(dataTipos)
              .countBy()
              .map((value, key) => ({ key, value }))
              .orderBy(['value'], ['desc'])
              .value()
            this.categoriesTipo = baseTipos.map(item => item.key)
            this.valuesTipos = baseTipos.map(item => item.value)
            console.log(this.categoriesTipos)
          }
        })
      },
      setup (obj) {
        const { categories, values } = obj
        Highcharts.chart('grafico', {
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
    },
    computed: {
      today () {
        return new Date()
      }
    },
    mounted () {
      this.crm = this.$store.state.user.crm
      this.client = this.$store.state.user.client

      this.value = moment().format('L')
    },
    watch: {
      value (newVal, oldVal) {
        const dateDb = newVal.substring(3, 5) + '-' + newVal.substring(0, 2) + '-' + newVal.substring(6, 10)
        /*
        * Chama os dados para a tela do agendamento
        */
        this.loadData(this.client, this.crm, dateDb)

        // console.log(newVal, oldVal)
        this.$http({
          url: api,
          transformResponse: [(data) => {
            return JSON.parse(data.replace(/T00:00:00/g, ''))
          }],
          params:
          {
            id: this.$store.state.user.id,
            client: this.$store.state.client,
            crm: this.$store.state.user.crm,
            date: this.value.substring(3, 5) + '/' + this.value.substring(0, 2) + '/' + this.value.substring(6, 10)
          }
        }).then((response) => {
          // console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .none {
    display: none;
  }
  .tooltip {
    display: inherit;
  }
  .table-responsive {
    display: block;
    width: 100%;
    min-height: .01%;
    overflow-x: auto;
  }
  .subtitle {
    text-align: right;
  }
  .proced {
    color: #4169E1;
  }
  .exame {
    color: #CD5C5C;
  }
  .calendar {
    color: #1E90FF;
  }
  .money{
    color: #8FBC8F;
  }
  .type1 {
    color: #4169E1;
  }
  .type2 {
    color: #CD5C5C;
  }
  .type3 {
    color: #1E90FF;
  }
  .type4{
    color: #8FBC8F;
  }

</style>
