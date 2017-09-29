<template>
  <modal :visible="visible" @close="close">
    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <strong>{{name}}</strong>
            <hr/>
            <strong class="title is-3">Historico</strong>
            <p>{{desc}}</p>
          </div>
        </div>
      </article>
    </div>
  </modal>
</template>

<script>
import { Modal } from 'vue-bulma-modal'

export default {
  components: {
    Modal
  },

  props: {
    visible: Boolean,
    name: String,
    desc: String
  },

  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .box {
    margin: 8%;
    width: 75%;
  }
</style>
