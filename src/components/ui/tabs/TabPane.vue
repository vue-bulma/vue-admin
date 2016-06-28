<template>
  <div
    role="tabpanel"
    v-if="selected"
    :class="{ 'tab-pane': true, 'animated': true, 'is-active': selected, 'is-deactive': !selected }"
    :aria-labelledby="label"
    :aria-hidden="hidden"
    :transition="transition"
    :transition-mode="transitionMode"
    >
    <slot></slot>
  </div>
</template>

<script>
export default {

  props: {
    icon: String,
    selected: Boolean,
    disabled: Boolean,
    label: {
      type: String,
      required: true
    },
    transition: {
      type: String,
      default: 'fade'
    },
    transitionMode: {
      type: String,
      default: 'out-in'
    }
  },

  created () {
    this._isTabPane = true
  },

  events: {
    ['on' + '-tab-click'] (index, prevIndex) {
      if (!this.onlyFade) {
        if (prevIndex === -1 || prevIndex >= index) {
          this.transition = `${this.animation}${this.layout ? `-${this.direction}` : ''}${this.gte ? `-${this.gte}` : ''}`
        } else {
          this.transition = `${this.animation}${this.layout ? `-${this.direction}` : ''}${this.lt ? `-${this.lt}` : ''}`
        }
      }
      this.selected = this.index === index
    }
  },

  computed: {
    layout () {
      return this.$parent.layout
    },

    direction () {
      if (this.layout === 'top' || this.layout === 'bottom') {
        return 'horizontal'
      } else if (this.layout === 'left' || this.layout === 'right') {
        return 'vertical'
      }
      return ''
    },

    animation () {
      return this.$parent.animation
    },

    onlyFade () {
      return this.$parent.onlyFade
    },

    gte () {
      if (this.direction === 'vertical') {
        return 'utd'
      } else if (this.direction === 'horizontal') {
        return 'ltr'
      }
      return ''
    },

    lt () {
      if (this.direction === 'vertical') {
        return 'dtu'
      } else if (this.direction === 'horizontal') {
        return 'rtl'
      }
      return ''
    },

    index () {
      return this.$parent.$tabPanes.indexOf(this)
    },

    hidden () {
      return this.selected ? 'false' : 'true'
    }
  }
}
</script>
