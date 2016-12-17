<template>
  <image-modal :visible="visible" @close="close" transition="roll">
    <p class="image is-4by3"><img src="http://placehold.it/1280x960"></p>
  </image-modal>
</template>

<script>
import { ImageModal } from 'vue-bulma-modal'

export default {
  components: {
    ImageModal
  },

  props: {
    visible: Boolean
  },

  methods: {
    close () {
      this.$emit('close')
    }
  }

}
</script>
