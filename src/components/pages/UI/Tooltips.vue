<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Placements</h1>
          <div class="columns is-multiline is-mobile">
            <div class="column is-one-third">
              <tooltip label="top-right" placement="top-right">
                <p class="notification is-primary has-text-centered">
                  <span>top-right</span>
                </p>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="top" placement="top">
                <p class="notification is-warning has-text-centered">
                  <span>top</span>
                </p>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="top-left" placement="top-left">
                <p class="notification is-danger has-text-centered">
                  <span>top-left</span>
                </p>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="right" placement="right">
                <p class="notification is-info has-text-centered">
                  <span>right</span>
                </p>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="no animate, always, rounded, large, bounce, success" placement="top" type="success" size="large" :no-animate="true" :always="true" :rounded="true">
                <p class="notification is-success has-text-centered">
                  <span>no animate, always, rounded, large, bounce, success</span>
                </p>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="left" placement="left">
                <p class="notification is-info has-text-centered">
                  <span>left</span>
                </p>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="bottom-right" placement="bottom-right">
                <p class="notification is-primary has-text-centered">
                  <span>bottom-right</span>
                </p>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="bottom" placement="bottom">
                <p class="notification is-warning has-text-centered">
                  <span>bottom</span>
                </p>
              </tooltip>
            </div>
            <div class="column is-one-third">
              <tooltip label="bottom-left" placement="bottom-left">
                <p class="notification is-danger has-text-centered">
                  <span>bottom-left</span>
                </p>
              </tooltip>
            </div>
          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="columns is-multiline is-mobile">
            <div class="column">
              <tooltip label="info" type="info">
                <p class="notification is-info has-text-centered">
                  <span>info</span>
                </p>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="primary" type="primary">
                <p class="notification is-primary has-text-centered">
                  <span>primary</span>
                </p>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="success" type="success">
                <p class="notification is-success has-text-centered">
                  <span>success</span>
                </p>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="warning" type="warning">
                <p class="notification is-warning has-text-centered">
                  <span>warning</span>
                </p>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="danger" type="danger">
                <p class="notification is-danger has-text-centered">
                  <span>danger</span>
                </p>
              </tooltip>
            </div>
          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Sizes</h1>
          <div class="columns is-multiline is-mobile">
            <div class="column">
              <tooltip label="small" type="small" placement="bottom-right">
                <p class="notification has-text-centered">
                  <span>small</span>
                </p>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="medium" type="medium">
                <p class="notification has-text-centered">
                  <span>medium</span>
                </p>
              </tooltip>
            </div>
            <div class="column">
              <tooltip label="large" size="large" placement="bottom-left">
                <p class="notification has-text-centered">
                  <span>large</span>
                </p>
              </tooltip>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from '../../ui/Tooltip'

export default {
  components: {
    Tooltip
  }
}
</script>

<style lang="scss" scoped>
.tooltip {
  display: inherit;
}
</style>
