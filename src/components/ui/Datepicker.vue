<template>
  <partial :name="name">
    <slot></slot>
  </partial>
</template>

<script>
import { init as Flatpickr } from 'flatpickr'

const factory = (selector, config, l10n) => {
  function Datepicker (selector, config, l10n) {
    this.l10n = Object.assign({}, Flatpickr.prototype.l10n, l10n)
    return Flatpickr.call(this, selector, config)
  }
  Datepicker.prototype = Flatpickr.prototype
  return new Datepicker(selector, config, l10n)
}

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
    value: {
      type: String,
      default: ''
    },
    readonly: Boolean,
    alignment: String,
    l10n: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  ready () {
    if (this.wrap) {
      this.$el.nextSibling.querySelector('input').value = this.value
    } else {
      this.$el.nextSibling.value = this.value
    }
    this.datepicker = factory(this.$el.nextSibling, this.config, this.l10n)
  },

  beforeDestroy () {
    this.datepicker.destory()
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
