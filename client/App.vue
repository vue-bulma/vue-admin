<template>
  <div id="app">
    <navbar :show="true"></navbar>
    <sidebar :show="config.sidebar"></sidebar>
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

  beforeMount () {
    const config = this.config
    const { body } = document
    const WIDTH = 768
    const RATIO = 3

    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        config.mobile = rect.width - RATIO < WIDTH
        config.sidebar = !config.mobile
      }
    }

    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  },

  computed: {
    config () {
      return this.$store.state.config
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
