<template>
  <section class="hero is-bold app-navbar">
    <div class="hero-head">
      <div class="container is-fluid is-marginless">
        <nav class="nav is-1">
          <div class="nav-left">
            <a class="nav-item hero-brand" href="#">
              <img src="../assets/logo.png" alt="Vue Admin Panel Framework">
              <span class="vue">Vue</span><strong class="admin">Admin</strong>
            </a>
            <a class="nav-item is-hidden-tablet" @click="toggleSidebar">
              <span class="icon">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div class="nav-right"></div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  vuex: {
    getters: {
      sidebar: state => state.sidebar
    }
  },

  methods: {
    toggleSidebar () {
      this.sidebar.opened = !this.sidebar.opened
    }
  }
}
</script>

<style lang="scss">
.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .nav {
    padding: 0 10px;
  }
}

.hero-brand {
  // text-indent: -3000px;
  .vue {
    margin-left: 10px;
    color: #36AC70;
  }
  .admin {
    color: #28374B;
  }
}
</style>
