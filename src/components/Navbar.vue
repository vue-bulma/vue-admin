<template>
  <section class="hero is-bold va-navbar">
    <div class="hero-head">
      <div class="container is-fluid is-marginless">
        <nav class="nav">
          <div class="nav-left">
            <a class="nav-item" href="#">VueAdmin</a>
          </div>
          <div class="nav-right">
            <span class="nav-item">
            </span>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
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
</style>
