<template>
  <div class="message-box animated" :transition="transition" transition-mode="in-out">
    <article :class="['message', type ? `is-${type}` : '']">
      <div class="message-header">
        <button class="delete touchable" @click="close()" v-if="showCloseButton"></button>
        <span class="icon" v-if="icon">
          <i :class="['fa', `fa-${icon}`]"></i>
        </span>
        {{ title }}
      </div>
      <div class="message-body" v-if="message">{{ message }}</div>
    </article>
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
      default: 'down'
    },
    duration: {
      type: Number,
      default: 1500
    },
    container: {
      type: String,
      default: '.messages'
    },
    showCloseButton: Boolean
  },

  data () {
    return {
      $_parent_: null,
      icons: {
        normal: '',
        primary: 'arrow-circle-right',
        info: 'info-circle',
        success: 'check-circle',
        warning: 'exclamation-circle',
        danger: 'times-circle'
      }
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
        const Messages = Vue.extend()
        $parent = new Messages({
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
    },

    icon () {
      return this.icons[this.type]
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
.messages {
  position: fixed;
  top: 15px;
  left: 0;
  width: 100%;
  z-index: 1024 + 234;
  pointer-events: none;
  transform: translate3d(0, 0, 0);

  .message-box {
    position: absolute;
    left: 50%;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    pointer-events: all;
  }

  .message {
    position: relative;
    right: 50%;

    .delete {
      float: right;
    }

    .icon {
      vertical-align: middle;
    }
  }
}
</style>
