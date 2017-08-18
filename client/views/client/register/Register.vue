<template lang="html">
  <div class="">
    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <article class="tile is-child box">
        <h1 class="title"></h1>
        <div class="block">

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

          <label class="label">Email</label>
          <p class="control has-icon has-icon-right">
            <input class="input" :class="{'is-danger': !isValalidEmail}" type="email" placeholder="Email" v-model="data.user.username">
            <span class="icon is-small">
              <i class="fa fa-warning" v-show="!isValalidEmail"></i>
            </span>
            <span class="help is-danger" v-show="!isValalidEmail">Email inválido!</span>
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
      </article>
     </div>
   </div>
  </div>
</template>

<script>
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
        url: 'http://localhost:8091/users/create',
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
          type: 'Médico'
        }
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
