<template lang="html">
  <div class="">
    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <article class="tile is-child box">
        <h1 class="title"></h1>
        <div class="block">

          <label class="label">Nome</label>
          <p class="control">
            <input class="input" type="text" placeholder="Text input">
          </p>
          <label class="label">CRM</label>
          <p class="control">
            <input class="input" type="text" placeholder="Text input">
          </p>
          <label class="label">Email</label>
          <p class="control has-icon has-icon-right">
            <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
            <span class="icon is-small">
              <i class="fa fa-warning"></i>
            </span>
            <span class="help is-danger">This email is invalid</span>
          </p>
          <label class="label">Senha</label>
          <p class="control has-icon has-icon-right">
            <input class="input is-success" type="password" placeholder="Text input" value="bulma">
            <span class="icon is-small">
              <i class="fa fa-check"></i>
            </span>
            <span class="help is-success">This username is available</span>
          </p>

          <p class="control">
            <label class="checkbox">
              <input type="checkbox">
              Concordo com os<router-link to="/client/register/terms" class="term">termos do meuclinic</router-link>
            </label>
          </p>
          <p class="control">
            <button class="button is-primary">Cadastrar</button>
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
  }
}
</script>

<style lang="scss">
  .term { margin-left: 5px;}
</style>
