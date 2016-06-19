<template>
  <div :class="['modal', 'animated', visible ? 'is-active' : '']" :transition="transition" transition-mode="in-out">
    <div class="modal-background" @click="close"></div>
    <div class="modal-container">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
    <button class="modal-close" @click="close" v-if="closable"></button>
  </div>
</template>

<script>
import BaseModal from './BaseModal'

export default {
  mixins: [BaseModal],

  props: {
    closable: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
</style>
