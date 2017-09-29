<template>
  <card-modal :visible="visible" @close="close" :title="title" transition="zoom" @cancelText="close">
    <div class="content has-text-centered"><img :src="src" height="120" alt="Vue Admin"></div>
    <a @click="open(url)">Vue Admin on GitHub</a>
    <p>{{desc}}</p>
  </card-modal>
</template>

<script>
import { CardModal } from 'vue-bulma-modal'

export default {
  components: {
    CardModal
  },

  props: {
    visible: Boolean,
    title: String,
    url: String,
    desc: String
  },

  data () {
    return {
      src: ''
    }
  },

  methods: {
    open (url) {
      window.open(url)
    },

    close () {
      this.$emit('close')
    }
  }
}
</script>
