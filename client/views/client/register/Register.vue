<template lang="html">
  <div class="">
    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <article class="tile is-child box">
        <h1 class="title"></h1>
        <div class="block">

          <label class="label">Nome</label>
          <p class="control has-icon has-icon-right">
            <input class="input is-danger" type="text" placeholder="Nome" v-model="data.user.name">
            <span class="icon is-small">
              <i class="fa fa-warning"></i>
            </span>
            <span class="help is-danger">Nome inválido!</span>
          </p>

          <label class="label">CRM</label>
          <p class="control has-icon has-icon-right">
            <input class="input is-danger" type="text" placeholder="CRM" v-model="data.user.crm">
            <span class="icon is-small">
              <i class="fa fa-warning"></i>
            </span>
            <span class="help is-danger">CRM inválido!</span>
          </p>

          <label class="label">Email</label>
          <p class="control has-icon has-icon-right">
            <input class="input is-danger" type="email" placeholder="Email" v-model="data.user.email">
            <span class="icon is-small">
              <i class="fa fa-warning"></i>
            </span>
            <span :class="{ hasError: 'help is-danger' }"></span>
            {{hasError}}
          </p>

          <label class="label">Senha</label>
          <p class="control has-icon has-icon-right">
            <input class="input is-danger" type="password" placeholder="Senha" v-model="data.user.password">
            <span class="help is-danger">Senha inválida!</span>
            <span class="icon is-small">
              <i class="fa fa-warning"></i>
            </span>
            <!--
            <input class="input is-success" type="password" placeholder="Senha" v-model="data.user.password">
            <span class="icon is-small">
              <i class="fa fa-check"></i>
            </span>
            <span class="help is-success">Senha inválida!</span>-->
          </p>

          <p class="control">
            <label class="checkbox">
              <input type="checkbox">
              Concordo com os<router-link to="/client/register/terms" class="term">termos do meuclinic</router-link>
            </label>
          </p>
          <p class="control">
            <button class="button is-primary" @click="register()">Cadastrar</button>
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
    validate () {
      if (this.data.user.name === undefined) {
        return false
      }
    },
    register () {
      if (this.validate() === false) {
        return
      }
      this.$http({
        method: 'post',
        url: 'http://localhost:8091/users/create',
        transformResponse: [(data) => {
          return JSON.parse(data.replace(/T00:00:00/g, ''))
        }]
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
          email: null,
          password: null,
          name: null,
          crm: null
        }
      },
      isValidEmail: false,
      error: null,
      hasError: true,
      isActive: true
    }
  }
}

</script>

<style lang="scss">
  .term { margin-left: 5px;}
</style>
