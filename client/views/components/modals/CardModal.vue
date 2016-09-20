<template>
  <card-modal :visible="true" :title="title" transition="zoom">
    <div class="content has-text-centered"><img :src="src" height="120" alt="Vue Admin"></div>
  </card-modal>
</template>

<script>
import { CardModal } from 'vue-bulma-modal'

export default {
  components: {
    CardModal
  },

  props: {
    title: String
  },

  data () {
    return {
      src: require('assets/logo.svg')
    }
  }
}
</script>
