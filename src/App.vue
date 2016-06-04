<template>
  <div id="app">
    <div class="container is-fluid is-marginless">
      <navbar></navbar>
      <div class="columns is-mobile">
        <sidebar class="column is-1"></sidebar>
        <div class="column">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app';
</style>
