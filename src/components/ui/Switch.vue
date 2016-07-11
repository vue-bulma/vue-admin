<template>
  <label class="switch" :class="{ [`is-${type}`]: type, [`is-${size}`]: size, checked: value }">
    <input type="checkbox" :disabled="disabled" v-model="value">
  </label>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    isFullwidth: Boolean,
    type: String,
    size: String,
    checked: Boolean,
    value: {
      type: Boolean,
      default: false
    }
  },

  ready () {
    this.value = !!this.checked
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';

.switch {
  --height: 22px;

  input {
    opacity: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    cursor: pointer;
  }

  appearance: none;
  position: relative;
  outline: 0;
  border-radius: calc(0.8 * var(--height));
  width: calc(1.625 * var(--height));
  height: var(--height);
  background-color: $border;
  border: 1px solid $border;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: calc(var(--height) - 2px);
    border-radius: calc((var(--height) - 2px) / 2);
    transition: .233s;
  }

  &:before {
    width: calc(1.625 * var(--height) - 2px);
    background-color: $grey-lighter;
  }

  &:after {
    width: calc(var(--height) - 2px);
    background-color: #FFF;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);
  }

  &.checked {
    border-color: $text;
    background-color: $text;
    &:before {
      transform: scale(0);
    }
    &:after {
      transform: translateX(calc(0.625 * var(--height)));
    }
  }

  // Colors
  @each $name, $pair in $colors {
    $color: nth($pair, 1);
    &.is-#{$name} {
      &.checked {
        border-color: $color;
        background-color: $color;
      }
    }
  }

  // Sizes
  &.is-small {
    --height: 12px
  }
  &.is-medium {
    --height: 28px
  }
  &.is-large {
    --height: 32px
  }
}
</style>
