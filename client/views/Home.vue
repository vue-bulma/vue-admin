<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">One</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Two</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Three</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title"><i class="fa fa-android"></i></p>
          <p class="subtitle">3453</p>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Agenda - <datepicker v-model="value" placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true, defaultDate: today }"></datepicker></h4>
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
              <thead>
              <tr>
                <th>Hora</th>
                <th>Nome</th>
                <th>Tipo</th>
              </tr>
              </thead>
              <tbody v-for="list in schedule">
              <tr v-for="result in list[503].service.schedule.professional[34183]">
                <td>{{result.tbHora}}</td>
                <td>{{result.tbNome}}</td>
                <td>{{result.tbTipo}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Five</h4>
          <div class="content">
            <chart :type="'doughnut'" :data="chartData"></chart>
          </div>
        </article>
      </div>
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h4 class="title">Six</h4>
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

  const api = 'http://localhost:8089/teste'

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
        counter: 0
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
            'Red',
            'Blue',
            'Yellow'
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
        console.log(newVal, oldVal)
        this.$http({
          url: api,
          transformResponse: [(data) => {
            return JSON.parse(data.replace(/T00:00:00/g, ''))
          }],
          params:
          {
            id: 1,
            client: 503,
            crm: 34183,
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
</style>
