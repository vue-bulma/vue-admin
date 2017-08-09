<template lang="html">
  <div class="">
    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <article class="tile is-child box">
        <h1 class="title"></h1>
        <div class="block">

          <div class="control is-grouped">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Prontuário - Nome - CPF - Dt Nasc." v-model="patient">
            </p>
            <p class="control">
              <a class="button is-primary" @click="find()">
                Buscar
              </a>
            </p>
          </div>

          <table class="table">
            <thead>
            <tr>
              <th></th>
              <th>Ficha</th>
              <th>Nome</th>
              <th>Dt Nasc.</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="list in patients">
                <td><a href="#" @click.prevent="record(list)">Selecionar</a></td>
                <td>{{list.tbCodigo}}</td>
                <td>{{list.tbNome}}</td>
                <td>{{list.tbDtNasc}}</td>
              </tr>
            </tbody>
          </table>

          <table class="table">
            <thead>
            <tr>
              <th>Prontuário</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="list in records">
                <td>{{list.tbDescricao}}</td>
              </tr>
            </tbody>
          </table>

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
        patients: [],
        records: []
      }
    },
    methods: {
      record (record) {
        this.patients = [record]
        this.$http({
          url: 'http://localhost:8091/records/list',
          transformResponse: [(data) => {
            return JSON.parse(data.replace(/T00:00:00/g, ''))
          }],
          params:
          {
            tbCodigo: record.tbCodigo,
            tbNome: record.tbNome
          }
        }).then((response) => {
          this.records = []

          this.$db.ref('server/customer/' + 503 + '/service/records/').on('value', data => {
            const obj = data.val()
            if (obj !== null) {
              this.records = obj
            }
          })
        }).catch((error) => {
          console.log(error)
        })
      },
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
