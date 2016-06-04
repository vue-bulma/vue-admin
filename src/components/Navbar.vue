<template>
  <nav class="nav va-navbar">
    <div class="nav-left">
      <a class="nav-item" href="#">Vue Admin</a>
    </div>

    <!-- <div class="nav-center">
      <a class="nav-item" href="https://github.com/fundon/vue-admin">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
      <a class="nav-item" href="https://twitter.com/_fundon">
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
    </div> -->

    <div class="nav-right">
      <span class="nav-item">
        <a class="button" >
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
          <span>Tweet</span>
        </a>
        <a class="button is-primary" href="#">
          <span class="icon">
            <i class="fa fa-download"></i>
          </span>
          <span>Download</span>
        </a>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.va-navbar {
  padding: 0 10px;
}
</style>
