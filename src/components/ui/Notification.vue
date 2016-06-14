<template>
  <div :class="['notification', 'animated', type ? `is-${type}` : '']" :transition="transition" transition-mode="in-out">
    <button class="delete" @click="close()"></button>
    <div class="title is-5" v-if="title">{{ title }}</div>
    {{ message }}
  </div>
</template>

<script>
export default {

  props: {
    type: String,
    title: String,
    message: String,
    direction: {
      type: String,
      default: 'right'
    },
    duration: {
      type: Number,
      default: 4500
    }
  },

  computed: {
    transition () {
      return `bounce-${this.direction}`
    }
  },

  created () {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        this.close()
      }, this.duration)
    }
  },

  methods: {
    close () {
      clearTimeout(this.timer)
      this.$remove()
    }
  }
}
</script>

<style lang="scss">
@import '~bulma';

.notification {
  -webkit-user-select: none;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

body > .notification {
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px;
  z-index: 1024 + 233;

  @include tablet() {
    max-width: 320px;
  }
}
</style>
