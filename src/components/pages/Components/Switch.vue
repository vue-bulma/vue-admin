<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="block styles-box">
            <p>
              <switch checked></switch>
            </p>
            <p>
              <switch checked type="primary"></switch>
            </p>
            <p>
              <switch checked type="info"></switch>
            </p>
            <p>
              <switch checked type="success"></switch>
            </p>
            <p>
              <switch checked type="warning"></switch>
            </p>
            <p>
              <switch checked type="danger"></switch>
            </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Sizes</h1>
          <div class="block">
            <p>
              <switch size="small"></switch>
            </p>
            <p>
              <switch size=""></switch>
            </p>
            <p>
              <switch size="medium"></switch>
            </p>
            <p>
              <switch size="large"></switch>
            </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Dynamics</h1>
          <div class="block">
            <p>
              <switch type="success" size="large" :value.sync="value" checked></switch>
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
import Switch from 'vue-bulma-switch'

export default {
  components: {
    Switch
  },

  data () {
    return {
      value: false
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
