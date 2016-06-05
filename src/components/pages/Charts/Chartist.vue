<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">LINES</h4>
        <div class="content">
          <chartist :type="'line'" :data="linesData" :options="linesOptions"></chartist>
        </div>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">BARS</h4>
        <div class="content">
          <chartist :type="'bar'" :data="linesData" :options="linesOptions"></chartist>
        </div>
      </article>
    </div>
  </div>

  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">ANIMATED RADAR</h4>
        <div class="content">
        </div>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">ANIMATED BARS</h4>
        <div class="content">
        </div>
      </article>
    </div>
  </div>

  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">RADAR</h4>
        <div class="content">
        </div>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">LINE</h4>
        <div class="content">
        </div>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">BARS</h4>
        <div class="content">
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Chartist from '../../ui/Chartist'

export default {
  components: {
    Chartist
  },

  data () {
    return {
      linesData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      },
      linesOptions: {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      }
    }
  },

  computed: {
  },

  created () {
  }
}
</script>

<style scoped>
</style>
