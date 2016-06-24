<template>
  <div
    role="tabpanel"
    v-show="selected"
    :class="{ 'tab-pane': true, 'animated': true, 'is-active': selected }"
    :aria-labelledby="label"
    :aria-hidden="hidden"
    :transition="transition">
    <slot></slot>
  </div>
</template>

<script>
export default {

  props: {
    icon: String,
    selected: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    disabled: Boolean,
    transition: {
      type: String,
      default: 'fade'
    }
  },

  created () {
    this._isTabPane = true
  },

  compiled () {
    this.$on('on-tab-click', (index, prevIndex) => {
      this.selected = this.index === index
    })
  },

  computed: {
    index () {
      return this.$parent.$tabPanes.indexOf(this)
    },

    hidden () {
      return this.selected ? 'false' : 'true'
    }
  }
}
</script>
