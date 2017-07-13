<template>
  <div class="">
    <h4>Exames</h4>
    <datepicker v-model="dateStr" placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true, defaultDate: today }"></datepicker>
    <datepicker v-model="dateEnd" placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true, defaultDate: today }"></datepicker>
    <button @click="teste" class="button is-primary">Exames</button>
    <hr />
    <chart></chart>
  </div>
</template>

<script>
  import Datepicker from 'vue-bulma-datepicker'
  import moment from 'moment'
  import API_URL from '../../../config/dev.env'
  const api = API_URL.API_URL + ':8091/examsdone'
  import Chart from '../../components/charts/exam/ExamPie'
  import { mapActions } from 'vuex'

  moment.locale('pt-BR')

export default {
    name: 'ExamsDone',
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
      ...mapActions(['setExamDoneList']),
      boa () {
        this.$db.ref('server/customer/' + this.$store.state.user.client + '/service/examsDone/professional/' + this.$store.state.user.crm + '/').on('value', data => {
          const obj = data.val()
          if (obj !== null) {
            console.log(obj)
            this.setExamDoneList(obj)
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
            id: this.$store.state.user.id,
            client: this.$store.state.user.client,
            crm: this.$store.state.user.crm,
            dateStr: this.dateStr.substring(3, 5) + '/' + this.dateStr.substring(0, 2) + '/' + this.dateStr.substring(6, 10),
            dateEnd: this.dateEnd.substring(3, 5) + '/' + this.dateEnd.substring(0, 2) + '/' + this.dateEnd.substring(6, 10)
          }
        }).then((response) => {
          this.boa()
        }).catch((error) => {
          console.log(error)
        })
      }
    }
}
</script>

<style lang="scss">
</style>
