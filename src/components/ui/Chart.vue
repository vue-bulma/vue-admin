<template>
  <canvas :width="width" :height="height"></canvas>
</template>

<script>
import uuid from '../../lib/uuid'
// import Chart from 'chart.js' // With moment.js
import Chart from 'chart.js/dist/Chart' // Without moment.js

const types = ['line', 'bar', 'radar', 'polarArea', 'pie', 'doughnut']

export default {
  mixins: [uuid],

  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    type: {
      type: String,
      required: true,
      validator (value) {
        return types.indexOf(value) > -1
      }
    },
    data: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  ready () {
    const $el = this.$el
    const id = `va-canvas-${this.uuid}`
    $el.setAttribute('id', id)
    this.chart = new Chart($el, {
      type: this.type,
      data: this.data,
      options: this.options
    })
  },

  data () {
    return {
      chart: null
    }
  },

  watch: {
    data (val) {
      this.$nextTick(() => {
        // this.chart.data.datasets = val.datasets
        // this.chart.data.labels = val.labels
        this.chart.update()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
canvas {
  max-width: 100%;
}
</style>
