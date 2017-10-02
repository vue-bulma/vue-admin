<template lang="html">
  <div class="content has-text-centered">

    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
          <article class="tile is-child box">
            <h1 class="title forgetpass">Esqueceu sua senha ?</h1>
            <h2 class="subtitle">Entre com o seu email para resetar sua senha.</h2>
            <div class="block">
              <p class="control has-icon">
                <input class="input" type="email" placeholder="Email" v-model="data.user.username">
                <span class="icon is-small">
                  <i class="fa fa-envelope"></i>
                </span>
              </p>
              <!-- <p class="control has-icon">
                <input class="input" type="password" placeholder="Password">
                <span class="icon is-small">
                  <i class="fa fa-lock"></i>
                </span>
              </p> -->
              <p class="control">
                <button class="button is-success" @click="send()">
                  Enviar
                </button>
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
import API_URL from '../../../config/dev.env'
const api = API_URL.API_URL

export default {
  name: 'ForgetPassword',
  methods: {
    send () {
      this.$http({
        method: 'post',
        url: api + '/users/reset-password',
        data: this.data.user
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response.data.description)
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
    }
  },
  data () {
    return {
      data: {
        user: {
          username: null
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .forgetpass {
      color: #00d1b2;
    }
</style>
