<template>
  <div class="ct-chart"></div>
</template>

<script>
import uuid from '../../lib/uuid'
import Chartist from 'chartist'

const types = ['Line', 'Bar', 'Pie']

export default {
  mixins: [uuid],

  props: {
    type: {
      type: String,
      default: 'Line',
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
    },
    responsiveOptions: {
      type: Array,
      default () {
        return []
      }
    }
  },

  ready () {
    const $el = this.$el
    const id = `va-chartist-${this.uuid}`
    $el.setAttribute('id', id)
    this.chart = new Chartist[this.type](
      $el,
      this.data,
      this.options,
      this.responsiveOptions
    )
  },

  data () {
    return {
      chart: null
    }
  },

  watch: {
    data (val) {
      this.$nextTick(() => {
        this.chart.update()
      })
    }
  }
}
</script>

<style lang="scss">
@import '~chartist/dist/scss/chartist';

.ct-chart {
  max-width: 100%;
}
</style>
