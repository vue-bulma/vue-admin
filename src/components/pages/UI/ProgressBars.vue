<template>
  <div class="notifications-box">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="block styles-box">
            <x-progress :value="15" :max="100"></x-progress>
            <x-progress :type="'primary'" :value="30" :max="100"></x-progress>
            <x-progress :type="'info'" :value="45" :max="100"></x-progress>
            <x-progress :type="'success'" :value="60" :max="100"></x-progress>
            <x-progress :type="'warning'" :value="75" :max="100"></x-progress>
            <x-progress :type="'danger'" :value="90" :max="100"></x-progress>
          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Sizes</h1>
          <div class="block">
            <x-progress :type="'small'" :value="15" :max="100" :show-label="true"></x-progress>
            <x-progress :type="''" :value="30" :max="100" :show-label="true"></x-progress>
            <x-progress :type="'medium'" :value="45" :max="100" :show-label="true"></x-progress>
            <x-progress :class="'is-large'" :value="60" :max="100" :show-label="true"></x-progress>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import XProgress from '../../ui/Progress'

export default {
  components: {
    XProgress
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
