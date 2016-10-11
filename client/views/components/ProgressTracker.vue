<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h1 class="title">Tracker Styles</h1>
          <div class="block styles-box">
            <progress-tracker>
              <step-item v-for="n in [1, 2, 3, 4, 5]" :is-complete="n < 3" :is-active="n === 3"></step-item>
            </progress-tracker>
            <progress-tracker>
              <step-item v-for="n in [1, 2, 3, 4, 5]" :marker="n + ''"></step-item>
            </progress-tracker>
            <progress-tracker>
              <step-item v-for="n in [1, 2, 3, 'A', 'B']" :marker="n + ''"></step-item>
            </progress-tracker>
            <progress-tracker border>
              <step-item v-for="n in [1, 2, 3, 'A', 'B']" :marker="n + ''"></step-item>
            </progress-tracker>
            <progress-tracker spaced>
              <step-item v-for="n in [1, 2, 3, 'A', 'B']" :marker="n + ''"></step-item>
            </progress-tracker>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h1 class="title">Tracker Dynamics</h1>
          <div class="block">
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Tracker Alignments</h1>
          <div class="block">
            <progress-tracker>
              <step-item v-for="n in [1, 2, 3, 4, 5]"></step-item>
            </progress-tracker>
            <progress-tracker alignment="center">
              <step-item v-for="n in [1, 2, 3, 4, 5]"></step-item>
            </progress-tracker>
            <progress-tracker alignment="right">
              <step-item v-for="n in [1, 2, 3, 4, 5]"></step-item>
            </progress-tracker>
            <progress-tracker word>
              <step-item v-for="item in stepItems" :marker="item.marker" :title="item.title"></step-item>
            </progress-tracker>
            <progress-tracker word word-align="center">
              <step-item v-for="item in stepItems" :marker="item.marker" :title="item.title"></step-item>
            </progress-tracker>
            <progress-tracker word text-align="right">
              <step-item v-for="item in stepItems" :marker="item.marker" :title="item.title"></step-item>
            </progress-tracker>
            <progress-tracker text>
              <step-item v-for="item in stepItems" :marker="item.marker" :title="item.title"></step-item>
            </progress-tracker>
            <progress-tracker text alignment="center">
              <step-item v-for="item in stepItems" :marker="item.marker" :title="item.title"></step-item>
            </progress-tracker>
            <progress-tracker text alignment="right">
              <step-item v-for="item in stepItems" :marker="item.marker" :title="item.title"></step-item>
            </progress-tracker>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressTracker, { StepItem } from 'vue-bulma-progress-tracker'

export default {
  components: {
    ProgressTracker,
    StepItem
  },

  data () {
    return {
      stepItems: [
        {
          title: 'Step 1'
        },
        {
          title: 'Step 2'
        },
        {
          title: 'Step 3'
        },
        {
          title: 'Step 4'
        },
        {
          title: 'Step 5'
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.button {
  margin: 5px 0 0;
}
</style>
