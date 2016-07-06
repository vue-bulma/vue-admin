<template>
  <partial :name="name">
    <slot></slot>
  </partial>
</template>

<script>
import Datepicker from './datepicker/Datepicker'

export default {
  partials: {
    singleInput: require('./datepicker/singleInput.html'),
    wrapperInput: require('./datepicker/wrapperInput.html')
  },
  props: {
    alignment: String,
    config: {
      type: Object,
      default () {
        return {}
      }
    },
    l10n: {
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
    value: String
  },

  ready () {
    this.datepicker = new Datepicker(this.$el.nextSibling, this.config, this.l10n)
    this.datepicker.set('onChange', (d, s) => {
      this.$set('value', s)
    })
  },

  beforeDestroy () {
    this.datepicker.destroy()
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

// https://github.com/chmln/flatpickr/issues/149
.flatpickr-time
  border-top 0

.flatpickr-days + .flatpickr-time
  border-top 1px solid $calendar_border_color
</style>
