<template lang="html">
  <div class="">
    <nprogress-container></nprogress-container>
    <div class="content has-text-centered">

      <div class="columns is-vcentered">
        <div class="column">
        <article class="tile is-child box">
        <h1 class="title"></h1>
        <div class="block">

          <div class="control is-grouped">
            <p class="control is-expanded">
              <input @keyup.enter @click="find()" class="input" type="text" placeholder="Prontuário - Nome - CPF - Dt Nasc." v-model="patient">
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
                <td><a href="#" @click.prevent="record(list)">{{list.tbCodigo}}</a></td>
                <td><a href="#" @click.prevent="record(list)">{{list.tbNome}}</a></td>
                <td><a href="#" @click.prevent="record(list)">{{list.tbDtNasc}}</a></td>
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
                <td>
                    {{list.tbDescricao}}
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </article>
     </div>
   </div>
 </div>
  </div>
</template>

<script>
  import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
  import Quill from 'vue-bulma-quill'
  import API_URL from '../../../../config/dev.env'
  const api = API_URL.API_URL + ':8091/patients/find'

  export default {
    name: 'Record',
    components: {
      NprogressContainer,
      Quill
    },
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
            tbNome: record.tbNome,
            client: window.localStorage.getItem('client'),
            tbMedico: window.localStorage.getItem('crm')
          }
        }).then((response) => {
          this.records = []
          this.$db.ref('server/customer/' + window.localStorage.getItem('client') + '/service/records/').on('value', data => {
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

<style lang="styl">
  @import "~quill/assets/snow"
</style>
