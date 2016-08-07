<template>
  <div id="app">
    <navbar></navbar>
    <sidebar></sidebar>
    <section class="app-main">
      <div class="container is-fluid is-marginless app-content">
        <levelbar></levelbar>
        <router-view
          class="animated"
          transition="fade"
          transition-mode="out-in"
          keep-alive>
        </router-view>
      </div>
    </section>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import store from './vuex/store'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Levelbar from './components/Levelbar'
import FooterBar from './components/FooterBar'

export default {
  store,

  vuex: {
    getters: {
      sidebar: state => state.sidebar
    }
  },

  components: {
    Navbar,
    Sidebar,
    Levelbar,
    FooterBar
  }
}
</script>

<style lang="scss">
@import 'scss/app';

.app-main {
  padding-top: 50px;
  margin-left: 180px;
  transform: translate3d(0, 0, 0);

  @include mobile() {
    margin-left: 0;
  }

}

.app-content {
  padding: 20px;
}

.animated {
  animation-duration: .377s;
}
</style>
