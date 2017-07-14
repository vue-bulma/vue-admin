<template>
  <div class="">
    <!-- <h4>Exames</h4> -->
      <datepicker v-model="dateRange" placeholder="Selecione a data inicial e final" :config="{ mode: 'range' }"></datepicker>
    <!--
    <datepicker v-model="dateStr" placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true, defaultDate: today }"></datepicker>
    <datepicker v-model="dateEnd" placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true, defaultDate: today }"></datepicker>
    -->
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
        dateEnd: '',
        dateRange: ''
      }
    },
    computed: {
      today () {
        return new Date()
      }
    },
    watch: {
      // dateStr (newVal, oldVal) {
      //   this.setData()
      // },
      // dateEnd (newVal, oldVal) {
      //   this.setData()
      // },
      dateRange (newVal, oldVal) {
        if (newVal.length === 24) {
          this.setData()
        }
      }
    },
    methods: {
      ...mapActions(['setExamDoneList']),
      getData () {
        this.$db.ref('server/customer/' + this.$store.state.user.client + '/service/examsDone/professional/' + this.$store.state.user.crm + '/').on('value', data => {
          const obj = data.val()
          if (obj !== null) {
            this.setExamDoneList(obj)
          }
        })
      },
      setData () {
        this.dateStr = this.dateRange.substring(0, 10)
        this.dateEnd = this.dateRange.substring(14, 24)
        this.dateStr = this.dateStr.substring(5, 7) + '/' + this.dateStr.substring(8, 10) + '/' + this.dateStr.substring(0, 4)
        this.dateEnd = this.dateEnd.substring(5, 7) + '/' + this.dateEnd.substring(8, 10) + '/' + this.dateEnd.substring(0, 4)
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
            dateStr: this.dateStr,
            dateEnd: this.dateEnd
          }
        }).then((response) => {
          this.getData()
        }).catch((error) => {
          console.log(error)
        })
      }
    }
}
</script>

<style lang="scss">
</style>
