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
          <h4 class="title">
            <datepicker v-model="value" :inputClass="{ test: true }" :config="{ wrap: true, dateFormat: 'd/m/Y', static: true, defaultDate: today }">
              <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
              <a class="button" data-clear><i class="fa fa-close"></i></a>
            </datepicker>
          </h4>

          <notification :title="'Bloqueio de horários'" :type="'primary'" :direction="'Right'" :message="'Para bloquear ou desbloquear a agenda click sobre o hora'" :duration="4000"></notification>

          <div class="table-responsive">
            <table class="table" v-show="scheduleEmpty">
            <thead>
            <tr>
              <th align="center">Status</th>
              <th>Hora</th>
              <th>Paciente</th>
              <!-- <th>Bloquear</th> -->
              <th class="has-text-centered">Tipo</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="list in schedule">
                <td class="is-icon">
                  <a href="#" @click.prevent="">
                    <div v-if="list.tbNome !== undefined">
                      <tooltip :label="nameStatus(list.tbStatus)" placement="top">
                        <div class="has-text-centered">
                          <i :class="iconStatus(list.tbStatus)"></i>
                        </div>
                      </tooltip>
                    </div>
                  </a>
                </td>

                <td>
                  <div v-if="list.tbTipo !== '9'">
                    <div v-if="list.tbNome === undefined">
                      <!-- <tooltip label="Bloquear" placement="rigth"> -->
                        <!-- <div class="has-text-centered"> -->
                        <a href="#" @click.prevent="block(list)">{{list.tbHora.substring(0, 5)}}</a>
                        <!-- </div> -->
                      <!-- </tooltip> -->
                    </div>
                  </div>
                  <div v-if="list.tbNome === '**HORÁRIO BLOQUEADO**'">
                    <!-- <tooltip label="Desbloquear" placement="rigth"> -->
                      <!-- <div class="has-text-left"> -->
                        <a href="#" @click.prevent="unBlock(list)" class="unlock">{{list.tbHora.substring(0, 5)}}</a>
                      <!-- </div> -->
                    <!-- </tooltip> -->
                  </div>
                  <div v-if="list.tbNome !== '**HORÁRIO BLOQUEADO**'">
                    <div v-if="list.tbNome !== undefined" >
                      <p>{{list.tbHora.substring(0, 5)}}</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div v-if="list.tbNome !== undefined">
                    <p class="title is-6"> <a href="#" @click.prevent="recordModal(list)">{{ list.tbNome }}</a></p>
                  </div>
                </td>
                <!-- <td>
                  <div v-if="list.tbNome === undefined">
                    <a href="#" @click.prevent="block(list)">Bloquear</a>
                  </div>
                  <div v-if="list.tbNome === '**HORÁRIO BLOQUEADO**'">
                    <a href="#" @click.prevent="unBlock(list)">Desbloquear</a>
                  </div>
                </td> -->
                <td class="is-icon">
                  <a href="#" @click.prevent="">
                    <div v-if="list.tbNome !== undefined">
                      <tooltip :label="nameType(list.tbTipo)" placement="top">
                        <div class="has-text-centered">
                          <i :class="iconType(list.tbTipo)"></i>
                        </div>
                      </tooltip>
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>

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

    <modal name="hello-world" height="auto" :scrollable="true" :width="300" @before-close="beforeClose">
      <!-- <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <div class="block is-flex">
            <collapse>
              <div class="" v-for="list in recordList">
                <collapse-item :title="list.tbNomeMedico" >
                  <p class="title is-6">{{list.tbDescricao}}</p>
                </collapse-item>
              </div>
            </collapse>
          </div>
        </article>
      </div> -->
      <table class="table">
        <thead>
        <tr>
          <th>Nome</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="list in recordList">
            <td>
              <p class="title is-6">{{list.tbData}} - {{list.tbNomeMedico}}</p>
              <br />
              <p class="title is-6">{{list.tbDescricao}}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- {{recordList}} -->
    </modal>

    <!-- <modal :visible="showModal" @close="closeModalBasic" :desc="contentModal" :name="nameModal"></modal> -->

  </div>
</template>

<script>
  import Chart from 'vue-bulma-chartjs'
  import Datepicker from 'vue-bulma-datepicker'
  import Tooltip from 'vue-bulma-tooltip'
  import API_URL from '../../../config/dev.env'
  import moment from 'moment'
  import ChartAgreement from '../../components/charts/schedule/AgreementColumn'
  import ChartType from '../../components/charts/schedule/Type'
  import { mapActions, mapGetters } from 'vuex'
  // import Modal from '../client/record/modals/Modal'
  import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'

  import Vue from 'vue'
  import Notification from 'vue-bulma-notification'

  const NotificationComponent = Vue.extend(Notification)

  const openNotification = (propsData = {
    title: '',
    message: '',
    type: '',
    direction: '',
    duration: 4500,
    container: '.notifications'
  }) => {
    return new NotificationComponent({
      el: document.createElement('div'),
      propsData
    })
  }

  moment.locale('pt-BR')
  // console.log(moment().format('DD/MM/YYYY'))

  const api = API_URL.API_URL

  export default {
    name: 'Schedule',
    components: {
      Chart,
      Datepicker,
      Tooltip,
      ChartType,
      ChartAgreement,
      // Modal,
      Notification,
      Collapse,
      CollapseItem
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
        showModal: false,
        contentModal: '',
        nameModal: '',
        records: ''
      }
    },
    methods: {
      ...mapActions(['setScheduleList', 'setRecord']),
      openNotificationWithType (type) {
        openNotification({
          title: 'This is a title',
          message: 'This is the message.',
          type: type
        })
      },
      beforeClose (event) {
        console.log(event)
        this.setRecord([])
      },
      record (record) {
        this.$http({
          url: api + '/records/list',
          transformResponse: [(data) => {
            return JSON.parse(data.replace(/T00:00:00/g, ''))
          }],
          params:
          {
            tbCodigo: record.tbFicha,
            tbNome: '',
            client: window.localStorage.getItem('client'),
            tbMedico: window.localStorage.getItem('crm')
          }
        }).then((response) => {
          this.records = []
          this.$db.ref('server/customer/' + window.localStorage.getItem('client') + '/service/records/doctor/' + window.localStorage.getItem('crm') + '/').on('value', data => {
            const obj = data.val()
            if (obj !== null) {
              this.setRecord(obj)
            }
          })
        }).catch((error) => {
          console.log(error)
        })
      },
      recordModal (list) {
        if (list.tbFicha === undefined) {
          return false
        }
        this.record(list)
        this.$modal.show('hello-world')
        // this.record(list)
        // this.showModal = true
        // this.contentModal = '' // this.records
        // this.nameModal = list.tbNome
      },
      closeModalBasic () {
        this.showModal = false
      },
      unBlock (list) {
        this.$http({
          url: api + '/schedules/unblock',
          transformResponse: [(data) => {
            return JSON.parse(data.replace(/T00:00:00/g, ''))
          }],
          params:
          {
            client: window.localStorage.getItem('client'),
            tbMedico: window.localStorage.getItem('crm'),
            tbData: list.tbData,
            tbHora: list.tbHora,
            tbTipo: list.tbTipo,
            tbNome: list.tbNome
          }
        }).then((response) => {
          const dateDb = this.value.substring(3, 5) + '-' + this.value.substring(0, 2) + '-' + this.value.substring(6, 10)
          this.loadData(this.client, this.crm, dateDb)
          // this.$db.ref('server/customer/' + window.localStorage.getItem('client') + '/service/records/doctor/' + window.localStorage.getItem('crm') + '/').on('value', data => {
          //   const obj = data.val()
          //   if (obj !== null) {
          //     this.records = obj
          //   }
          // })
        }).catch((error) => {
          console.log(error)
        })
      },
      block (list) {
        this.$http({
          url: api + '/schedules/block',
          transformResponse: [(data) => {
            return JSON.parse(data.replace(/T00:00:00/g, ''))
          }],
          params:
          {
            client: window.localStorage.getItem('client'),
            tbMedico: window.localStorage.getItem('crm'),
            tbData: list.tbData,
            tbHora: list.tbHora
          }
        }).then((response) => {
          const dateDb = this.value.substring(3, 5) + '-' + this.value.substring(0, 2) + '-' + this.value.substring(6, 10)
          setTimeout(() => {
            this.loadData(this.client, this.crm, dateDb)
          }, 3000)
          // this.$db.ref('server/customer/' + window.localStorage.getItem('client') + '/service/records/doctor/' + window.localStorage.getItem('crm') + '/').on('value', data => {
          //   const obj = data.val()
          //   if (obj !== null) {
          //     this.records = obj
          //   }
          // })
        }).catch((error) => {
          console.log(error)
        })
      },
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
      },
      nameStatus (status) {
        let nameStatus = ''
        if (status === 0) {
          nameStatus = ''
        } else if (status === 1) {
          nameStatus = 'Não Chegou'
        } else if (status === 2) {
          nameStatus = 'Em Espera'
        } else if (status === 3) {
          nameStatus = 'Desmarcou'
        } else if (status === 4) {
          nameStatus = 'Atendido'
        } else if (status === 5) {
          nameStatus = 'Atrasado'
        } else if (status === 6) {
          nameStatus = 'Esperado'
        } else if (status === 8) {
          nameStatus = 'Encaminhando'
        } else if (status === 11) {
          nameStatus = 'Faltou'
        } else if (status === 12) {
          nameStatus = 'Paciente confirmou SMS'
        }
        return nameStatus
      },
      nameType (type) {
        let nameType = ''
        if (type === '0') {
          nameType = 'Primeira Consulta'
        } else if (type === '1') {
          nameType = 'Consulta'
        } else if (type === '2') {
          nameType = 'Exame'
        } else if (type === '3') {
          nameType = 'Retorno'
        } else if (type === '4') {
          nameType = 'Cirurgia'
        } else if (type === '5') {
          nameType = 'web'
        }
        return nameType
      },
      iconStatus (status) {
        let iconClass = ''
        if (status === 1) {
          iconClass = ''
        } else if (status === 2) {
          iconClass = 'fa fa-check'
        } else if (status === 3) {
          iconClass = 'fa fa-close vermelho'
        } else if (status === 4) {
          iconClass = 'fa fa-user-circle preto'
        } else if (status === 5) {
          iconClass = 'fa fa-clock-o'
        } else if (status === 6) {
          iconClass = 'fa fa-group'
        } else if (status === 8) {
          iconClass = 'fa fa-child'
        } else if (status === 9) {
          iconClass = 'fa fa-key'
        } else if (status === 11) {
          iconClass = 'fa fa-close vermelho'
        } else if (status === 12) {
          iconClass = 'fa fa-send'
        }
        return iconClass
      },
      iconType (type) {
        let iconClass = ''
        if (type === '0') {
          iconClass = 'fa fa-exclamation type4'
        } else if (type === '1') {
          iconClass = 'fa fa-plus'
        } else if (type === '2') {
          iconClass = 'fa fa-book exame'
        } else if (type === '3') {
          iconClass = 'fa fa-arrow-left type3'
        } else if (type === '4') {
          iconClass = 'fa fa-user-md'
        } else if (type === '5') {
          iconClass = 'fa fa-cloud'
        }
        return iconClass
      }
    },
    computed: {
      today () {
        // moment().format('DD/MM/YYYY')
        return new Date()
      },
      ...mapGetters({
        device: 'device',
        user: 'user',
        recordList: 'recordList'
      })
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
          url: api + '/schedules/schedule',
          transformResponse: [(data) => {
            return JSON.parse(data.replace(/T00:00:00/g, ''))
          }],
          params:
          {
            id: this.$store.state.user.id,
            client: window.localStorage.getItem('client'),
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
  .table-responsive {
    // display: block;
    // width: 100%;
    // min-height: .01%;
    // overflow-x: auto;
  }
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
  .vermelho {
    color: #FF0000
  }
  .preto {
    color: #000000
  }
  .lock {
    margin-left: -89px;
  }

</style>
