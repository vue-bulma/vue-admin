<template>
  <div class="">
    <datepicker v-model="dateStr" placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true, defaultDate: today }"></datepicker>
    <datepicker v-model="dateEnd" placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true, defaultDate: today }"></datepicker>
    <button @click="teste">Teste</button>
  </div>
</template>

<script>
  import Datepicker from 'vue-bulma-datepicker'
  import moment from 'moment'
  import API_URL from '../../../config/dev.env'
  const api = API_URL.API_URL + ':8091/procddone'

  moment.locale('pt-BR')

export default {
    name: 'ExamDone',
    components: {
      Datepicker
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
      teste () {
        console.log(moment(this.dateEnd, 'MM/DD/YYYY', true).format())
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
            dateStr: moment(this.dateStr).format('MM/DD/YYYY'),
            dateEnd: moment(this.dateEnd).format('MM/DD/YYYY')
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

<style lang="scss">
</style>
