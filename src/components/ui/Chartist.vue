<template>
  <div class="ct-chart"></div>
</template>

<script>
import uuid from '../../libs/uuid'
import Chartist from 'chartist'

const types = ['line', 'bar', 'pie']

export default {
  mixins: [uuid],

  props: {
    type: {
      type: String,
      default: 'line',
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
      type: Object,
      default () {
        return {}
      }
    },
    types: {
      type: Object,
      default () {
        return {
          line: 'Line',
          bar: 'Bar',
          pie: 'Pie'
        }
      }
    }
  },

  ready () {
    const $el = this.$el
    const id = `va-chartist-${this.uuid}`
    $el.setAttribute('id', id)
    this.chart = new Chartist[this.instanceType](
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

  computed: {
    instanceType () {
      let t = this.type.toLowerCase()
      return this.types[t]
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
</style>
