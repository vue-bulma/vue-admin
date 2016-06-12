<template>
  <section class="hero is-bold va-navbar">
    <div class="hero-head">
      <div class="container is-fluid is-marginless">
        <nav class="nav is-1">
          <div class="nav-left">
            <a class="nav-item hero-brand" href="#">
              <img src="/static/img/logo.png" alt="Vue Admin Panel Framework">
              <span>VueAdmin</span>
            </a>
            <a class="nav-item is-hidden-tablet">
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
</script>

<style lang="scss" scoped>
.va-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .nav {
    padding: 0 10px;
  }
}

.hero-brand {
  text-indent: -3000px;
}
</style>
