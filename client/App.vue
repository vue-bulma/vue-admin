<template>
  <div id="app">
    <navbar :show="true"></navbar>
    <sidebar :show="true"></sidebar>
    <app-main></app-main>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components/layout/'

export default {
  components: {
    Navbar,
    Sidebar,
    AppMain
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '~animate.css';
.animated {
  animation-duration: .377s;
}

@import '~bulma';

$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';
</style>
