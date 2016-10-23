<template>
  <card-modal :visible="true" :title="title" transition="zoom">
    <div class="content has-text-centered"><img :src="src" height="120" alt="Vue Admin"></div>
    <a @click="open(url)">Vue Admin on GitHub</a>
  </card-modal>
</template>

<script>
import { CardModal } from 'vue-bulma-modal'

export default {
  components: {
    CardModal
  },

  props: {
    title: String,
    url: String
  },

  data () {
    return {
      src: require('assets/logo.svg')
    }
  },

  methods: {
    open (url) {
      window.open(url)
    }
  }
}
</script>
