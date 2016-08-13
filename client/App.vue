<template>
  <div id="app">
    <navbar></navbar>
    <sidebar></sidebar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss">
@import '~bulma';

$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';
</style>
