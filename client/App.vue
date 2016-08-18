<template>
  <div id="app">
    <navbar :show="true"></navbar>
    <sidebar :show="true"></sidebar>
    <app-main></app-main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, FooterBar } from './components/layout/'

export default {
  components: {
    Navbar,
    Sidebar,
    AppMain,
    FooterBar
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
