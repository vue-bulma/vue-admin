<template>
  <slot><slot>
</template>

<script>
import classNames from 'classnames'

export default {

  props: {
    type: String,
    size: String,
    always: {
      type: Boolean,
      default: false
    },
    noAnimate: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },

  compiled () {
    this.$el = this.$el.nextSibling
  },

  ready () {
    this.$el.setAttribute('aria-label', this.label)
    this.$el.classList.add(...(classNames(
      'tooltip',
      `tooltip--${this.placement}`,
      {
        [`tooltip--${this.type}`]: this.type,
        [`tooltip--${this.size}`]: this.size,
        'tooltip--rounded': this.rounded,
        'tooltip--always': this.always,
        'tooltip--no-animate': this.noAnimate
      }
    ).split(' ')))
  },

  watch: {
    label (val) {
      this.$el.setAttribute('aria-label', val)
    }
  }

}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/functions';
@import '~bulma/sass/utilities/variables';

$hintPrefix: 'tooltip--';
$hintFontFamily: $family-sans-serif;
$hintTextShadowDarkenAmount: 0;
$hintWarningColor: $warning;
$hintInfoColor: $info;
$hintSuccessColor: $success;

@import '~hint.css/src/hint';

.tooltip--warning:after {
  color: $warning-invert;
}

.#{$hintPrefix}primary {
	@include hint-type($primary);
}

.#{$hintPrefix}danger {
	@include hint-type($danger);
}

.#{$hintPrefix}rounded:after {
  border-radius: $radius;
}

[class*="#{$hintPrefix}"]:after {
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
}
</style>
