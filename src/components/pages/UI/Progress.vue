<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
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

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Sizes</h1>
          <div class="block">
            <progress-bar :size="'small'" :value="15" :max="100" :show-label="true"></progress-bar>
            <progress-bar :size="''" :value="30" :max="100" :show-label="true"></progress-bar>
            <progress-bar :size="'medium'" :value="45" :max="100" :show-label="true"></progress-bar>
            <progress-bar :size="'large'" :value="60" :max="100" :show-label="true"></progress-bar>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '../../ui/ProgressBar'

export default {
  components: {
    ProgressBar
  },

  methods: {
  }

}
</script>

<style lang="scss" scoped>
.button {
  margin: 5px 0 0;
}
</style>
