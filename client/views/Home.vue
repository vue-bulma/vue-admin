<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-stethoscope proced"></i> Proced</p>
          <p class="subtitle">32</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-heartbeat exame"></i> Exame</p>
          <p class="subtitle">10</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-calendar calendar"></i> Agenda</p>
          <p class="subtitle">15</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-money money"></i> Repasse</p>
          <p class="subtitle">R$ 3.453,00</p>
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
              <th></th>
            </tr>
            </thead>
            <tbody v-for="list in schedule">
            <tr v-for="result in list[client].service.schedule.professional[crm]">
              <td>{{result.tbHora.substring(0, 5)}}</td>
              <td>{{result.tbNome}}</td>
              <td class="is-icon">
                <a href="#">
                  <i class="fa fa-heartbeat" :class="{ type1: result.tbTipo == 1, type2: result.tbTipo == 2, type3: result.tbTipo == 3, type4: result.tbTipo == 4 }"></i>
                </a>
              </td>
            </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Convênios</h4>
          <div class="content">
            <chart :type="'doughnut'" :data="chartData"></chart>
          </div>
        </article>
      </div>
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Tipo</h4>
          <div class="content">
            <chart :type="'pie'" :data="chartData"></chart>
          </div>
        </article>
      </div>
    </div>

  </div>
</template>

<script>
  import Chart from 'vue-bulma-chartjs'
  import { map } from 'lodash'
  import Datepicker from 'vue-bulma-datepicker'

  let nowDate = new Date()
  let dd = nowDate.getDate()
  let mm = nowDate.getMonth() + 1
  let yyyy = nowDate.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  nowDate = dd + '/' + mm + '/' + yyyy

  const api = 'http://104.131.75.202:8089/teste'

  export default {
    components: {
      Chart,
      Datepicker
    },
    data () {
      return {
        data: [300, 50, 100],
        schedule: [],
        value: '',
        counter: 0,
        client: 1,
        crm: 1
      }
    },
    methods: {
      greet: function (event) {
        console.log('Hello ')
      }
    },
    computed: {
      today () {
        return new Date()
      },
      chartData () {
        return {
          labels: [
            'Unimed',
            'Amil',
            'Sul America'
          ],
          datasets: [{
            data: this.data,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ]
          }]
        }
      }
    },
    mounted () {
      this.$db.ref('server').on('value', data => {
        const obj = data.val()
        this.schedule = map(obj, schedule => schedule)
      })
      this.crm = this.$store.state.user.crm
      this.client = this.$store.state.user.client
      this.value = nowDate
      setInterval(() => {
        // https://github.com/vuejs/vue/issues/2873
        // Array.prototype.$set/$remove deprecated (use Vue.set or Array.prototype.splice instead)
        this.data.forEach((item, i) => {
          this.data.splice(i, 1, Math.ceil(Math.random() * 1000))
        })
      }, 100000)
    },
    watch: {
      value (newVal, oldVal) {
        console.log(this.$store.state.user)
        console.log(newVal, oldVal)
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
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
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
