<template>
  <div class="columns is-multiline is-mobile">

    <div class="column is-half-mobile is-one-third-tablet is-one-third-desktop" v-for="item in items" v-if="item.name">
      <div class="card is-fullwidth">
        <header class="card-header">
          <p class="card-header-title">{{ item.name }}</p>
        </header>
        <div class="card-content">
          <div class="content">{{ getDescription(item) }}</div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" :href="getRepository(item)">
            <span class="icon is-small">
              <i class="fa fa-github" aria-hidden="true"></i>
            </span>&nbsp;&nbsp;
            Repository
          </a>
          <router-link :to="{ name: item.name }" class="card-footer-item">
            <span class="icon is-small">
              <i class="fa fa-link" aria-hidden="true"></i>
            </span>&nbsp;&nbsp;
            Demo
          </router-link>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  computed: {
    parent () {
      return this.$store.state.menu.filter(c => c.name === 'Components')[0]
    },

    parentPath () {
      const parent = this.parent
      return parent ? parent.path : ''
    },

    items () {
      const parent = this.parent
      return parent ? parent.children : []
    }
  },

  methods: {
    getPath (item) {
      return this.parentPath + '/' + item.path
    },

    getDescription (item) {
      return item.meta && item.meta.description
    },

    getRepository (item) {
      return item.meta && item.meta.repository
    }
  }

}
</script>
