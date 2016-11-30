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
      list: null
    }
  },

  created () {
    this.getList()
  },

  computed: {
    name () {
      return this.$route.name
    }
  },

  methods: {
    getList () {
      let matched = this.$route.matched.filter(item => item.name)
      let first = matched[0]
      if (first && (first.name !== 'Home' || first.path !== '')) {
        matched = [{ name: 'Home', path: '/' }].concat(matched)
      }
      this.list = matched
    }
  },

  watch: {
    $route () {
      this.getList()
    }
  }
}
</script>
