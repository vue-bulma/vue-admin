<template lang="html">
  <div class="">
    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <article class="tile is-child box">
        <h1 class="title"></h1>
        <div class="block">

          <label class="label">{{data.labelUsername}}</label>
          <div class="control is-grouped">
            <p class="control is-expanded">
              <input class="input" :class="{'is-danger': !isValalidEmail}" type="email" placeholder="email@email.com" v-model="data.user.username" autofocus :disabled="client.isClient === true">

              <span class="help is-danger" v-show="!isValalidEmail">{{client.message}}</span>
            </p>
            <p class="control">
              <a class="button is-info" @click="searchEmail()" :disabled="client.isClient === true">
                Buscar E-Mail
              </a>
            </p>
          </div>

          <div class="" v-show="client.isClient">
            <label class="label">Cliente</label>
            <p class="control has-icon has-icon-right">
              <input class="input" :class="{'is-danger': !isValalidName}" type="text" placeholder="" v-model="data.user.client" disabled>
              <span class="icon is-small">
                <i class="fa fa-warning" v-show="!isValalidName"></i>
              </span>
              <span class="help is-danger" v-show="!isValalidName">Cliente inválido!</span>
            </p>

            <label class="label">Nome</label>
            <p class="control has-icon has-icon-right">
              <input autofocus class="input" :class="{'is-danger': !isValalidName}" type="text" placeholder="Nome" v-model="data.user.name">
              <span class="icon is-small">
                <i class="fa fa-warning" v-show="!isValalidName"></i>
              </span>
              <span class="help is-danger" v-show="!isValalidName">Nome inválido!</span>
            </p>

            <label class="label">CRM</label>
            <p class="control has-icon has-icon-right">
              <input class="input" v-on:keyup="keymonitor" :class="{'is-danger': !isValalidCRM}" type="text" placeholder="CRM" v-model="data.user.crm">
              <span class="icon is-small">
                <i class="fa fa-warning" v-show="!isValalidCRM"></i>
              </span>
              <span class="help is-danger" v-show="!isValalidCRM">CRM inválido!</span>
            </p>

            <label class="label">Senha</label>
            <p class="control has-icon has-icon-right">
              <input class="input" :class="{'is-danger': !isValalidPassowrd}" type="password" placeholder="Senha" v-model="data.user.password">
              <span class="icon is-small">
                <i class="fa fa-warning" v-show="!isValalidPassowrd"></i>
              </span>
              <span class="help is-danger" v-show="!isValalidPassowrd">Senha inválido!</span>
            </p>

            <label class="label">Tipo</label>
            <p class="control">
              <span class="select">
                <select v-model="data.user.type">
                  <option>Médico</option>
                  <option>Gerencia</option>
                </select>
              </span>
            </p>

            <p class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="terms">
                Concordo com os<router-link to="/client/register/terms" class="term">termos do meuclinic</router-link>
              </label>
            </p>
            <p class="control">
              <button class="button is-primary" :disabled="!this.terms" @click="register()">Cadastrar</button>
              <router-link to="/login">
                <button class="button is-link">Cancelar</button>
              </router-link>
            </p>
          </div>
        </div>
      </article>
     </div>
   </div>
  </div>
</template>

<script>
import API_URL from '../../../../config/dev.env'
const api = API_URL.API_URL

export default {
  name: 'Register',
  methods: {
    keymonitor (event) {

    },
    validate () {
      if ((this.data.user.name === undefined) || (this.data.user.name === '') || (this.data.user.name === null)) {
        console.log(this.data.user.name)
        this.isValalidName = false
        return false
      }
      if ((this.data.user.crm === undefined) || (this.data.user.crm === '') || (this.data.user.crm === null)) {
        this.isValalidCRM = false
        return false
      }
      if ((this.data.user.username === undefined) || (this.data.user.username === '') || (this.data.user.username === null)) {
        this.isValalidEmail = false
        return false
      }
      if ((this.data.user.password === undefined) || (this.data.user.password === '') || (this.data.user.password === null) || (this.data.user.password.length < 5)) {
        this.isValalidName = false
        return false
      }
    },
    searchEmail () {
      this.$http({
        method: 'post',
        url: api + '/users/search-email-doctor',
        data: this.data.user
      }).then((response) => {
        console.log(response)
        if ((response.data.client === undefined) || (response.data.client === null) || (response.data.client === '')) {
          this.client.isClient = false
          this.isValalidEmail = false
          this.client.message = 'E-mail não encontrado!'
        } else {
          this.isValalidEmail = true
          this.client.isClient = true
          this.data.user.client = response.data.client.name
          this.data.labelUsername = 'Este será seu usuário de acesso'
        }
      }).catch((error) => {
        console.log(error.response.data.message)
        if (error.response) {
          this.client.message = error.response.data.message
          this.isValalidEmail = false
          console.log(error.response.data.description)
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
    },
    register () {
      this.$db.ref('server/users/').on('value', data => {
        const obj = data.val()
        console.log(obj)
      })
      if (this.validate() === false) {
        console.log('teste')
      }
      this.$http({
        method: 'post',
        url: api + '/users/create',
        data: this.data.user
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  data () {
    return {
      data: {
        user: {
          username: null,
          password: null,
          name: null,
          crm: null,
          type: 'Médico',
          client: ''
        },
        erro: {
          username: null
        },
        labelUsername: 'Digite seu e-mail cadastrado no cadastros de médicos do sistema'
      },
      client: {
        isClient: false,
        message: ''
      },
      terms: false,
      isValalidName: true,
      isValalidEmail: true,
      isValalidCRM: true,
      isValalidPassowrd: true
    }
  }
}

</script>

<style lang="scss">
  .term { margin-left: 5px;}
</style>
