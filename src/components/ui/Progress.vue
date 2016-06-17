<template>
  <div class="progress-bar is-flex">
    <progress :class="['progress', type ? `is-${type}` : '']" :value="value" :max="max"></progress>
    <label v-if="showLabel">{{percentage + '%'}}</label>
  </div>
</template>

<script>
export default {

  props: {
    type: String,
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
.progress-bar {
  align-items: center;
  margin-bottom: 20px;

  .progress {
    margin-bottom: 0;
  }

  .progress + label {
    margin-left: 10px;
  }
}
</style>
