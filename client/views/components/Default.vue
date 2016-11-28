<template>
  <div class="columns is-multiline is-mobile">

    <div class="column is-half-mobile is-one-third-tablet is-one-third-desktop" v-for="item in items" v-if="item.name">
      <base-card 
        :title="item.name" 
        :content="getDescription(item)" 
        :actions="getActions(item)"></base-card>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { BaseCard } from 'vue-bulma-card'

export default {
  components: {
    BaseCard
  },

  computed: {
    ...mapGetters({
      parent: 'componententry'
    }),

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
    getActions (item) {
      return [{
        text: 'Repository',
        icon: 'github',
        href: item.meta && item.meta.repository
      }, {
        text: 'Demo',
        icon: 'link',
        name: item.name
      }]
    },

    getDescription (item) {
      return item.meta && item.meta.description
    }
  }

}
</script>
