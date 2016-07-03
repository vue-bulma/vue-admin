<template>
  <partial :name="name">
    <slot></slot>
  </partial>
</template>

<script>
import flatpickr from 'flatpickr'

export default {
  partials: {
    singleInput: require('./datepicker/singleInput.html'),
    wrapperInput: require('./datepicker/wrapperInput.html')
  },
  props: {
    config: {
      type: Object,
      default () {
        return {}
      }
    },
    placeholder: {
      type: String,
      default: 'Pick date'
    },
    readonly: Boolean,
    value: {
      type: String,
      default: ''
    },
    alignment: String
  },

  ready () {
    if (this.wrap) {
      this.$el.nextSibling.querySelector('input').value = this.value
    } else {
      this.$el.nextSibling.value = this.value
    }
    this.flatpickr = flatpickr(this.$el.nextSibling, this.config)
  },

  beforeDestroy () {
    this.flatpickr.destory()
  },

  computed: {
    wrap () {
      return !!this.config.wrap
    },
    name () {
      return this.wrap ? 'wrapperInput' : 'singleInput'
    }
  }

}
</script>

<style lang="stylus">
$calendar_background = #ffffff
$calendar_border_color = #d3d6db

$months_color = #111
$months_background = transparent

$weekdays_background = transparent

$day_text_color = #222324
$day_hover_background_color = #d3d6db

$today_color = #ed6c63
$selected_day_background = #1fc8db

@import '~flatpickr/src/style/flatpickr_base'
</style>
