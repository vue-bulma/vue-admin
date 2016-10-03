<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="block styles-box">
            <p>
              <vb-switch checked></vb-switch>
            </p>
            <p>
              <vb-switch checked type="primary"></vb-switch>
            </p>
            <p>
              <vb-switch checked type="info"></vb-switch>
            </p>
            <p>
              <vb-switch checked type="success"></vb-switch>
            </p>
            <p>
              <vb-switch checked type="warning"></vb-switch>
            </p>
            <p>
              <vb-switch checked type="danger"></vb-switch>
            </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Sizes</h1>
          <div class="block">
            <p>
              <vb-switch size="small"></vb-switch>
            </p>
            <p>
              <vb-switch size=""></vb-switch>
            </p>
            <p>
              <vb-switch size="medium"></vb-switch>
            </p>
            <p>
              <vb-switch size="large"></vb-switch>
            </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Dynamics</h1>
          <div class="block">
            <p>
              <vb-switch type="success" size="large" :checked="value" @change="updateValue"></vb-switch>
            </p>
            <p>
              {{ value }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
// do not use below code, because `Switch` is svg tag.
// import Switch from 'vue-bulma-switch'
import VbSwitch from 'vue-bulma-switch'

export default {
  components: {
    VbSwitch
  },

  data () {
    return {
      value: false
    }
  },

  methods: {
    updateValue (val) {
      this.value = val
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
