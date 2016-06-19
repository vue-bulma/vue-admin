<template>
  <div class="progress-container is-flex">
    <progress :class="['progress', type ? `is-${type}` : '', size ? `is-${size}` : '']" :value="value" :max="max"></progress>
    <span v-if="showLabel">{{percentage + '%'}}</span>
  </div>
</template>

<script>
export default {

  props: {
    type: String,
    size: String,
    value: {
      type: Number,
      required: true,
      default: 0
    },
    max: {
      type: Number,
      required: true,
      default: 0
    },
    showLabel: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    percentage () {
      return this.value / this.max * 100
    }
  }

}
</script>

<style lang="scss">
.progress-container {
  align-items: center;
  margin-bottom: 20px;

  .progress {
    position: relative;
    margin-bottom: 0 !important;
  }

  .progress + span {
    margin-left: 10px;
    min-width: 36px;
    text-align: right;
  }
}
</style>
