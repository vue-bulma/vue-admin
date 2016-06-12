<template>
  <div id="app">
    <navbar></navbar>
    <section class="app-main">
      <div class="container is-fluid is-marginless">
        <div class="columns is-mobile is-marginless">
          <div class="column is-1 app-sidebar">
            <sidebar></sidebar>
          </div>
          <div class="column is-offset-1 app-content">
            <levelbar></levelbar>
            <router-view
              class="animated"
              transition="fade"
              transition-mode="out-in"
              keep-alive>
            </router-view>
          </div>
        </div>
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

  components: {
    Navbar,
    Sidebar,
    Levelbar,
    FooterBar
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app';

#nprogress {
  $color: #48e79a;

  .bar {
    background: $color;
  }
  .peg {
    box-shadow: 0 0 10px $color, 0 0 5px $color;
  }

  .spinner-icon {
    border-top-color: $color;
    border-left-color: $color;
  }
}

.app-main {
  padding-top: 50px;
}

.app-sidebar {
  padding: 20px 0px 50px;
  position: fixed;
  width: 232px;
  min-width: 45px;
  max-height: 100vh;
  height: 100%;
  z-index: 1024 - 1;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
}

.app-content {
  padding: 20px;
}

.animated {
  animation-duration: .233s;
  animation-fill-mode: both;
}
</style>
