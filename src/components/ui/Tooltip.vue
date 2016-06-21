<template>
  <slot><slot>
</template>

<script>
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
    let arrs = []
    const classList = this.$el.classList
    this.$el.setAttribute('aria-label', this.label)
    arrs.push('tooltip')
    arrs.push(`tooltip--${this.placement}`)
    if (this.type) {
      arrs.push(`tooltip--${this.type}`)
    }
    if (this.size) {
      arrs.push(`tooltip--${this.size}`)
    }
    if (this.always) {
      arrs.push('tooltip--always')
    }
    if (this.always) {
      arrs.push('tooltip--rounded')
    }
    if (this.noAnimate) {
      arrs.push('tooltip--no-animate')
    }
    classList.add(...arrs)
  }

}
</script>

<style lang="scss">
@import '~bulma';

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
</style>
