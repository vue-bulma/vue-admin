<template>
  <div>
    <div class="tile is-ancestor" v-show="!device.isMobile">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-stethoscope proced"></i> Cons/Retorn</p>
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
          <table class="table" v-show="scheduleEmpty">
            <thead>
            <tr>
              <th>Status</th>
              <th>Hora</th>
              <th>Paciente</th>
              <th>Tipo</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="list in schedule">
                <td class="is-icon">
                  <a href="#">
                    <div v-if="list.tbNome !== undefined">
                      <div class="has-text-left">
                        <i :class="{ '': list.tbStatus == 1, 'fa fa-ok': list.tbStatus == 2, 'fa fa-ok': list.tbStatus == 3, 'fa fa-check': list.tbStatus == 4 }"></i>
                      </div>
                    </div>
                  </a>
                </td>
                <td>{{list.tbHora.substring(0, 5)}}</td>
                <td>{{list.tbNome}}</td>
                <td class="is-icon">
                  <a href="#">
                    <div v-if="list.tbNome !== undefined">
                      <tooltip label="Tipo" placement="top">
                        <div class="has-text-left">
                          <i :class="{ 'fa fa-user-md': list.tbTipo == 0, 'fa fa-stethoscope proced': list.tbTipo == 1, 'fa fa-heartbeat': list.tbTipo == 2, 'fa fa-arrow-left': list.tbTipo == 3, 'fa fa-plus-square': list.tbTipo == 4 }"></i>
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

    <div class="tile is-ancestor" v-show="!scheduleEmpty">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title scheduleEmpty">Não há agendamento para esta data</h4>
        </article>
      </div>
    </div>

    <div class="chart" v-show="scheduleEmpty">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-6">
          <article class="tile is-child box">
            <h4 class="title">Convênios</h4>
            <div class="content">
              <chart-agreement></chart-agreement>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-6">
          <article class="tile is-child box">
            <h4 class="title">Tipo</h4>
            <div class="content">
              <chart-type></chart-type>
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
  import ChartAgreement from '../components/charts/schedule/AgreementColumn'
  import ChartType from '../components/charts/schedule/Type'
  import { mapActions, mapGetters } from 'vuex'

  moment.locale('pt-BR')

  const api = API_URL.API_URL + ':8091/teste'

  export default {
    components: {
      Chart,
      Datepicker,
      Tooltip,
      ChartType,
      ChartAgreement
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
        valuesTipo: 0,
        scheduleEmpty: false,
        icone: ''
      }
    },
    methods: {
      ...mapActions(['setScheduleList']),
      loadData (client, crm, date) {
        this.schedule = []
        this.scheduleEmpty = false

        this.$db.ref('server/customer/' + client + '/service/schedule/professional/' + crm + '/date/' + date).on('value', data => {
          const obj = data.val()
          if (obj !== null) {
            this.schedule = []
            this.scheduleCount = 0 + !obj.scheduleTotal ? 0 : obj.scheduleTotal
            this.examCount = 0 + !obj.examCount ? 0 : obj.examCount
            this.procedCount = 0 + !obj.countProced ? 0 : obj.countProced
            this.procedCount += 0 + !obj.returnCount ? 0 : obj.returnCount
            this.surgeryCount = 0 + !obj.surgeryCount ? 0 : obj.surgeryCount
            this.schedule = !obj.list ? [] : obj.list
            if (obj.list !== undefined) {
              this.scheduleEmpty = true
            }

            this.setScheduleList(obj.list)
          }
        })
      }
    },
    computed: {
      today () {
        return new Date()
      },
      ...mapGetters({
        device: 'device',
        user: 'user'
      }),
      materialIconCode () {
        return '&#xE85E'
      },
      changeIconType1 () {
        return 'fa fa-bath'
      },
      changeIconType2 () {
        return 'fa fa-envelope-open'
      },
      icon () {
        let iconClass = ''
        this.schedule.forEach((item) => {
          if (item.tbStatus === 1) {
            iconClass = 'fa fa-bath'
            console.log('1', item.tbStatus)
          } else if (item.tbStatus === 2) {
            iconClass = 'fa fa-ok'
            console.log('2', item.tbStatus)
          } else if (item.tbStatus === 3) {
            iconClass = 'fa fa-ok'
            console.log('3', item.tbStatus)
          } else if (item.tbStatus === 4) {
            iconClass = 'fa fa-ok'
            console.log('4', item.tbStatus)
          }
        })
        return iconClass
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
  .scheduleEmpty {
    text-align: center;
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
