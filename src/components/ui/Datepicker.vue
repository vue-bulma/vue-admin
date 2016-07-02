<template>
  <p class="control">
    <input v-el:input class="input" type="text" placeholder="Pick date" />
  </p>
</template>

<script>
import flatpickr from 'flatpickr'

export default {

  ready () {
    this.datepicker = flatpickr(this.$els.input, {})
  }

}
</script>

<style>
@import '~flatpickr/dist/flatpickr.min.css';
</style>
