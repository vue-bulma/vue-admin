<template lang="html">
  <div class="">
    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <article class="tile is-child box">
        <h1 class="title"></h1>
        <div class="block">

          <div class="control is-grouped">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Expanded and Grouped" v-model="patient">
            </p>
            <p class="control">
              <a class="button is-info" @click="find()">
                Search
              </a>
            </p>
          </div>

          <table class="table">
            <thead>
            <tr>
              <th>Hora</th>
              <th>Paciente</th>
              <th>Dt Nasc.</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="list in patients">
                <td>{{list.tbCodigo}}</td>
                <td>{{list.tbNome}}</td>
                <td>{{list.tbDtNasc}}</td>
              </tr>
            </tbody>
          </table>


          <label class="label">Message</label>
          <p class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </p>

        </div>
      </article>
     </div>
   </div>
  </div>
</template>

<script>
  import API_URL from '../../../../config/dev.env'
  const api = API_URL.API_URL + ':8091/patients/find'

  export default {
    name: 'Record',
    data () {
      return {
        patient: null,
        patients: []
      }
    },
    methods: {
      find () {
        this.$http({
          url: api,
          transformResponse: [(data) => {
            return JSON.parse(data.replace(/T00:00:00/g, ''))
          }],
          params:
          {
            patient: this.patient
          }
        }).then((response) => {
          this.patients = []

          this.$db.ref('server/customer/' + 503 + '/service/patient/').on('value', data => {
            const obj = data.val()
            if (obj !== null) {
              this.patients = obj
            }
          })
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
