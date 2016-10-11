<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Placements</h1>
          <div class="columns is-multiline is-mobile">
            <div class="column is-one-third">
              <tooltip label="top-right" placement="top-right">
                <button class="button is-primary has-text-centered">
                  <span>top-right</span>
                </button>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="top" placement="top">
                <button class="button is-warning has-text-centered">
                  <span>top</span>
                </button>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="top-left" placement="top-left">
                <button class="button is-danger has-text-centered">
                  <span>top-left</span>
                </button>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="right" placement="right">
                <button class="button is-info has-text-centered">
                  <span>right</span>
                </button>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="no animate, always, rounded, large, bounce, success" placement="top" type="success" size="large" :no-animate="true" :always="true" :rounded="true">
                <button class="button is-success has-text-centered">
                  <span>no animate, always, rounded, large, bounce, success</span>
                </button>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="left" placement="left">
                <button class="button is-info has-text-centered">
                  <span>left</span>
                </button>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="bottom-right" placement="bottom-right">
                <button class="button is-primary has-text-centered">
                  <span>bottom-right</span>
                </button>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="bottom" placement="bottom">
                <button class="button is-warning has-text-centered">
                  <span>bottom</span>
                </button>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="bottom-left" placement="bottom-left">
                <button class="button is-danger has-text-centered">
                  <span>bottom-left</span>
                </button>
              </tooltip>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="columns is-multiline is-mobile">
            <div class="column">
              <tooltip label="info" type="info">
                <button class="button is-info has-text-centered">
                  <span>info</span>
                </button>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="primary" type="primary">
                <button class="button is-primary has-text-centered">
                  <span>primary</span>
                </button>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="success" type="success">
                <button class="button is-success has-text-centered">
                  <span>success</span>
                </button>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="warning" type="warning">
                <button class="button is-warning has-text-centered">
                  <span>warning</span>
                </button>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="danger" type="danger">
                <button class="button is-danger has-text-centered">
                  <span>danger</span>
                </button>
              </tooltip>
            </div>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h1 class="title">Sizes</h1>
          <div class="columns is-multiline is-mobile">
            <div class="column">
              <tooltip label="small" type="small" placement="bottom-right">
                <button class="button has-text-centered">
                  <span>small</span>
                </button>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="medium" type="medium">
                <button class="button has-text-centered">
                  <span>medium</span>
                </button>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="large" size="large" placement="bottom-left">
                <button class="button has-text-centered">
                  <span>large</span>
                </button>
              </tooltip>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'

export default {
  components: {
    Tooltip
  }
}
</script>

<style lang="scss" scoped>
.column {
  margin: 25px auto;
}

.button {
  width: 100%;
}

.tooltip {
  display: inherit;
}
</style>
