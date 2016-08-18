<template>
  <nav class="level app-levelbar">
    <div class="level-left">
      <div class="level-item">
        <h3 class="subtitle is-5">
          <strong>{{ name }}</strong>
        </h3>
      </div>
    </div>

    <div class="level-right is-hidden-mobile">
      <breadcrumb :list="list"><breadcrumb>
    </div>
  </nav>
</template>

<script>
import Breadcrumb from 'vue-bulma-breadcrumb'

export default {
  components: {
    Breadcrumb
  },

  data () {
    return {
    }
  },

  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    }
  }
}
</script>
