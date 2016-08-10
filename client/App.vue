<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '~bulma';
</style>
