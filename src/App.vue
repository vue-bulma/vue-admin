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
            <router-view keep-alive></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from './vuex/store'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Levelbar from './components/Levelbar'

export default {
  store,

  components: {
    Navbar,
    Sidebar,
    Levelbar
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app';

.app-main {
  padding-top: 50px;
}

.app-sidebar {
  padding: 20px 0px;
  position: fixed;
  height: 100%;
  z-index: 1024 - 1;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
}

.app-content {
  padding: 20px;
}
</style>
