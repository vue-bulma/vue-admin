<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="block styles-box">
            <p>
              <slider :value="15" :max="100" :step="1" is-fullwidth></slider>
            </p>
            <p>
              <slider type="primary" :value="30" :max="100" :step="10" is-fullwidth></slider>
            </p>
            <p>
              <slider type="info" :value="45" :max="100" :step="5" is-fullwidth></slider>
            </p>
            <p>
              <slider type="success" :value="60" :max="100" :step="20" is-fullwidth></slider>
            </p>
            <p>
              <slider type="warning" :value="75" :max="100" :step="25" is-fullwidth></slider>
            </p>
            <p>
              <slider type="danger" :value="90" :max="100" :step="10" is-fullwidth></slider>
            </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Sizes</h1>
          <div class="block">
            <p>
              <slider size="small" :value="15" :max="100" is-fullwidth></slider>
            </p>
            <p>
              <slider size="" :value="30" :max="100" is-fullwidth></slider>
            </p>
            <p>
              <slider size="medium" :value="45" :max="100" is-fullwidth></slider>
            </p>
            <p>
              <slider size="large" :value="60" :max="100" is-fullwidth></slider>
            </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Dynamics</h1>
          <div class="block">
            <p>
              <tooltip type="success" :label="per" placement="top" always>
                <span class="tooltip-value"></span>
              </tooltip>
              <slider type="success" size="large" :value="value" :max="100" :step="1" is-fullwidth @change="update"></slider>
            </p>
            <p>
              <input class="input" type="number" v-model="value" min="0" max="100" number>
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'
import Slider from 'vue-bulma-slider'

export default {
  components: {
    Tooltip,
    Slider
  },

  data () {
    return {
      value: 23
    }
  },

  computed: {
    per () {
      return this.value + '%'
    }
  },

  methods: {
    update (val) {
      this.value = Number(val)
    }
  }

}
</script>

<style lang="scss" scoped>
.button {
  margin: 5px 0 0;
}
p {
  margin-bottom: 20px;
}
.tooltip-value {
  width: 100%;
}
</style>
