<template>
  <div class="">
    <h4>Proce</h4>
    <datepicker v-model="dateStr" placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true, defaultDate: today }"></datepicker>
    <datepicker v-model="dateEnd" placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true, defaultDate: today }"></datepicker>
    <button @click="teste">Teste</button>
    <button @click="boa">Boa</button>
    <hr />
    <chart></chart>
  </div>
</template>

<script>
  import Datepicker from 'vue-bulma-datepicker'
  import moment from 'moment'
  import API_URL from '../../../config/dev.env'
  const api = API_URL.API_URL + ':8091/procedone'
  import Chart from '../../components/charts/proce/ProcePie'
  import { mapActions } from 'vuex'

  moment.locale('pt-BR')

export default {
    name: 'ProceDone',
    components: {
      Datepicker,
      Chart
    },
    mounted () {
      this.dateStr = moment().format('L')
      this.dateEnd = moment().format('L')
    },
    data () {
      return {
        dateStr: '',
        dateEnd: ''
      }
    },
    computed: {
      today () {
        return new Date()
      }
    },
    methods: {
      ...mapActions(['setProceDoneList']),
      boa () {
        this.$db.ref('server/customer/' + 503 + '/service/proceDone/professional/' + 34183 + '/').on('value', data => {
          const obj = data.val()
          if (obj !== null) {
            this.setProceDoneList(obj)
          }
        })
      },
      teste () {
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
            dateStr: this.dateStr.substring(3, 5) + '/' + this.dateStr.substring(0, 2) + '/' + this.dateStr.substring(6, 10),
            dateEnd: this.dateEnd.substring(3, 5) + '/' + this.dateEnd.substring(0, 2) + '/' + this.dateEnd.substring(6, 10)
          }
        }).then((response) => {

        }).catch((error) => {
          console.log(error)
        })
      }
    }
}
</script>

<style lang="scss">
</style>
