<template>
<div class="content has-text-centered">
  <h1 class="is-title is-bold">Login</h1>

  <div class="columns is-vcentered">
    <div class="column is-6 is-offset-3">
      <div class="box">
        <div v-show="error" style="color:red; word-wrap:break-word;">{{ error }}</div>
        <form v-on:submit.prevent="login">
          <label class="label">Email</label>
          <p class="control">
            <input v-model="data.body.username" class="input" type="text" placeholder="email@example.org">
          </p>
          <label class="label">Senha</label>
          <p class="control">
            <input v-model="data.body.password" class="input" type="password" placeholder="password">
          </p>

          <p class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="data.rememberMe">
              Lembre-me
            </label>
          </p>

          <p class="control">
            Esqueceu sua senha?
            Não se preocupe, <router-link to="/client/forgetpass">click aqui</router-link> para resetar sua senha
          </p>

          <hr>
          <p class="control">
            <button type="submit" class="button is-primary register">Acessar sua Conta</button>
            <hr/>
            <router-link to="/client/register/register"><button class="button is-default register">Cadastrar</button></router-link>
          </p>

        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import localStorage from '../../services/index'
import { mapActions } from 'vuex'
// import Firebase from 'firebase'
export default {

  data () {
    return {
      data: {
        body: {
          username: null,
          password: null
        },
        rememberMe: false
      },
      error: null
    }
  },
  mounted () {
    if ((this.$auth.check()) && (localStorage.get('crm') !== '')) {
      const user = {
        crm: localStorage.get('crm'),
        client: localStorage.get('client'),
        id: localStorage.get('id'),
        name: localStorage.get('name')
      }
      this.setUser(user)
      this.$router.push('/')
    }

    if (this.$auth.redirect()) {
      console.log('Redirect from: ' + this.$auth.redirect().from.name)
    }
    // Can set query parameter here for auth redirect or just do it silently in login redirect.
  },
  methods: {
    ...mapActions(['setUser']),
    register () {
      console.log('teste')
    },
    login () {
      var redirect = this.$auth.redirect()
      this.error = ''
      this.$auth.login({
        headers: {
          'Content-Type': 'application/json'
        },
        data: this.data.body,
        rememberMe: this.data.rememberMe,
        redirect: {name: redirect ? 'Agenda' : 'Agenda'},
        success (res) {
          // console.log('Auth Success')
          // console.log('Token: ' + this.$auth.token())
          // console.log(res.data.parameters)
          // const user = this.data.body
          // console.log(res.data.parameters)
          this.setUser(res.data.parameters)
          localStorage.set('id', res.data.parameters.id)
          localStorage.set('crm', res.data.parameters.crm)
          localStorage.set('client', res.data.parameters.client)
          localStorage.set('email', res.data.parameters.email)
          localStorage.set('name', res.data.parameters.name)
        },
        error (err) {
          if (err.response) {
            // redirect: {name: redirect ? redirect.from.name : 'Home'},
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(err.response.status)
            // console.log(err.response.data)
            // console.log(err.response.headers)
            this.error = err.response.data.message
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', err.message)
          }
          console.log(err.config)
        }
      })
    }
  }
  // filters: {
  //   json: function (value) {
  //     console.log(value)
  //     return value
  //   }
  // }

}
</script>

<style lang="scss" scoped>
.is-title {
    text-transform: capitalize;
}
.register { width: 100%;}
.test { text-align: right;}
</style>
