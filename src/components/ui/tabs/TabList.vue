<template>
  <ul :class="{ 'tab-list': true, 'is-flex': true, [`is-${alignment}`]: alignment }" role="tablist">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    alignment: {
      type: String,
      default: ''
    }
  }
}
</script>
