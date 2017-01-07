<template>
  <div class="columns is-multiline is-mobile">

    <div class="column is-half-mobile is-one-third-tablet is-one-third-desktop" v-for="item in items" v-if="item.name">
      <base-card 
        :title="item.name" 
        :content="getDescription(item)">
        <card-footer-item slot="footer" :href="item.meta && item.meta.repository">
          <span class="icon is-small">
            <i aria-hidden="true" class="fa fa-github"></i>
          </span>&nbsp;&nbsp;
          Repository
        </card-footer-item>
        <card-footer-item slot="footer" element='link' :to="{name: item.name}">
          <span class="icon is-small">
            <i aria-hidden="true" class="fa fa-link"></i>
          </span>&nbsp;&nbsp;
          Demo
        </card-footer-item>
      </base-card>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { BaseCard, CardFooterItem } from 'vue-bulma-card'

export default {
  components: {
    BaseCard,
    CardFooterItem
  },

  computed: {
    ...mapGetters({
      parent: 'componententry'
    }),

    parentPath () {
      return this.parent ? this.parent.path : ''
    },

    items () {
      return (this.parent ? this.parent.children : []).filter(item => item.path)
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
