<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Bar Styles</h1>
          <div class="block styles-box">
            <progress-bar :value="15" :max="100"></progress-bar>
            <progress-bar :type="'primary'" :value="30" :max="100"></progress-bar>
            <progress-bar :type="'info'" :value="45" :max="100"></progress-bar>
            <progress-bar :type="'success'" :value="60" :max="100"></progress-bar>
            <progress-bar :type="'warning'" :value="75" :max="100"></progress-bar>
            <progress-bar :type="'danger'" :value="90" :max="100"></progress-bar>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Bar Sizes</h1>
          <div class="block">
            <progress-bar :size="'small'" :value="15" :max="100" :show-label="true"></progress-bar>
            <progress-bar :size="''" :value="30" :max="100" :show-label="true"></progress-bar>
            <progress-bar :size="'medium'" :value="45" :max="100" :show-label="true"></progress-bar>
            <progress-bar :size="'large'" :value="60" :max="100" :show-label="true"></progress-bar>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Bar Dynamics</h1>
          <div class="block">
            <progress-bar :type="'success'" :size="'large'" :value="dynamicValue" :max="100" :show-label="true"></progress-bar>
            <p class="control has-addons">
              <a class="button" @click="plus">
                <span class="icon is-small">
                  <i class="fa fa-plus"></i>
                </span>
              </a>
              <a class="button" @click="minus">
                <span class="icon is-small">
                  <i class="fa fa-minus"></i>
                </span>
              </a>
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from 'vue-bulma-progress-bar'

export default {
  components: {
    ProgressBar
  },

  data () {
    return {
      dynamicValue: 60
    }
  },

  methods: {
    plus () {
      if (this.dynamicValue === 100) return
      this.dynamicValue += 10
    },

    minus () {
      if (this.dynamicValue === 0) return
      this.dynamicValue -= 10
    }
  }

}
</script>

<style lang="scss" scoped>
.button {
  margin: 5px 0 0;
}
</style>
