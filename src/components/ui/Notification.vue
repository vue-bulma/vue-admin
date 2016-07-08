<template>
  <div :class="['notification', 'animated', type ? `is-${type}` : '']" :transition="transition" transition-mode="in-out">
    <button class="delete touchable" @click="close()"></button>
    <div class="title is-5" v-if="title">{{ title }}</div>
    {{ message }}
  </div>
</template>

<script>
import Vue from 'vue'

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
    },
    container: {
      type: String,
      default: '.notifications'
    }
  },

  data () {
    return {
      $_parent_: null
    }
  },

  created () {
    let $parent = this.$parent
    if (!$parent) {
      let parent = document.querySelector(this.container)
      if (!parent) {
        // Lazy creating `div.notifications` container.
        parent = document.createElement('div')
        parent.classList.add(this.container.replace('.', ''))
        const Notifications = Vue.extend()
        $parent = new Notifications({
          el: parent
        }).$appendTo(document.body)
      }
      // Hacked.
      this.$_parent_ = parent.__vue__
    }
  },

  compiled () {
    if (this.$_parent_) {
      this.$appendTo(this.$_parent_.$el)
      delete this.$_parent_
    }
  },

  ready () {
    if (this.duration > 0) {
      this.timer = setTimeout(() => this.close(), this.duration)
    }
  },

  computed: {
    transition () {
      return `bounce-${this.direction}`
    }
  },

  methods: {
    close () {
      clearTimeout(this.timer)
      this.$destroy(true)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';
@import '~bulma/sass/utilities/mixins';

.notifications {
  position: fixed;
  top: 50px;
  right: 0;
  z-index: 1024 + 233;
  pointer-events: none;

  @include tablet() {
    max-width: 320px;
  }

  .notification {
    margin: 20px;
  }
}

.notification {
  position: relative;
  min-width: 240px;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  pointer-events: all;
}
</style>
