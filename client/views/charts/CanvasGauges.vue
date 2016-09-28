<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Gauges</h4>
          <div class="content">
            <div class="columns">
              <div class="column">
                <radial-gauge :value="value"></radial-gauge>
              </div>
              <div class="column">
                <linear-gauge :value="value"></linear-gauge>
              </div>
              <div class="column">
                <linear-gauge :value="value" :options="{ width: 100 }"></linear-gauge>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { LinearGauge, RadialGauge } from 'vue-canvas-gauges'

export default {
  components: {
    LinearGauge,
    RadialGauge
  },

  data () {
    return {
      value: 75
    }
  },

  computed: {
  },

  created () {
    // has bug!
    // setInterval(() => {
    //   this.value = Math.floor(Math.random() * 100)
    // }, 2048)
  }
}
</script>

<style>
</style>
